
export const isLoggedIn = state => state.isLoggedIn;

export const getterUtilisateur = state => state.listeutilisateur;

// export const getterExerciceBudgetaire = state => state.stateExercice.sort((a, b) => (a.annee > b.annee) ? -1 : 1);

export const getterModule = state => state.stateModule;
export const getterGroupement = state => state.stateService;

export const getterRoleUtilisateur = state => state.stateRoleUtilisateur;
export const users = state => state.users;
export const getterRoles = state => state.listeRole

export const getterLoader = state => state.loader

export const error = state => state.error

export const champVide = state => state.champVide

export const errorMessage = state => state.errorMessage

export const getterProjetByUser=state=>state.projetByUser

export const loggedInUser= state => state.loggedInUser
export const isAuthenticated= state => state.isAuthenticated
export const accessToken= state => state.access_token
export const refreshToken= state => state.refresh_token




export const getterUser= state => state.users;
export const getterLoadingUser= state => state.loadingUsers;
export const getterErrorUser = state => state.errorUser;



export const getterUserStore = state => state.userStore;
  






