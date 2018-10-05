import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    }
  ]
});
