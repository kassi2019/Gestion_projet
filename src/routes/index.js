
import { createRouter, createWebHistory } from "vue-router";

import AuthRoutes from './auth/AuthRoutes'
import gestionParametre from './gestionRoute'
// import AppRoutes from "./app/AppRoutes"

const regroupementDesRoutes = [

    AuthRoutes,
    gestionParametre

];

const routes = [].concat(...regroupementDesRoutes);

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {

    const publicPages = ['/connexion'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user-token');
 
   
    if (authRequired && !loggedIn) {
        
        next('/connexion');
        //next({ name: 'Login' })
    } else {
       

        if (to.path === '/connexion' && loggedIn) {
            
            next({ name: 'Accueil' })
            return
        }

        next()

    }

})

export default router;