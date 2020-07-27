<template>
  <div id="employee-table">
    <h1 class="headline">Employees</h1>
    <img :src="image" />
    <div class="settingIcon"></div>
    <div id="logo"></div>
    <table class="table">
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Richard Hendricks</td>
          <td>richard@piedpiper.com</td>
        </tr>
        <tr>
          <td>Bertram Gilfoyle</td>
          <td>gilfoyle@piedpiper.com</td>
        </tr>
        <tr>
          <td>Dinesh Chugtai</td>
          <td>dinesh@piedpiper.com</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import logo from "../assets/images/logo.png";

export default {
  name: "employee-table",
  data: function() {
    return {
      image: logo,
    };
  },
};
</script>

<style scoped>
.settingIcon {
  background-image: url("./../assets/images/logo.png");
  background-repeat: no-repeat;
  height: 200px;
  width: 250px;
}
</style>
