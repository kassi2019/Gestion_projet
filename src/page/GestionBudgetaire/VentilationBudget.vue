<template>
  <main id="main" class="main">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Eclatement du budget</h5>

        <!-- Pills Tabs -->
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              SAISIR BUDGET
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              VERIFICATION DU BUDGET
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              IMPRIMER LE BUDGET
            </button>
          </li>
        </ul>
        <div class="tab-content pt-2" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <section class="section">
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Exercice</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputNanme4"
                        style="border: 1px solid #000"
                      />
                    </div>
                    <div class="col-9">
                      <label for="inputNanme4" class="form-label"
                        >Unité Opérationnelle{{ uniteOperationnelle_id }}</label
                      >
                      <model-list-select
                        :list="getterProjet"
                        v-model="uniteOperationnelle_id"
                        option-value="id"
                        option-text="nom_projet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                     <div class="col-6">
                      <label for="inputNanme4" class="form-label"
                        >Activité</label
                      >
                      <model-list-select
                        :list="libelleActivite"
                        v-model="activite_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
                      <label for="inputNanme4" class="form-label"
                        >Sous budget{{ sous_budget_id }}</label
                      >
                      <model-list-select
                        :list="libelleSousBudget"
                        v-model="sous_budget_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                     <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Budget Notifié ( A )</label
                      >
                        <money3 readonly   class="form-control" id="inputNanme4"    style="border: 1px solid #000;background-color: #dcdcdc;"></money3> 
             
                    </div>
                     <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Budget Réport ( B )</label
                      >
                        <money3 readonly   class="form-control" id="inputNanme4"    style="border: 1px solid #000;background-color: #dcdcdc;"></money3> 
             
                    </div>
                    
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Budget Ressource propre ( C )</label
                      >
                       <money3 readonly   class="form-control" id="inputNanme4"    style="border: 1px solid #000;background-color: #dcdcdc;"></money3> 
             
                    </div>
                     <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Budget autre ressource ( D )</label
                      >
                       <money3 readonly   class="form-control" id="inputNanme4"    style="border: 1px solid #000;background-color: #dcdcdc;"></money3> 
             
                    </div>
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Budget global ( E = A + B + C + D )</label
                      >
                      
                        <money3 readonly   class="form-control" id="inputNanme4"    style="border: 1px solid #000;background-color: #dcdcdc;"></money3> 
             
                    </div>
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Nature dépense{{ nature_depense_id }}</label
                      >
                      <model-list-select
                        :list="getterNatureDepense"
                        v-model="nature_depense_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                     <div class="col-6">
                      <label for="inputNanme4" class="form-label"
                        >Nature économique</label
                      >
                      <model-list-select
                        :list="libelleNatureEconomique"
                        v-model="economique_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Type financement</label
                      >
                      <model-list-select
                        :list="getterTypeFinancement"
                        v-model="FormDataDossier.type_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-9">
                      <label for="inputNanme4" class="form-label"
                        >Source de financement</label
                      >
                      <model-list-select
                        :list="getterBailleur"
                        v-model="FormDataDossier.source_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
                      <label for="inputNanme4" class="form-label"
                        >Dotation Actuelle{{ FormDataDossier.dotation_actuelle }}</label
                      >
                     
                      <money3  v-model="FormDataDossier.dotation_actuelle"  class="form-control" id="inputNanme4"    style="border: 1px solid #000"></money3> 
             
                    </div>
                    <div class="col-3">
                      <label for="inputNanme4" class="form-label"
                        >Autre Dotation</label
                      >
                     
                      <money3  v-model="FormDataDossier.doatation_report"  class="form-control" id="inputNanme4"    style="border: 1px solid #000"></money3> 
             
                    </div>
                    <div class="col-3">
                     
                     <br/>
                      <button type="button" class="btn btn-primary"  @click.prevent="ajouterPartieRequerante()">Ajouter</button>
                    </div>
                  </form>
                  
                </div>
               
              </div>
                <br/>
                <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <!-- <th scope="col">N</th> -->
            <th scope="col" style="text-align: center">Type financement</th>
            <th scope="col" style="text-align: center">Source financement</th>
            <th scope="col" style="text-align: center">Dotation actuelle (FCFA)</th>
            <th scope="col" style="text-align: center">Autre dotation (FCFA)</th>
            <th scope="col" style="text-align: center">Total (FCFA)</th>
            <th scope="col" style="text-align: center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item1,index) in TableauDossier" :key="item1.id">
            <td style="width: 10%">{{ afficheTypeFinancement(item1.type_financement_id) }}</td>
            <td style="width: 45%">{{ afficheSourceFinancement(item1.source_financement_id) }}</td>
               <td style="width: 10%;text-align: right;">{{ item1.dotation_actuelle }}</td>
                  <td style="width: 10%;text-align: right;">{{ item1.doatation_report }}</td>
                  <td style="width: 10%;text-align: right;">{{ item1.doatation_report }}</td>
            <!-- <td style="width: 15%; text-align: right">
              {{ item1.dotation }}
            </td> -->
            <td>
             
              <span
                class="badge bg-danger"
                style="cursor: pointer"
                @click.prevent="deletePartieRequerante(index)"
                >Supprimer</span
              >
            </td>
          </tr>
          <tr>
            <td colspan="5">

            </td>
            <td colspan="">
