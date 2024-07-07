
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import UtilisateursModule from '../store/modules/auth/index'
import ParametreModule from '../store/modules/gestionParametre/index'
// import BudgetaireModule from '../store/modules/Budgetaire/index'
// import ModuleParametrageMenu from '../store/parametrage_menu/index'
// import ModuleApplication from "../store/modules/application/index"



export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        Utilisateurs: UtilisateursModule,
        parametrage: ParametreModule,
        //  budgetaire: BudgetaireModule,
        // Application: ModuleApplication
        //  GestionUser:Utilisateur
    }
})

