<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 p-5">
        <p class="display-6 mb-3"><b> Contact Us </b></p>
        <form @submit="submit" >
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="name">Name</label>
              <input
                v-model="formData.name"
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
              {{errorName}}
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
              v-model="formData.email"
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="abc@gmail.com"
              />
              {{errorEmail}}
            </div>
            <div class="form-group col-md-6">
              <label for="message">Message</label>
              <textarea
              v-model="formData.message"
                type="text"
                class="form-control"
                id="message"
                placeholder="Enter your message here"
              />
              {{errorMessage}}
            </div>
          </div>
          <button v-if="isUpdate" class="btn bg-secondary mt-2 txt-primary" >
            Update
          </button>
          <button v-else type="submit" class="btn bg-secondary mt-2 txt-primary">
            Submit
          </button>
        </form>
      </div>
      <div class="col-sm-6 p-5">
        <p class="display-6 mb-3"><b> Contacts Data </b></p>
        <div class="table-responsive" >
          <table class="table table-bordered table-striped" >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="allContactsData.length" >
              <tr v-for="(data) of newContactsData" :key="data.id" >
                <td>{{data.id}}</td>
                <td>{{data.name}}</td>
                <td>{{data.email}}</td>
                <td>{{data.message}}</td>
                <td> <button @click="updateData(data.id)" > <i class="fa-solid fa-pen-to-square me-2 txt-primary"></i></button> <button @click="removeContactData(data.id)"> <i class="fa-solid fa-trash txt-secondary"  ></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
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
    </div>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import {contactStore} from '../../store/contactData';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  name: "exerciseBasePage",
  components: {
    VPagination 
  },  
  data() {
    let formData = {
      name: "",
      email: "",
      message: "",
    };
    
    const contactDataStore = contactStore();
    const allContactsData = contactDataStore.getContactsData

    const validationSchema = yup.object({
      name: yup
        .string()
        .min(2, "Name should be atleast 2 char long")
        .required("Name is required"),
      email: yup
        .string()
        .email("must be a valid email")
        .required("Email is required"),
      message: yup
        .string()
        .min(4, "minimum 4 character required")
        .required("Message is required"),
    });
    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: name, errorMessage: errorName } = useField("name");
    const { value: email, errorMessage: errorEmail } = useField("email");
    const { value: message, errorMessage: errorMessage } =
      useField("message");
    formData.name = name;
    formData.email = email;
    formData.message = message;

    const submit = handleSubmit((values) => {
      console.log(formData)
      console.log(values)
      if(this.isUpdate){
        contactDataStore.updateContactData(values, this.currentId)
        formData.name = "";
        formData.email = "";
        formData.message = "";
        this.isUpdate = false
        this.$router.go();
      }else{
        console.log(values);
        contactDataStore.addContactData(values)
        formData.name = "";
        formData.email = "";
        formData.message = "";
        this.$router.go();
      }
    });

    return {
      submit,
      name,
      email,
      message,
      errorName,
      errorEmail,
      errorMessage,
      formData,
      contactDataStore,
      allContactsData,
      isUpdate: false,
      currentId: null,
      page: 1,
      pages: 5,
      contactsPerPage: 5,
      newContactsData: [],
    };
  },
  mounted(){
    let page = 1;
      this.newContactsData = this.allContactsData.slice(
          this.contactsPerPage * (page - 1),
          page * this.contactsPerPage
        );
    this.pages = this.newContactsData.length/this.contactsPerPage + 1
  },
  methods: {
    // sendData(data){
    //   console.log(data)
    //   this.contactDataStore.updateContactData(data, this.currentId)
    //   this.isUpdate = false;
    //   this.formData.name = "";
    //   this.formData.email = "";
    //   this.formData.message = "";
    // },
    updateData(id){
      this.currentId = id;
      let contactData = this.allContactsData.find((data)=>{
        return data.id === id
      })
      this.formData.name = contactData.name;
      this.formData.email = contactData.email;
      this.formData.message = contactData.message;
      this.isUpdate = true;
    },
    updateHandler(page){
      this.newContactsData = this.allContactsData.slice(
          this.contactsPerPage * (page - 1),
          page * this.contactsPerPage
        );
    },
    removeContactData(id){
      this.contactDataStore.removeContactData(id);
      this.$router.go()
    }
  }
};
</script>

<style>

</style>
