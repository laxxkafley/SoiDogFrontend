// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'


// new Vue({
//     router,
//     render: (h) => h(App),
//   })
//   createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importing router from router.js
import './assets/main.css';

createApp(App).use(router).mount('#app');

