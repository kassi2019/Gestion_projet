
export const getterExerciceBudgetaire = state => state.stateExercice.sort((a, b) => (a.annee > b.annee) ? -1 : 1);
export const getterSection = state => state.stateSection.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureDepense = state => state.stateNatureDepense.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterTypeFinancement = state => state.stateTypeFinancement.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterBailleur = state => state.stateBailleur.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterActivite = state => state.stateActivite.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureEconomique = state => state.stateNatureEconomique.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterProjet = state => state.stateProjet.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterSousBudget = state => state.stateSousBudget;

export const getterDotationNotifie= state => state.stateDotationNotifie;

export const getterDotationReport = state => state.stateDotationReport;

export const getterDotationRessourcePropre = state => state.stateDotationRessourcePropre;

export const getterDotationAutreRessource = state => state.stateDotationAutreRessource;
export const getterGrpeActivite = state => state.stateGrpeActivite;
export const getterGrpeActiviteBudgetNotifie = state => state.stateGrpeActiviteBudgetNotifie;
export const getterGrpeActiviteBudgetReport= state => state.stateGrpeActiviteBudgetReport;
export const getterGrpeActiviteBudgetRessourcePropre = state => state.stateGrpeActiviteBudgetRessourcePropre;
export const getterGrpeActiviteBudgetAutreRessource = state => state.stateGrpeActiviteBudgetAutreRessource;
export const getterInformationBudget = state => state.stateInformationBudget;


