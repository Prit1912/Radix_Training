<template>
  <div class="container p-3">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Contact Detail</h5>
            <button
              type="button"
              id="closeModal"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 form" @submit="submit">
              <div class="col-12">
                <label for="firstName" class="form-label required"
                  >Firstname</label
                >
                <input
                  type="text"
                  v-model.trim="firstName"
                  class="form-control"
                  id="firstName"
                />
                <span class="error">{{ errorfirstName }}</span>
              </div>
              <div class="col-12">
                <label for="lastName" class="form-label required"
                  >Lastname</label
                >
                <input
                  type="text"
                  v-model.trim="lastName"
                  class="form-control"
                  id="lastName"
                />
                <span class="error">{{ errorlastName }}</span>
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label required"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="inputEmail4"
                />
                <span class="error">{{ errorEmail }}</span>
              </div>
              <div class="col-12">
                <label for="phone" class="form-label required">Phone</label>
                <input
                  type="number"
                  v-model="phone"
                  class="form-control"
                  id="phone"
                />
                <span class="error">{{ errorPhone }}</span>
              </div>
              <div class="col-12">
                <button type="submit" class="btn main-bg-color text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row my-4">
      <div class="col-sm-4">list of contacts</div>
      <div class="col-sm-4 ms-auto">
        <select @change="changeSortOrder" class="form-select" aria-label="Default select example">
          <option selected>Sort by createdAt</option>
          <option value="-1">Latest to oldest</option>
          <option value="1">oldest to latest</option>
        </select>
      </div>
      <div class="col-sm-4">
        <form class="d-flex" @submit.prevent="search">
          <input
            class="form-control me-2"
            v-model="searchString"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Created At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="contact of getAllContacts" :key="contact._id">
          <tr v-if="contact.isActive == true">
            <th scope="row">{{ getShortId(contact._id) }}</th>
            <td>{{ contact.firstName }}</td>
            <td>{{ contact.lastName }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>{{ `${new Date(contact.createdAt).toLocaleString()}` }}</td>
            <td>
              <button
                class="btn"
                @click="getContactData(contact._id)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn" @click="deleteContact(contact._id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="row">
      <div class="col my-5 d-flex justify-content-center">
        <v-pagination
          v-model="page"
          :pages="pages"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="updateHandler(page)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import contactService from "../../services/contact";
import { getShortId } from "../../helper/contact";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  name: "contactList",
  components: {
    VPagination,
  },
  data() {
    let contactData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = yup.object({
      firstName: yup.string().min(2).required("firstName is required"),
      lastName: yup.string().min(2).required("lastName is required"),
      email: yup
        .string()
        .email("must be a valid email")
        .required("email is required"),
      phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .max(10, "max 10 digits are allowed")
        .required("phone number is required"),
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: firstName, errorMessage: errorfirstName } =
      useField("firstName");
    const { value: lastName, errorMessage: errorlastName } =
      useField("lastName");
    const { value: email, errorMessage: errorEmail } = useField("email");
    const { value: phone, errorMessage: errorPhone } = useField("phone");

    contactData.firstName = firstName;
    contactData.lastName = lastName;
    contactData.email = email;
    contactData.phone = phone;

    const submit = handleSubmit((values) => {
      console.log("called");
      console.log(values);
      this.updateContact(values);
    });
    return {
      page: 1,
      pages: null,
      limit: 5,
      getAllContacts: [],
      sortOrder: -1,
      searchString: "",
      getShortId,
      contactData,
      firstName,
      lastName,
      email,
      phone,
      errorfirstName,
      errorlastName,
      errorPhone,
      errorEmail,
      submit,
      currContactId: null,
    };
  },
  mounted() {
    contactService
      .getAllContacts(this.page, this.limit, this.sortOrder, this.searchString)
      .then((res) => {
        console.log(res);
        if (res) {
          this.$store.dispatch("contact/setAllContacts", res.data.docs);
          this.getAllContacts = res.data.docs;
          console.log(res.data.docs.length);
          this.pages = res.data.totalPages;
        }
      })
      .catch((Err) => {
        console.log(Err);
      });
  },
  computed: {
    // ...mapGetters("contact", ["getAllContacts"]),
  },
  methods: {
    updateHandler(page) {
      console.log(page);
      contactService
        .getAllContacts(page, this.limit, this.sortOrder, this.searchString)
        .then((res) => {
          console.log(res);
          if (res) {
            this.$store.dispatch("contact/setAllContacts", res.data.docs);
            this.getAllContacts = res.data.docs;
            console.log(res.data);
            this.pages = res.data.totalPages;
          }
        })
        .catch((Err) => {
          console.log(Err);
        });
    },
    search() {
      console.log(this.searchString);
      contactService
        .getAllContacts(
          this.page,
          this.limit,
          this.sortOrder,
          this.searchString
        )
        .then((res) => {
          console.log(res);
          if (res) {
            this.$store.dispatch("contact/setAllContacts", res.data.docs);
            this.getAllContacts = res.data.docs;
            console.log(res.data);
            this.pages = res.data.totalPages;
          }
        })
        .catch((Err) => {
          console.log(Err);
        });
    },
    deleteContact(id) {
      console.log(id);
      contactService
        .deleteContact(id)
        .then((res) => {
          console.log(res);
          contactService
            .getAllContacts(
              this.page,
              this.limit,
              this.sortOrder,
              this.searchString
            )
            .then((res) => {
              console.log(res);
              if (res) {
                this.$store.dispatch("contact/setAllContacts", res.data.docs);
                this.getAllContacts = res.data.docs;
                console.log(res.data);
                this.pages = res.data.totalPages;
              }
            })
            .catch((Err) => {
              console.log(Err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getContactData(id) {
      this.currContactId = id;
      contactService
        .getContact(id)
        .then((res) => {
          console.log(res);
          this.firstName = res.data.firstName;
          this.lastName = res.data.lastName;
          this.email = res.data.email;
          this.phone = res.data.phone;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateContact(data) {
      contactService
        .updateContact(this.currContactId, data)
        .then((res) => {
          console.log(res);
          this.$store.dispatch("contact/updateContact", {
            data,
            id: this.currContactId,
          });
          document.getElementById("closeModal").click();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    changeSortOrder(e){
      console.log(e.target.value)
      this.sortOrder = e.target.value
      contactService
        .getAllContacts(this.page, this.limit, this.sortOrder, this.searchString)
        .then((res) => {
          console.log(res);
          if (res) {
            this.$store.dispatch("contact/setAllContacts", res.data.docs);
            this.getAllContacts = res.data.docs;
            console.log(res.data);
            this.pages = res.data.totalPages;
          }
        })
        .catch((Err) => {
          console.log(Err);
        });
    }
  },
};
</script>

<style></style>
