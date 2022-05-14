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
        redirect: {name: 'Interpolation'},
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
          },
          {
            path: 'directives',
            name: 'Directives',
            component: () => import('../pages/milestone1/Practice/Directives.vue')
          },
          { 
            path: 'event-handling',
            name: 'Event Handling',
            component: () => import('../pages/milestone1/Practice/EventHandling.vue')
          },
          {
            path: 'computed-and-watchers',
            name: 'Computed and Watchers',
            component: () => import('../pages/milestone1/Practice/ComputedAndWatchers.vue')
          },
          {
            path: 'forms',
            name: 'Forms',
            component: () => import('../pages/milestone1/Practice/Forms.vue')
          }
        ]
      },
      {
        path: "milestone2",
        name: "milestone2",
        component: Milestone2BasePage,
        redirect: {name: 'Mixings'},
        children: [
          {
            path: 'mixings',
            name: 'Mixings',
            component: () => import('../pages/milestone2/Practice/Mixings.vue')
          },
          {
            path: 'class-and-style-binding',
            name: 'Class and Style Binding',
            component: () => import('../pages/milestone2/Practice/ClassAndStyleBinding.vue')
          },
          {
            path: 'reusable-component',
            name: 'Reusable Component',
            component: () => import('../pages/milestone2/Practice/Reusable.vue')
          },
          {
            path: 'materia-ui-and-tailwind-css',
            name: 'Tailwind CSS',
            component: () => import('../pages/milestone2/Practice/TailwindCSS.vue')
          },
          {
            path: 'axios',
            name: 'Axios',
            component: () => import('../pages/milestone2/Practice/Axios.vue')
          }
        ]
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
