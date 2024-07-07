
// exercice budgetaire
export const GET_EXERCICE_BUDGETAIRE = (state, value) => {
    state.stateExercice=value
}

export const AJOUTER_EXERCICE_BUDGETAIRE = (state, elementAjouter) => {
    state.stateExercice.unshift(elementAjouter)
}

export const MODIFIER_EXERCICE_BUDGETAIRE = (state, elementModif) => {
    state.stateExercice = state.stateExercice.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
export const ENCOURS_EXERCICE_BUDGETAIRE = (state, elementModif) => {
    state.stateExercice = state.stateExercice.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
export const SUPPRIMER_EXERCICE_BUDGETAIRE = (state, id) => {
    state.stateExercice = state.stateExercice.filter(titre => titre.id != id)
};

// section

export const GET_SECTION = (state,value)=>{
    state.stateSection=value
}

export const AJOUTER_SECTION = (state, elementAjouter) => {
    state.stateSection.unshift(elementAjouter)
}

export const MODIFIER_SECTION = (state, elementModif) => {
    state.stateSection = state.stateSection.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SECTION = (state, id) => {
    state.stateSection = state.stateSection.filter(titre => titre.id != id)
};


//nature depense



export const GET_NATURE_DEPENSE = (state,value)=>{
    state.stateNatureDepense=value
}

export const AJOUTER_NATURE_DEPENSE = (state, elementAjouter) => {
    state.stateNatureDepense.unshift(elementAjouter)
}

export const MODIFIER_NATURE_DEPENSE = (state, elementModif) => {
    state.stateNatureDepense = state.stateNatureDepense.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_NATURE_DEPENSE = (state, id) => {
    state.stateNatureDepense = state.stateSection.filter(titre => titre.id != id)
};

// type financement



export const GET_TYPE_FINANCEMENT = (state,value)=>{
    state.stateTypeFinancement=value
}

export const AJOUTER_TYPE_FINANCEMENT = (state, elementAjouter) => {
    state.stateTypeFinancement.unshift(elementAjouter)
}

export const MODIFIER_TYPE_FINANCEMENT = (state, elementModif) => {
    state.stateTypeFinancement = state.stateTypeFinancement.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TYPE_FINANCEMENT = (state, id) => {
    state.stateTypeFinancement = state.stateSection.filter(titre => titre.id != id)
};


// Bailleur

export const GET_BAILLEUR = (state,value)=>{
    state.stateBailleur=value
}

export const AJOUTER_BAILLEUR = (state, elementAjouter) => {
    state.stateBailleur.unshift(elementAjouter)
}

export const MODIFIER_BAILLEUR = (state, elementModif) => {
    state.stateBailleur = state.stateBailleur.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_BAILLEUR = (state, id) => {
    state.stateBailleur = state.stateSection.filter(titre => titre.id != id)
};

// activite

export const GET_ACTIVITE = (state,value)=>{
    state.stateActivite=value
}

export const AJOUTER_ACTIVITE = (state, elementAjouter) => {
    state.stateActivite.unshift(elementAjouter)
}

export const MODIFIER_ACTIVITE = (state, elementModif) => {
    state.stateActivite = state.stateActivite.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ACTIVITE = (state, id) => {
    state.stateActivite = state.stateSection.filter(titre => titre.id != id)
};


// nature economique


export const GET_NATURE_ECONOMIQUE = (state,value)=>{
    state.stateNatureEconomique=value
}

export const AJOUTER_NATURE_ECONOMIQUE = (state, elementAjouter) => {
    state.stateNatureEconomique.unshift(elementAjouter)
}

export const MODIFIER_NATURE_ECONOMIQUE = (state, elementModif) => {
    state.stateNatureEconomique = state.stateNatureEconomique.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_NATURE_ECONOMIQUE = (state, id) => {
    state.stateNatureEconomique = state.stateSection.filter(titre => titre.id != id)
};

//projet



export const GET_PROJET = (state,value)=>{
    state.stateProjet=value
}

export const AJOUTER_PROJET = (state, elementAjouter) => {
    state.stateProjet.unshift(elementAjouter)
}

export const MODIFIER_PROJET = (state, elementModif) => {
    state.stateProjet = state.stateProjet.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_PROJET = (state, id) => {
    state.stateProjet = state.stateSection.filter(titre => titre.id != id)
};


// sous budget
export const GET_SOUS_BUDGET = (state, value) => {
    state.stateSousBudget=value
}
export const GET_GROUPE_ACTIVITE = (state, value) => {
    state.stateGrpeActivite=value
}
export const AJOUTER_SOUS_BUDGET = (state, elementAjouter) => {
    state.stateSousBudget.unshift(elementAjouter)
}

export const MODIFIER_SOUS_BUDGET = (state, elementModif) => {
    state.stateSousBudget = state.stateSousBudget.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SOUS_BUDGET = (state, id) => {
    state.stateSousBudget = state.stateSousBudget.filter(titre => titre.id != id)
};


// dotation notifier

export const GET_DOTATION_NOTIFIE = (state, value) => {
    state.stateDotationNotifie=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_NOTIFIE = (state, value) => {
    state.stateGrpeActiviteBudgetNotifie=value
}
export const AJOUTER_DOTATION_NOTIFIE = (state, elementAjouter) => {
    state.stateDotationNotifie.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_NOTIFIE = (state, elementModif) => {
    state.stateDotationNotifie = state.stateDotationNotifie.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_NOTIFIE = (state, id) => {
    state.stateDotationNotifie = state.stateDotationNotifie.filter(titre => titre.id != id)
};


// DOTATION REPORT

export const GET_DOTATION_REPORT = (state, value) => {
    state.stateDotationReport=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_REPORT = (state, value) => {
    state.stateGrpeActiviteBudgetReport=value
}
export const AJOUTER_DOTATION_REPORT = (state, elementAjouter) => {
    state.stateDotationReport.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_REPORT = (state, elementModif) => {
    state.stateDotationReport = state.stateDotationReport.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_REPORT = (state, id) => {
    state.stateDotationReport = state.stateDotationReport.filter(titre => titre.id != id)
};


// DOTATION RESSOURCE PROPRE

export const GET_DOTATION_RESSOURCE_PROPRE = (state, value) => {
    state.stateDotationRessourcePropre=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_RESSOURCE_PROPRE = (state, value) => {
    state.stateGrpeActiviteBudgetRessourcePropre=value
}
export const AJOUTER_DOTATION_RESSOURCE_PROPRE = (state, elementAjouter) => {
    state.stateDotationRessourcePropre.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_RESSOURCE_PROPRE = (state, elementModif) => {
    state.stateDotationRessourcePropre = state.stateDotationRessourcePropre.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_RESSOURCE_PROPRE = (state, id) => {
    state.stateDotationRessourcePropre = state.stateDotationRessourcePropre.filter(titre => titre.id != id)
};


// DOTATION AUTRE RESSOURCE

export const GET_DOTATION_AUTRE_RESSOURCE = (state, value) => {
    state.stateDotationAutreRessource=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_AUTRE_RESSOURCE = (state, value) => {
    state.stateGrpeActiviteBudgetAutreRessource=value
}
export const AJOUTER_DOTATION_AUTRE_RESSOURCE = (state, elementAjouter) => {
    state.stateDotationAutreRessource.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_AUTRE_RESSOURCE = (state, elementModif) => {
    state.stateDotationAutreRessource = state.stateDotationAutreRessource.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_AUTRE_RESSOURCE = (state, id) => {
    state.stateDotationAutreRessource = state.stateDotationAutreRessource.filter(titre => titre.id != id)
};


// INFORMATION SUR LE BUDGET


export const GET_INFORMATION_BUDGET = (state, value) => {
    state.stateInformationBudget=value
}

export const AJOUTER_INFORMATION_BUDGET = (state, elementAjouter) => {
    state.stateInformationBudget.unshift(elementAjouter)
}

export const MODIFIER_INFORMATION_BUDGET = (state, elementModif) => {
    state.stateInformationBudget = state.stateInformationBudget.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_INFORMATION_BUDGET = (state, id) => {
    state.stateInformationBudget = state.stateInformationBudget.filter(titre => titre.id != id)
};