<button type="button" class="btn btn-primary">Enregistrer</button>
            </td>
          </tr>
        </tbody>
      </table>
       
            </section>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure
            eos quia. Accusantium distinctio omnis et atque fugiat. Itaque
            doloremque aliquid sint quasi quia distinctio similique. Voluptate
            nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi
            debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis
            magnam. Officiis accusamus impedit molestias nostrum veniam. Qui
            amet ipsum iure. Dignissimos fuga tempore dolor.
          </div>
        </div>
        <!-- End Pills Tabs -->
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
export default {
  components: { ModelListSelect },
  data() {
    return {
      TableauDossier: [],
       FormDataDossier: {
        doatation_report: 0,
        dotation_actuelle: 0,
     
         type_financement_id: 0,
        source_financement_id:0
      },
      economique_id: 0,
      activite_id: 0,
      uniteOperationnelle_id: 0,
      nature_depense_id: 0,
      sous_budget_id: 0,
      type_financement_id: 0,
      source_financement_id:0,
      ajouterNatureDepense: {
        activite_id: "",
        dotation: "",
      },
      modNatureDepense: {
        activite_id: "",
        dotation: "",
      },

      config: {
        prefix: "",
        suffix: "",
        thousands: ",",
        decimal: ".",
        precision: 0,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  created() {
    this.getActivite();
    this.getExerciceBudgetaire();
    this.getNatureEconomique();
    this.getProjet();
    this.getNatureDepense();
    this.getTypeFinancement()
    this.getBailleur()
    this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite","getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",
      "getterProjet",
      "getterNatureDepense","getterSousBudget","getterBailleur"
    ]),
     afficheSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBailleur.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
     libelleSousBudget() {
      let collet = [];
       this.getterSousBudget.filter((item) => {
        if(item.activite_id==this.activite_id  ){
        let data = {
          id: item.id,
          libelle: item.libelle,
        };
        collet.push(data);
        }
      });
      return collet;
    },
    libelleActivite() {
      let collet = [];
      this.getterActivite.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
    libelleNatureEconomique() {
      let collet = [];
      this.getterNatureEconomique.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite","getTypeFinancement","getBailleur",
      "getProjet",
      "getNatureDepense",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getNatureEconomique","ajouterBudgetEclate"
    ]),
 deletePartieRequerante(item) {
      if (item > -1) {
        this.TableauDossier.splice(item, 1);
      }
    },
     ajouterPartieRequerante() {
      // this.$v.FormDataDossier.$touch();
      // if (this.$v.FormDataDossier.$error) {
      //   return;
      // }
      //  console.log(this.partie.motif_partie_id)
      var nouvelObjet12 = {
        ...this.FormDataDossier,
        type_financement_id: this.FormDataDossier.type_financement_id,
        source_financement_id: this.FormDataDossier.source_financement_id,
        ligneeconomique_id: this.economique_id,
        
      };
      this.TableauDossier.push(nouvelObjet12);
     
      this.FormDataDossier = {
        doatation_report: 0,
        dotation_actuelle: 0,
       
         type_financement_id: 0,
        source_financement_id:0
      };
    },
  },
};
</script>
