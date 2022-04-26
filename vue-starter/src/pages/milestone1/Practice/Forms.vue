<template>
  <p class="h6 txt-primary">Template Refs</p>
  <input type="text" ref="inpText" placeholder="template ref example" />
  <hr />

  <p class="h6 txt-primary">Form Validation</p>
  <div class="row">
    <div class="col-12 col-sm-10 col-md-6 bg-white p-3 border rounded">
      <form @submit="submit" >
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="formData.name"
              class="form-control"
              id="name"
            />
            <span class="error" >{{errorName}}</span>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              v-model="formData.email"
              class="form-control"
              id="inputEmail3"
            />
            <span class="error" >{{errorEmail}}</span>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              v-model="formData.password"
              class="form-control"
              id="inputPassword3"
            />
            <span class="error" >{{errorPassword}}</span>
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Type</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="user"
                v-model="formData.type"
                checked
              />
              <label class="form-check-label" for="gridRadios1"> User </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="instructor"
                v-model="formData.type"
              />
              <label class="form-check-label" for="gridRadios2">
                Instructor
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row mb-3">
          <label for="interests" class="col-form-label col-sm-2 pt-0"
            >Interests</label
          >
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="designer"
                v-model="formData.interests"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >Designer</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="developer"
                v-model="formData.interests"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >Developer</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="tester"
                v-model="formData.interests"
              />
              <label class="form-check-label" for="inlineCheckbox3"
                >Tester</label
              >
            </div>
            <br>
            <!-- <span class="error" >{{errorInterests}}</span> -->
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-2">
            <label for="selectMenu" class="col-form-label col-sm-2 pt-0"
              >City</label
            >
          </div>
          <div class="col-sm-10">
            <select
              class="form-select"
              id="selectMenu"
              v-model="formData.city"
              aria-label="Default select example"
            >
              <option value="ahmedabad">Ahmedabad</option>
              <option value="navsari">Navsari</option>
              <option value="saurat">Surat</option>
              <option value="gandhinagar">Gandhinagar</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button :disabled="isDisabled" class="btn btn-danger">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, reactive, ref } from "vue";
import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    let inpText = ref(null);
    let isDisabled = ref(true);
    let formData = reactive({
      name: "",
      email: "",
      password: "",
      type: "user",
      interests: ['developer'],
      city: "navsari",
    });

    const validationSchema = yup.object({
      name: yup.string().min(2).required('name is required'),
      email: yup.string().email().required('email is required'),
      password: yup.string().required('password is required'),
    })

    const { handleSubmit } = useForm({
      validationSchema
    })

    const {value: name, errorMessage: errorName} = useField('name');
    const {value: email, errorMessage: errorEmail} = useField('email');
    const {value: password, errorMessage: errorPassword} = useField('password');
    // const {value: interests, errorMessage: errorInterests} = useField('interests')

    formData.name = name;
    formData.email = email;
    formData.password = password;
    // formData.interests = interests;
    console.log(formData)

    const submit = handleSubmit((values)=>{
      values = {...values,type: formData.type, interests: formData.interests, city: formData.city}
      console.log(values);
    })

    onMounted(() => {
      inpText.value.focus();
      inpText.value.style.border = "2px solid red";
      console.log(inpText.value);
    });

    onUpdated(()=>{
      console.log('updated called')
    })

    return {
      inpText,
      isDisabled,
      formData,
      errorName,
      errorEmail,
      errorPassword,
      // errorInterests,
      submit
    };
  },
};
</script>

<style scoped>
  .error{
    color: red;
  }
</style>
