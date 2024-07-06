<template>
    <div  >
       
 <TheHeader />
  <MenuParametre v-if="identifiant==1"/>
  <MenuGestionBudgetaire v-if="identifiant==2"/>
  <MenuGestionMarche v-if="identifiant==3"/>
  <MenuGestionPersonnel v-if="identifiant==4"/>
  <MenuGestionRapport v-if="identifiant==5"/>
  <MenuUtilisateur v-if="identifiant==6"/>
  
 <slot />
<TheFooTer />

</div>
</template>

<script>


    import TheHeader from "./TheHeader.vue";
import MenuParametre from "./dossierMenu/MenuParametre.vue";
import MenuGestionBudgetaire from "./dossierMenu/MenuGestionBudgetaire.vue";
import MenuGestionMarche from "./dossierMenu/MenuGestionMarche.vue";
import MenuGestionPersonnel from "./dossierMenu/MenuGestionPersonnel.vue";
import MenuGestionRapport from "./dossierMenu/MenuGestionRapport.vue";
import MenuUtilisateur from "./dossierMenu/MenuUtilisateur.vue";
   import TheFooTer from "./TheFooTer.vue";
    // import TheFooTer from "./TheFooter.vue";
 /* import TheMenu from './TheMenu.vue'*/

    export default{
        name: "TheDefault",
  components: {
    TheHeader,
      MenuParametre,
      MenuGestionBudgetaire,
      MenuGestionMarche,
      MenuGestionPersonnel,
      MenuGestionRapport,
    MenuUtilisateur,
     TheFooTer

    },
   created() {
   this.identifiant = this.$route.params.id;
    },
    }
</script>

<style scoped>

</style>
