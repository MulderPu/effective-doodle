<template>
  <div v-if="user != null">
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: ({{ user.address.city }}): {{ user.phone }}</p>
    <div v-if="error != null">
      <p>Error: {{ error.message }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Users",

  data: () => ({ user: "", error: null }),

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData",
  },

  methods: {
    fetchData() {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/users/" +
            this.$route.params.id +
            "/"
        )
        .then((resp) => {
          this.user = resp.data;
          this.error = null;
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err);
          this.error = err;
          this.user = null;
        });
    },
  },
};
</script>
