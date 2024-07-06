
export const getterExerciceBudgetaire = state => state.stateExercice.sort((a, b) => (a.annee > b.annee) ? -1 : 1);
export const getterSection = state => state.stateSection.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureDepense = state => state.stateNatureDepense.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterTypeFinancement = state => state.stateTypeFinancement.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterBailleur = state => state.stateBailleur.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterActivite = state => state.stateActivite.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureEconomique = state => state.stateNatureEconomique.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterProjet = state => state.stateProjet.sort((a, b) => (a.code < b.code) ? -1 : 1);