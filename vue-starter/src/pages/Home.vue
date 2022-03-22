<template>
  <Navbar />
  <div id="content">
  <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
export default {
  name: 'HomePage',
  components:{
    Navbar
  }
}
</script>

<style>

</style>
