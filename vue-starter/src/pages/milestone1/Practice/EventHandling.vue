<template>
<p class="h6 txt-primary">Event Handling</p>
<hr>
<p class="txt-primary h6" >On Click event</p>
<button class="btn btn-success" @click="increment" ><i class="fas fa-plus" ></i></button>
  <span class="h4 p-3" >{{count}}</span> 
<button class="btn btn-success" @click="decrement" ><i class="fas fa-minus" ></i></button>
<hr>

<!-- using $event special variable -->
<p class="txt-primary h6">Accessing Event Argument in Inline Handlers</p>

<button class="btn btn-danger me-3" @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button class="btn btn-primary me-3" @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
<hr>

<!-- key modifiers -->
<p class="txt-primary h6">Key modifier</p>
<button class="btn btn-warning" @click.ctrl="doThis">ctrl+click</button>
<br><br>
<input type="text" @keyup.alt.enter="clear"> press alt + enter to clear text
<hr>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let count = ref(0);

        let increment = ()=>{
            count.value++;
        }

        let decrement = ()=>{
            count.value--;
        }

         let warn = function(message, event) {
            if (event) {
            event.preventDefault()
            }
            alert(message)
        }

        let doThis = ()=>{
            alert('ctrl + click')
        }

        let clear = (event)=>{
            event.target.value = ""
        }

        return {
            count ,
            increment,
            decrement,
            warn,
            doThis,
            clear
        }
    }
}
</script>

<style scoped >

</style>