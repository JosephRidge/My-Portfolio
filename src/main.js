import { createApp } from "vue";
//import vue-router methods
import { createRouter, createWebHistory } from "vue-router";
//import route components
import HomePage from "./components/HomePage.vue";
import ProjectsDone from "./components/ProjectsDone.vue";
import About from "./components/About.vue";
import Blog from "./components/Blog.vue";

import App from "./App.vue";

import "./style/index.css";

//Route records : routes for navigations using vue-router, each route maps to a component
const routes = [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  { path: "/projects", component: ProjectsDone },
  { path: "/blog", component: Blog },
  { path: "/about", component: About },
];

//create the vue router instance and pass routes as option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

//add the router-view tag to the main app.vue component to enable any active page to be rendered within it.
//app.vue is our single page
createApp(App).use(router).mount("#app");
