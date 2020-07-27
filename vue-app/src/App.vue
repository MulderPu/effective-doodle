<template>
  <div id="app">
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
      <a class="navbar-brand" href="#">
        <img :src="logo" alt="Logo" style="width:40px;" />
      </a>
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'EmployeeTable' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users/1" class="nav-link">User</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import logo from "./assets/images/logo.png";

export default {
  name: "App",
  data: function() {
    return { logo: logo };
  },
};
</script>
