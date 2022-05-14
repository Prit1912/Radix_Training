<template>
  <ul>
    <li v-for="topic of topics" :key="topic">
      <router-link :to="{ name: `${topic}` }"> <i class="fa-solid fa-circle-arrow-right"></i> {{ topic }} </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "sidebar",
  props: ["topics", "title"],
};
</script>

<style scoped>
.router-link-exact-active {
  color: var(--secondary-color) !important;
  font-size: 1.1rem;
}
a {
  color: wheat !important;
  text-decoration: none;
}
li{
  padding: 5px;
  list-style: none;
}
li:hover{
  font-size: 1.1rem;
}
</style>
