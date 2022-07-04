<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-12">
        <form class="row g-3 form" @submit="submit">
          <div class="col-12">
            <label for="firstName" class="form-label required">Firstname</label>
            <input type="text" v-model.trim="firstName" class="form-control" id="firstName" />
            <span class="error" >{{errorfirstName}}</span>
          </div>
          <div class="col-12">
            <label for="lastName" class="form-label required">Lastname</label>
            <input type="text" v-model.trim="lastName" class="form-control" id="lastName" />
            <span class="error" >{{errorlastName}}</span>
          </div>
          <div class="col-12">
            <label for="inputEmail4" class="form-label required">Email</label>
            <input type="email" v-model="email" class="form-control" id="inputEmail4" />
            <span class="error" >{{errorEmail}}</span>
          </div>
          <div class="col-12">
            <label for="phone" class="form-label required">Phone</label>
            <input type="number" v-model="phone" class="form-control" id="phone" />
            <span class="error" >{{errorPhone}}</span>
          </div>
          <div class="col-12">
            <button type="submit" class="btn main-bg-color text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import contactService from '../../services/contact';
export default {
  name: "Contact",
  props: ['pro'],
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
      validationSchema
    })

    
    const {value: firstName, errorMessage: errorfirstName} = useField('firstName');
    const {value: lastName, errorMessage: errorlastName} = useField('lastName');
    const {value: email, errorMessage: errorEmail} = useField('email');
    const {value: phone, errorMessage: errorPhone} = useField('phone');

    contactData.firstName = firstName;
    contactData.lastName = lastName;
    contactData.email = email;
    contactData.phone = phone;

     const submit = handleSubmit((values)=>{
      console.log('called')
      console.log(values);
      this.addContact(values);
    })

    return {
      contactData,
      firstName,
      lastName,
      email,
      phone,
      errorfirstName,
      errorlastName,
      errorPhone,
      errorEmail,
      submit
    }
  
  },
  mounted(){
    console.log(this.$store)
  },  
  methods:{
    addContact(data){
      contactService.addContact(data).then((res)=>{
        console.log(res);
        this.$store.dispatch("contact/addContact", res.data);
      }).catch((err)=>{
        console.log(err.response.data);
      })
    }
  }
};
</script>

<style scoped>
.form {
  padding: 50px;
}
</style>
