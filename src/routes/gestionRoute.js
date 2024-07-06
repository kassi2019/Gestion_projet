
import ExerciceBudgetaire from "../page/ParametreGeneraux/ExerciceBudgetaire.vue"
import NatureDepense from "../page/ParametreGeneraux/NatureDepense.vue"
import section from "../page/ParametreGeneraux/section.vue"
import typeFinancement from "../page/ParametreGeneraux/typeFinancement.vue"

import bailleur from "../page/ParametreGeneraux/bailleur.vue"
import Activite from "../page/ParametreGeneraux/Activite.vue"
import NatureEconomique from "../page/ParametreGeneraux/NatureEconomique.vue"
import projet from "../page/ParametreGeneraux/projet.vue"
import sousBudget from "../page/GestionBudgetaire/sousBudget.vue"
import BudgetNotifie from "../page/GestionBudgetaire/BudgetNotifie.vue"
// import BudgetReport from "../page/GestionBudgetaire/BudgetReport.vue"
// import BudgetAutreRessource from "../page/GestionBudgetaire/BudgetAutreRessource.vue"
// import BudgetRessourcePropre from "../page/GestionBudgetaire/BudgetRessourcePropre.vue"
const gestionutilisateur = [
      {
        path: '/BudgetNotifie',
        name:"BudgetNotifie",
       component: BudgetNotifie
     },
//   {
//         path: '/BudgetReport',
//         name:"BudgetReport",
//        component: BudgetReport
//      },
//   {
//         path: '/BudgetAutreRessource',
//         name:"BudgetAutreRessource",
//        component: BudgetAutreRessource
//      },
//   {
//         path: '/BudgetRessourcePropre',
//         name:"BudgetRessourcePropre",
//        component: BudgetRessourcePropre
//   },
      {
        path: '/sousBudget',
        name:"sousBudget",
       component: sousBudget
  },
     {
        path: '/projet',
        name:"projet",
       component: projet
  },
      {
        path: '/NatureEconomique',
        name:"NatureEconomique",
       component: NatureEconomique
  },
     {
        path: '/Activite',
        name:"Activite",
       component: Activite
  },
   {
        path: '/bailleur',
        name:"bailleur",
       component: bailleur
  },
   {
        path: '/typeFinancement',
        name:"typeFinancement",
       component: typeFinancement
  },
   {
        path: '/NatureDepense',
        name:"NatureDepense",
       component: NatureDepense
  },
    {
        path: '/ExerciceBudgetaire',
        name:"ExerciceBudgetaire",
       component: ExerciceBudgetaire
  },
 {
        path: '/section',
        name:"section",
       component: section
  },
  
]

export default gestionutilisateur;