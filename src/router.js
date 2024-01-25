// // In your router.js (or router/index.js) file
// import { createRouter, createWebHistory } from 'vue-router';

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import DogSearch from './views/DogSearch.vue'; // Adjust the path based on your project structure

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'DogSearch',
//     component: DogSearch,
//   },
//   // ... other routes
// ];


// const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });
  

// export default router;
// router.js (or router/index.js)
// import { createRouter, createWebHistory } from 'vue-router';
// import DogSearch from './views/DogSearch.vue';
// import api from './axios'; // Adjust the path based on your project structure

// // Now, you can use the 'api' instance


// const routes = [
//   {
//     path: '/',
//     name: 'DogSearch',
//     component: DogSearch,
//   },
//   // ... other routes
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import DogSearch from './views/DogSearch.vue';

const routes = [
  {
    path: '/',
    name: 'DogSearch',
    component: DogSearch,
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

