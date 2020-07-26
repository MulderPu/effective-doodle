<template>
  <div id="app">
    <h1 class="headline">Employees</h1>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.headline {
  color: red;
}
</style>
