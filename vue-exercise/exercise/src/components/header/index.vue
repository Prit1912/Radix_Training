<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand me-5" href="/">
        <b class="main-color" > VUE-STARTER </b>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'ContactList'}">Contact List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import "../../assets/css/style.css";
export default {
  name: "header",
};
</script>

<style></style>