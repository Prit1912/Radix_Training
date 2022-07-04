<template>
  <div class="container p-3">

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <div class="row my-4">
      <div class="col-sm-4">list of contacts</div>
      <div class="col-sm-4 ms-auto">
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
        <template v-for="contact of getAllContacts" :key="contact._id" >
          <tr v-if="contact.isActive == true" >
            <th scope="row">{{ getShortId(contact._id) }}</th>
            <td>{{ contact.firstName }}</td>
            <td>{{ contact.lastName }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>{{ `${new Date(contact.createdAt).toLocaleString()}` }}</td>
            <td>
              <button class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen"></i></button>
              <button class="btn" @click="deleteContact(contact._id)"><i class="fa-solid fa-trash"></i></button>
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

export default {
  name: "contactList",
  components: {
    VPagination,
  },
  data() {
    return {
      page: 1,
      pages: null,
      limit: 5,
      getAllContacts: [],
      sortOrder: 1,
      searchString: "",
      getShortId,
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
    },
    deleteContact(id){
      console.log(id)
      contactService.deleteContact(id).then((res)=>{
        console.log(res);
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
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
};
</script>

<style></style>
