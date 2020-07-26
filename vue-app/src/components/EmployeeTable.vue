<template>
  <div id="employee-table">
    <img id="home" height="75px" width="75px" />

    <!-- <img src="../assets/images/logo.png" /> -->
    <!-- <img :src="image" /> -->
    <!-- <img :src="require('../assets/images/logo.png')" /> -->
    <div class="settingIcon"></div>
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
import logoIcon from "./../assets/images/logo.png";

export default {
  name: "employee-table",
};

var logoImg = document.getElementById("home");
console.log(logoImg);
// logoImg.src = logoIcon;
</script>

<style scoped>
.settingIcon {
  background-image: url("./../assets/images/logo.png");
  background-repeat: no-repeat;
  height: 200px;
  width: 250px;
  /* display: inline-block; */
}
</style>
