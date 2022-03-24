<template>
  <p class="h6 txt-primary ">Lifecycle hooks in Composition api</p>
  <ul>
      <li>{{onBeforeMount_message}}</li>
      <li>{{onMounted_message}}</li>    
      <li>{{onUnmounted_message}}</li>    
  </ul>
</template>

<script>
import { ref, onMounted, onBeforeMount, onUnmounted, onBeforeUnmount      } from 'vue-demi'
export default {
    name: 'lifecycles',
    setup(){
        let onMounted_message = ref('')
        let onBeforeMount_message = ref('')
        let onUnmounted_message = ref('')


        onBeforeMount(()=>{
            onBeforeMount_message = 'before component mounted'
            console.log('before mount')
        })

        onMounted(()=>{
            onMounted_message.value = 'component mounted'
        })

        onBeforeUnmount(()=>{
            console.log('before unmount')
        })

        onUnmounted(()=>{
            onUnmounted_message.value = 'component unmounted'
            console.log('component unmounted')
        })

        return{
            onMounted_message,
            onBeforeMount_message,
            onUnmounted_message
        }
    }
}
</script>

<style>

</style>