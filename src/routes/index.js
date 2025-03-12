import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: `/movie/:id`,
      component: Movie,
    },
    {
      path: `/:notFound(.*)`,
      component: NotFound,
    },
  ],
});
