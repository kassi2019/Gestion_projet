//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import TheNoSidebar from "./layouts/TheNoSidebar.vue"
import TheDefault from "./layouts/TheDefault.vue"
import router from './routes/index'
import store from './store/index'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import money from 'v-money3'



const app = createApp(App)

app.use(VueSweetalert2);
app.use(money);
app.component('default-layout', TheDefault)
app.component('no-sidebar-layout', TheNoSidebar)



app.use(store)
app.use(router)
app.mount('#app')
