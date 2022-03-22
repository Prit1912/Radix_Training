<template>
  <ul>
    <li v-for="topic of topics" :key="topic">
      <router-link :to="{ name: `${topic}` }">{{ topic }}</router-link>
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
  color: #ee4865 !important;
}
a {
  color: wheat !important;
  text-decoration: none;
}
</style>
