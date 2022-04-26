<template>
  <h3>reusable components</h3>
  <HeaderComp />
  <br>
  <FooterComp />
</template>

<script>
import HeaderComp from '../Components/HeaderComp.vue'
import FooterComp from '../Components/FooterComp.vue'
export default {
  name: 'reusable',
  components:{
    HeaderComp,
    FooterComp  
  }
}
</script>

<style>

</style>