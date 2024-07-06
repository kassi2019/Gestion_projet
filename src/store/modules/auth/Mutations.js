export const clearUserData=(state) =>{
    state.refresh_token = "";
    state.access_token = "";
    state.loggedInUser = {};
    state.isAuthenticated = false;

}
export const GET_UTILISATEUR = (state,value)=>{
    state.listeutilisateur=value
}


export const GET_MODULE = (state,value)=>{
    state.stateModule=value
}

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};
export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER = (state, message) => {
    state.loader = message
}

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true



export const setRefreshToken=(state, refreshToken)=> {
    state.refresh_token = refreshToken;
}
export const setAccessToken=(state, accessToken)=> {
    state.access_token = accessToken;
}

export const AJOUTER_SERVICE = (state, elementAjouter) => {
    state.stateService.unshift(elementAjouter)
}
export const GET_LISTE_SERVICE = (state,value)=>{
    state.stateService=value
}

// MUTATION ROLE UTILISATEUR

export const GET_ROLE_UTILISATEUR = (state,value)=>{
    state.stateRoleUtilisateur=value
}

export const AJOUTER_ROLE_UTILISATEUR = (state, elementAjouter) => {
    state.stateRoleUtilisateur.unshift(elementAjouter)
}

export const MODIFIER_ROLE_UTILISATEUR = (state, elementModif) => {
    state.stateRoleUtilisateur = state.stateRoleUtilisateur.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ROLE_UTILISATEUR = (state, id) => {
    state.stateRoleUtilisateur = state.stateRoleUtilisateur.filter(titre => titre.id != id)
};


export const AJOUTER_UTILISATEUR = (state, elementAjouter) => {
    state.listeutilisateur.unshift(elementAjouter)
}


