<template>
<div class="main">
  <div class="header">
    <Header />
  </div>
  <router-view></router-view>
  <div class="footer">
    <Footer />
  </div>
</div>

</template>

<script>
import './assets/css/style.css'
import Header from './components/header/index.vue';
import Footer from './components/footer/index.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
 .main{
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer{
  margin-top: auto;
} 
</style>
