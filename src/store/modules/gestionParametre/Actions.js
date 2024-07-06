import apiGuest from '../../../request/AppRequest';
import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
import router from '../../../routes/index';
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"


// exercice budgetaire
export function getExerciceBudgetaire({ commit }) {
  apiGuest.get("/listeExerciceBudgetaire", { headers: authHeader() })
    .then(response => {
      commit("GET_EXERCICE_BUDGETAIRE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterExerciceBudgetaire({ commit }, nouveau) {
 
    apiGuest.post("/AjouterExerciceBudgetaire", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EXERCICE_BUDGETAIRE", response.data);
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

export function encoursExerciceBudgetaire({ commit}, objetAjout) {
       
    // this.$app.$dialog
        // .confirm("Voulez vous mettre cette année "+objetAjout.annee+" en cours ?")
        // .then(dialog => {
             apiGuest.post('/encoursExerciceBudgetaire', {

                id: objetAjout.id,

            }, { headers: authHeader() }).then(varExerciceBudgetaire => {
                // if (varExerciceBudgetaire.status == 201) {
                commit('ENCOURS_EXERCICE_BUDGETAIRE', varExerciceBudgetaire.data)
                //dispatch('getExercicesBudgetaires')
                // this.$app.$notify({
                //     title: 'success ',
                //     text: 'Option Effectué avec success !',
                //     type: "success"
                // })
                // }
            })
        // });


}
// export function encoursExerciceBudgetaire({ commit }, nouveau) {
//   apiGuest.
//     put("/encoursExerciceBudgetaire/" + nouveau.id, nouveau, { headers: authHeader() })
//     .then(response => {
//       commit("ENCOURS_EXERCICE_BUDGETAIRE", response.data);
//       toast("Modification effectué avec succès!", {
//         "theme": "auto",
//         "type": "success",
//         "dangerouslyHTMLString": true
// })
//     });
// }
export function modifierExerciceBudgetaire({ commit }, nouveau) {
  apiGuest.
    put("/ModifierExerciceBudgetaire/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_EXERCICE_BUDGETAIRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerExerciceBudgetaire({ commit,dispatch}, id) {

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
   
    apiGuest.delete('/supprimerExerciceBudgetaire/' + id, { headers: authHeader() })
     commit('SUPPRIMER_EXERCICE_BUDGETAIRE', id)
     dispatch('getExerciceBudgetaire');
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




// section


export function getSection({ commit }) {
  apiGuest.get("/listeSection", { headers: authHeader() })
    .then(response => {
      commit("GET_SECTION", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteSection({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSection", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SECTION", response.data);
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

export function modifierSection({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSection/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SECTION", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSection({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_SECTION', id)
      apiGuest.delete('/supprimerSection/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}




//nature de depense

export function getNatureDepense({ commit }) {
  apiGuest.get("/listeNatureDepense", { headers: authHeader() })
    .then(response => {
      commit("GET_NATURE_DEPENSE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteNatureDepense({ commit }, nouveau) {
 
    apiGuest.post("/AjouterNatureDepense", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_DEPENSE", response.data);
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

export function modifierNatureDepense({ commit }, nouveau) {
  apiGuest.
    put("/ModifierNatureDepense/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_NATURE_DEPENSE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerNatureDepense({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_NATURE_DEPENSE', id)
      apiGuest.delete('/supprimerNatureDepense/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}


// TYPE FINANCEMENT



export function getTypeFinancement({ commit }) {
  apiGuest.get("/listetypeFinancement", { headers: authHeader() })
    .then(response => {
      commit("GET_TYPE_FINANCEMENT", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteTypeFinancement({ commit }, nouveau) {
 
    apiGuest.post("/AjoutertypeFinancement", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_FINANCEMENT", response.data);
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

export function modifierTypeFinancement({ commit }, nouveau) {
  apiGuest.
    put("/ModifiertypeFinancement/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_TYPE_FINANCEMENT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerTypeFinancement({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_TYPE_FINANCEMENT', id)
      apiGuest.delete('/supprimertypeFinancement/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}


// bailleur


export function getBailleur({ commit }) {
  apiGuest.get("/listeBailleur", { headers: authHeader() })
    .then(response => {
      commit("GET_BAILLEUR", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteBailleur({ commit }, nouveau) {
 
    apiGuest.post("/AjouterBailleur", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BAILLEUR", response.data);
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

export function modifierBailleur({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBailleur/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_BAILLEUR", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerBailleur({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_BAILLEUR', id)
      apiGuest.delete('/supprimerBailleur/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}


//Activite


export function getActivite({ commit }) {
  apiGuest.get("/listeActivite", { headers: authHeader() })
    .then(response => {
      commit("GET_ACTIVITE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteActivite({ commit }, nouveau) {
 
    apiGuest.post("/AjouterActivite", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ACTIVITE", response.data);
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

export function modifierActivite({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBailleur/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ACTIVITE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerActivite({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_ACTIVITE', id)
      apiGuest.delete('/supprimerActivite/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}



//NATURE ECONOMIQUE



export function getNatureEconomique({ commit }) {
  apiGuest.get("/listeNatureEconomique", { headers: authHeader() })
    .then(response => {
      commit("GET_NATURE_ECONOMIQUE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteNatureEconomique({ commit }, nouveau) {
 
    apiGuest.post("/AjouterNatureEconomique", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_ECONOMIQUE", response.data);
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

export function modifierNatureEconomique({ commit }, nouveau) {
  apiGuest.
    put("/ModifierNatureEconomique/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_NATURE_ECONOMIQUE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerNatureEconomique({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_NATURE_ECONOMIQUE', id)
      apiGuest.delete('/supprimerNatureEconomique/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}


// PROJET

export function getProjet({ commit }) {
  apiGuest.get("/listeProjet", { headers: authHeader() })
    .then(response => {
      commit("GET_PROJET", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteProjet({ commit , dispatch}, nouveau) {
 
    apiGuest.post("/AjouterProjet", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_PROJET", response.data);
        dispatch('getSection')
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

export function modifierProjet({ commit }, nouveau) {
  apiGuest.
    put("/ModifierProjet/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_PROJET", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerProjet({ commit }, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
      commit('SUPPRIMER_PROJET', id)
      apiGuest.delete('/supprimerProjet/' + id, { headers: authHeader() })
        //.then(() => dialog.close())
   // });
}