import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "projects",
      component: () => import("./components/Projects.vue")
    },
    {
      path: "/project/:project_id",
      name: "project",
      component: () => import("./components/Project.vue")
    }
  ]
});
