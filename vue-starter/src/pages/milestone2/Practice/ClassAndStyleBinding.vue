<template>
  <div :class="{ active: isActive }">
    div1
  </div>

  <div :class="[isActive ? activeClass : '', errorClass]">
    div2
  </div>

  <div :style="styleObject" >
    binding style object
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name: 'ClassAndStyleBinding',
    setup(){
      const isActive = ref(true)
      const hasError = ref(false)
      const errorClass = ref('error')
      const styleObject = reactive({
        color: 'green',
        background: 'yellow'
      })
      return{
        isActive,
        hasError,
        errorClass,
        styleObject
      }
    }
}
</script>

<style scoped>
  .error{
    color: red
  }
</style>