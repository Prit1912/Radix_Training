<template>
  <!-- v-txt -->
  <p class=" txt-primary h6">v-text</p>
  <p v-text="txt"></p>
  <!-- same as -->
  <p>{{txt}}</p>
  <hr />

  <!-- v-html -->
  <p class=" txt-primary h6">v-html</p>
  <p v-html="htmlTxt"></p>
  <hr />

  <!-- v-show -->
  <p class=" txt-primary h6">v-show</p>
  <p v-show="ok">Hello how are you</p>
  <hr />

  <!-- v-if and v-else -->
  <p class=" txt-primary h6">v-if & v-else</p>
  <p v-if="ok">You can see this</p>
  <p v-else>This is else block</p>
  <hr />

  <!-- v-for -->
  <p class=" txt-primary h6">v-for</p>
  <p v-for="item of items" :key="item.id">
      {{item.name}}
  </p>
  <hr />

  <!-- v-on -->
  <p class=" txt-primary h6">onClick</p>
  <button @click="btnclicked" class="btn btn-warning">Click me</button>
  <hr />

  <!-- click once -->
  <p class=" txt-primary h6">click once</p>
  <button v-on:click.once="clickOnce" class="btn btn-info" >Click me</button>
  <hr />

  <!-- object syntax -->
  <button class="btn btn-success" v-on="{ mousedown: doThis, mouseup: doThat }">Click me</button> 
  <span>See in console</span>
  <hr />
  


  <!-- key modifier using keyAlias --> 
  <p class="h6 txt-primary" >keyup.enter</p>
  <input @keyup.enter="onEnter" />  
  {{inpFieldValue}} 
  <hr />

  <!-- Slot -->
  <p class="h6 txt-primary" >Slot</p>
  <SlotDemo>This is slot demo <SlotComp></SlotComp> </SlotDemo>
  <SlotDemo>
      <template  v-slot:slot2 >This is slot2</template>
      <template  v-slot:slot3 >This is slot3</template>
  </SlotDemo>
  <hr />

</template>

<script>
import {ref} from 'vue';
import SlotDemo from './SlotDemo.vue'
import SlotComp from './SlotComp.vue'
export default {
    name: 'Directives',
    components:{
        SlotDemo,
        SlotComp
    },
    setup(){
        let txt = 'text directives'
        let htmlTxt = '<span style="color: blueviolet">This is inline css</span>'
        let ok = true;
        let items = [{'id':1,'name':'apple'},{'id':2,'name':'banana'},{'id':3,'name':'mango'}]
        let btnTxt = ref('click me');
        let event = ref('click');
        let inpFieldValue = ref('')

        let btnclicked = ()=>{
            alert('button clicked')
        }

        let clickOnce = ()=>{
            alert('this will work only one time')
        }

        let doThis = ()=>{
            console.time('time1')
            console.log('mouse down')
            console.timeEnd('time1')
        }

        let doThat = ()=>{
            console.time('time2')
            console.log('mouse up')
            console.timeEnd('time2')
        }

        let onEnter = (event)=>{
            inpFieldValue.value = event.target.value
        }

        return {
            txt,
            htmlTxt,
            ok,
            items,
            btnclicked,
            btnTxt,
            event,
            clickOnce,
            doThis,
            doThat,
            onEnter,
            inpFieldValue
        };
    }
}
</script>

<style>

</style>