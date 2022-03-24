import { createWebHistory, createRouter } from "vue-router";
import Milestone1BasePage from "../pages/milestone1/BasePage.vue";
import Milestone2BasePage from "../pages/milestone2/BasePage.vue";
import ExerciseBasePage from "../pages/exercise/BasePage.vue";
import IndexPage from "../pages/Main/Index.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: 'indexPage',
        component: IndexPage
      },
      {
        path: "milestone1",
        name: "milestone1",
        component: Milestone1BasePage,
        children:[
          {
            path: "interpolation",
            name: 'Interpolation',
            component: () => import('../pages/milestone1/Practice/Interpolation.vue')
          },
          {
            path: 'data-binding',
            name: 'Data Binding',
            component: () => import('../pages/milestone1/Practice/DataBinding.vue')
          },
          {
            path: 'reactivity',
            name: 'Reactivity',
            component: () => import('../pages/milestone1/Practice/Reactivity.vue')
          },
          {
            path: 'state',
            name: 'State',
            component: () => import('../pages/milestone1/Practice/State.vue')
          },
          {
            path: 'lifecycles',
            name: 'Lifecycles',
            component: () => import('../pages/milestone1/Practice/Lifecycles.vue')
          }
        ]
      },
      {
        path: "milestone2",
        name: "milestone2",
        component: Milestone2BasePage,
      },
      {
        path: "exercise",
        name: "exercise",
        component: ExerciseBasePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
