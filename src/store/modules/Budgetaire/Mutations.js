
// sous budget
export const GET_SOUS_BUDGET = (state, value) => {
    state.stateSousBudget=value
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