const defaultstate = {
    isLoggedIn: !!localStorage.getItem('user-token'),
    user: localStorage.getItem('user'),
    // user: "",
   champVide: false,
   loader: false,
   error: false,
   errorMessage: undefined,
   projetByUser:[],
   refresh_token: "",
   access_token: "",
   loggedInUser: {},
   isAuthenticated: false,

   userStore:"",
   users:[],
   loadingUsers:false,
    errorUser: false,
    listeutilisateur: [],
  
    stateRoleUtilisateur: [],

    stateService:[],
    stateModule: []
   
};

export default defaultstate