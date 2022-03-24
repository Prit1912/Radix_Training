<template>
  <p class="txt-primary h6">Reactivity</p>
  {{ user }} <br />
  <hr />

  <p class="txt-primary h6">Ref</p>
  {{ user1 }} <br />
  {{ name }}
  <hr />

  <!-- {{ name1 }} -->
  <button  class="btn btn-success" @click="changeName">click</button>

  <!-- <input type="text" @change="changeInp(searchString)" v-model="searchString" > -->
</template>

<script>
import { onMounted, onUpdated, reactive, ref } from "vue";
export default {
  name: "Reactivity",
  setup() {
    let searchString = ref("")
    let user = reactive({
      name: "Prit",
      age: "21",
    });
    let user1 = ref({
      name: "Tirth",
      age: "16",
    });
    let name = ref("man");
    // let name1 = reactive(true);

    onUpdated(()=>{
        console.log('updated called')
    })

    let changeName = ()=>{
        name.value == 'Man R.' ? name.value = 'Man' : name.value = 'Man R.'
    }

    // let changeInp = () =>{
    //     console.log(searchString.value)
    //     console.log('hi')
    // }

    onMounted(()=>{
         setTimeout(()=>{
            user.name = 'Prit R'
            user1.value.name = 'Tirth H'
            // name1 = false; // this will not work. it should be object only in reactive
        },1000)
    })

    return{
        user,
        user1,
        name,
        // name1,
        changeName,
        // changeInp,
        searchString
    }
  },
};
</script>

<style></style>
