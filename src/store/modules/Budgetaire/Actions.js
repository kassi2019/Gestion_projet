import apiGuest from '../../../request/AppRequest';
// import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
// import router from '../../../routes/index';
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"


// SOUS BUDGET
export function getSousBudget({ commit }) {
  apiGuest.get("/listeSousBudget", { headers: authHeader() })
    .then(response => {
      commit("GET_SOUS_BUDGET", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterSousBudget({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSousBudget", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SOUS_BUDGET", response.data);
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


export function modifierSousBudget({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSousBudget/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SOUS_BUDGET", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSousBudget({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerSousBudget/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SOUS_BUDGET', id)
     dispatch('getSousBudget');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    // toast("Suppression effectué avec succès!", {
    //     "theme": "auto",
    //     "type": "success",
    //     "dangerouslyHTMLString": true
    // })
    
  }
});
      
        //.then(() => dialog.close())
   // });
}

// DOTATION NOTIFIER

export function getDotationNotifie({ commit }) {
  apiGuest.get("/listeDotationNotifie", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_NOTIFIE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterDotationNotifie({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationNotifie", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_NOTIFIE", response.data);
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


export function modifierDotationNotifie({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationNotifie/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_NOTIFIE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationNotifie({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerDotationNotifie/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_NOTIFIE', id)
     dispatch('getSousBudget');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// DOTATION REPORT

export function getDotationReport({ commit }) {
  apiGuest.get("/listeDotationReport", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_REPORT", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterDotationReport({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationReport", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_REPORT", response.data);
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


export function modifierDotationReport({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationReport/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_REPORT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationReport({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerDotationReport/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_REPORT', id)
     dispatch('getSousBudget');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}

// DOTATION RESSOURCE PROPRE

export function getDotationRessourcePropre({ commit }) {
  apiGuest.get("/listeDotationRessourcePropre", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_RESSOURCE_PROPRE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterDotationRessourcePropre({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationRessourcePropre", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_RESSOURCE_PROPRE", response.data);
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


export function modifierDotationRessourcePropre({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationRessourcePropre/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_RESSOURCE_PROPRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationRessourcePropre({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerDotationRessourcePropre/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_RESSOURCE_PROPRE', id)
     
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}


// DOTATION AUTRE RESSOURCE

export function getDotationAutreRessource({ commit }) {
  apiGuest.get("/listeDotationAutreRessource", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_AUTRE_RESSOURCE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterDotationAutreRessource({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationAutreRessource", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_AUTRE_RESSOURCE", response.data);
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


export function modifierDotationAutreRessource({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationAutreRessource/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_AUTRE_RESSOURCE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationAutreRessource({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerDotationAutreRessource/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_AUTRE_RESSOURCE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
      
        //.then(() => dialog.close())
   // });
}

