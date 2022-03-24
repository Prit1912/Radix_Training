<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand txt-secondary" @click="this.$router.push({name: 'indexPage'})" href="#" id="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"> <router-link :to="{ name: 'indexPage' }"> <b> Home </b> </router-link> </a>
        </li> -->
        <li class="nav-item">
          <span class="nav-link" >  <router-link :to="{ name: 'milestone1' }"> <b> Milestone1 </b>  </router-link>  </span>
        </li>
        <li class="nav-item">
           <span class="nav-link" > <router-link :to="{ name: 'milestone2' }"> <b> Milestone2 </b> </router-link></span>
        </li>
        <li class="nav-item">
          <span class="nav-link" >  <router-link :to="{ name: 'exercise' }"> <b> Exercise </b></router-link></span>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    name: "navbarComponent",
    mounted(){
        let logoName = 'VUE-STARTER';
        let i = logoName.length-1;
        let j = setInterval(()=>{
            if(i >= 0){
                document.getElementById('logo').innerHTML = logoName[i] + document.getElementById('logo').innerHTML; 
                i--;
            }else{
                clearInterval(j);
            }
        },100)
        if(document.getElementById('logo').innerHTML != 'VUE-STARTER'){
            document.getElementById.innerHTML = 'VUE_STARTER'
        }
    }
};
</script>

<style scoped>
    .navbar{
        min-height: 7vh;
        position: sticky;
        top: 0;
        left: 0;
        box-shadow: 2px 2px 8px var(--secondary-color);
        z-index: 100;
    }
    .navbar-toggler{
      color: transparent;
      border: none;
      outline: none;
    }
    .router-link-active,.router-link-exact-active{
        color: var(--secondary-color);
    }
    a{
        list-style: none;
        text-decoration: none;
        color: #0e1d37;
        font-size: 17px;
    }
    a:hover{
        color: var(--secondary-color);
    }
    #logo{
      font-size: 20px;
      font-weight: bold;
    }
</style>
