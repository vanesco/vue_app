import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("@/views/Home.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import("@/views/Home.vue")
    },
    {
      path: "/careers",
      name: "careers",
      component: () =>
        import("@/views/Careers.vue")
    },
    {
      path: "/work",
      name: "work",
      component: () =>
        import("@/views/Work.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("@/views/Contact.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import("@/views/Admin.vue")
    },
  ]
});
