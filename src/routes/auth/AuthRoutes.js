import login from '../../page/login/login.vue'
import Logout from '../../page/login/Logout.vue'
import PageAccueil from '../../page/login/Milieu.vue'
import Accueil from '../../page/login/Accueil.vue'

import serviceProjet from '../../page/gestionutilisateur/serviceProjet.vue'
import roleUtilisateur from '../../page/gestionutilisateur/roleUtilisateur.vue'
import Utilisateur from '../../page/gestionutilisateur/Utilisateur.vue'
const AuthRoutes = [
  {
        path: '/Utilisateur',
        name:"Utilisateur",
       component: Utilisateur
  },
 {
        path: '/roleUtilisateur',
        name:"roleUtilisateur",
       component: roleUtilisateur
  },
  {
        path: '/serviceProjet',
        name:"serviceProjet",
       component: serviceProjet
  },
    {
        path: '/connexion',
        name:"login",
        
        meta: { layout: "no-sidebar", requiresAuth: true },
       component: login
  },
  {
        path: '/Accueil',
        name:"Accueil",
        
        meta: { layout: "no-sidebar", requiresAuth: true },
       component: Accueil
  },
     
     {
      path: '/logout',
     name:"Logout",
     component: Logout,
     meta: {  layout: "no-sidebar",requiresAuth: true }  

   },
    {
      path: '/PageAccueil/:id',
     name:"PageAccueil",
     component: PageAccueil,
      

  }
    
]

export default AuthRoutes;