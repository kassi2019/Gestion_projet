import apiGuest from '../../../request/AppRequest';
import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
import router from '../../../routes/index';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export function logoutUser({ commit }) {

  localStorage.removeItem('user-token')


  commit('LOGOUT_USER')

  router.push({ name: 'login' })
  window.location.reload()

}
export function getModule({ commit }) {
  apiGuest.get("/liste_module", { headers: authHeader() })
    .then(response => {
      commit("GET_MODULE", response.data);
    })
    .catch(error => console.log(error));
}

export function getUtilisateur({ commit }) {
  apiImage
    .get("/listeUtilisateurOpt", { headers: authHeader() })
    .then(response => {
      commit("GET_UTILISATEUR", response.data);
    })
    .catch(error => console.log(error));
}
export function login({ commit }, user) {

  if (user.email && user.password) {

    commit('SET_LOADER', true)
    commit('SET_ERROR_FALSE')
    //console.log(apiGuest)
    return apiGuest.post('/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      
      commit('LOGIN_USER', response.data.user)
      commit("setRefreshToken", response.data.access_token);
      commit("setAccessToken", response.data.access_token);
      localStorage.setItem('user-token', JSON.stringify(response.data.access_token))
      
      localStorage.setItem('User', JSON.stringify(response.data.user))
     // console.log(localStorage.setItem('user-token', JSON.stringify(response.data.access_token)));
      commit('SET_LOADER', false)
      router.push({ name: 'Accueil' })
      // window.location.reload()
    }).catch((error) =>  {
      console.error("Login failed:", error);
      this.error_message = "email ou password Incorrect !";
      toast.error("Mot de passe est Incorrect !", {
        position: "top-right",
        //icon: "times",
        autoClose: 5000,
      });
      // return false;
    });
  } else if (!user.email) {
    commit('SET_CHAMP_VIDE_TRUE')
  } else if (!user.password) {
    commit('SET_CHAMP_VIDE_TRUE')
    }
}

export function ajouterServiceGroupement({ commit }, nouveau) {
 
    apiGuest.post("/AjouterServiceGroupement", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
       toast("Enregistrement effectué avec succès!", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})
      }
    }).catch((error) =>  {
      console.error("Login failed:", error);
      // this.error_message = "email ou password Incorrect !";
      toast.error("Un probleme survenu lors de l'enregistrement", {
        position: "top-right",
        //icon: "times",
        autoClose: 5000,
      });
      // return false;
    });
}

export function getListeService({ commit }) {
  apiGuest.get("/liste_Services", { headers: authHeader() })
    .then(response => {
      commit("GET_LISTE_SERVICE", response.data);
    })
    .catch(error => console.log(error));
}

// ACTION ROLE UTILISATEUR

export function getRoleUtilisateur({ commit }) {
  apiGuest.get("/listeDesRoles", { headers: authHeader() })
    .then(response => {
      commit("GET_ROLE_UTILISATEUR", response.data);
    })
    .catch(error => console.log(error));
}


export function ajouterRoleUtilisateur({ commit }, nouveau) {
 
    apiGuest.post("/AjouterRole", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ROLE_UTILISATEUR", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch((error) =>  {
    //  console.error("Login failed:", error);
      // this.error_message = "email ou password Incorrect !";
      toast.error("Un probleme survenu lors de l'enregistrement", {
        position: "top-right",
        //icon: "times",
        autoClose: 5000,
      });
      // return false;
    });
}

export function modifierRoleUtilisateur({ commit }, nouveau) {
  apiGuest.
    put("/ModifierRole/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ROLE_UTILISATEUR", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerRoleUtilisateur({ commit }, id) {

  this.$app.$dialog
    .confirm("Voulez vous vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_ROLE_UTILISATEUR', id)
      axios.delete('/supprimerRoles/' + id, { headers: authHeader() }).then(() => dialog.close())
    });
}


export function EnregistreUtilisateur({ commit }, nouveau) {
 
    apiGuest.post("/register", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_UTILISATEUR", response.data);
       toast("Enregistrement effectué avec succès!", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})
      }
    }).catch((error) =>  {
      console.error("Login failed:", error);
      // this.error_message = "email ou password Incorrect !";
      toast.error("Un probleme survenu lors de l'enregistrement", {
        position: "top-right",
        //icon: "times",
        autoClose: 5000,
      });
      // return false;
    });
}