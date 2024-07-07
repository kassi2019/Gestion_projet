
export const formatageSomme = montant => {
  return (
     montant.toString()
      .split("")
      .reverse()
      .reduce((acc, montant, i) => {
        return montant + (i && !(i % 3) ? "." : "") + acc;
      }, "") + " F CFA"
  );
};







export const formatageSommeSansFCFA = montant => {
  return (
     montant.toString()
      .split("")
      .reverse()
      .reduce((acc, montant, i) => {
        return montant + (i && !(i % 3) ? "." : "") + acc;
      }, "") 
  );
};
