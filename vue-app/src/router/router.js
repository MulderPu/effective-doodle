import Vue from "vue";
import Router from "vue-router";
import EmployeeTable from "../components/EmployeeTable.vue";
import About from "../components/About.vue";
import Users from "../components/Users.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "EmployeeTable",
      component: EmployeeTable,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/users/:id",
      name: "Users",
      component: Users,
    },
  ],
});
