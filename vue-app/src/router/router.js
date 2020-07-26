import Vue from 'vue'
import Router from 'vue-router'
import EmployeeTable from "../components/EmployeeTable.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmployeeTable',
      component: EmployeeTable
    }
  ]
})