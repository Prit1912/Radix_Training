<template>
  <p class="h3">Axios</p>
  <br />
  <div id="app">

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else v-for="quote in quotes" :key="quote">
       Author: {{ quote.author ? quote.author : `unknown` }} <br>
       Quote: {{quote.text}}<br /><br />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quotes: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        this.quotes = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>
