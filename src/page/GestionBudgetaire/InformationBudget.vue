<template>
  <main id="main" class="main">
   
    <div class="pagetitle">
      <h3 style="font-size: 16px">Information du budget global</h3>
      <!-- <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav> -->
    </div>

    <table>
      <tr>
        <td colspan="4"></td>

        <td style="width: 5%">
          <!-- <button
            type="button"
            class="btn btn-primary rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#largeModal"
          >
            Ajouter
          </button> -->
          <span
            class="badge rounded-pill bg-primary"
            data-bs-toggle="modal"
            data-bs-target="#largeModal"
            style="cursor: pointer"
            >Ajouter</span
          >
        </td>
      </tr>
    </table>
    <br />
    <section class="section dashboard">
      <div class="row">
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th scope="col">Exercice</th>

              <th scope="col" style="width: 40%">Libelle du budget</th>
              <th scope="col" style="width: ">Dotation global budget</th>
              <th scope="col" style="width: ">Décision</th>
              <th scope="col" style="width: ">Date de visa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item1 in getterInformationBudget" :key="item1.id">
              <td style="width: ">{{ item1.exercice }}</td>
              <td style="width: ">{{ item1.libelle }}</td>
              <td style=" text-align: right">
                {{ formatageSommeSansFCFA(parseFloat(item1.dotation)) }}
              </td>
              <td style="width: ">{{ afficheDecision(item1.decision) }}</td>
              <td style="width: ">{{ formaterDate(item1.date_decision) }}</td>
              <td>
                <span
                  class="badge rounded-pill bg-dark"
                 
                  style="cursor: pointer"
                  @click.prevent="AfficheVentilationBudget(item1.id)"
                  >Saisi budget</span
                >
                <span
                  class="badge rounded-pill bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  style="cursor: pointer"
                  @click.prevent="AfficheModalModification(item1.id)"
                  >Modifier</span
                >
                <span
                  class="badge bg-danger"
                  style="cursor: pointer"
                  @click.prevent="supprimerInformationBudget(item1.id)"
                  >Supprimer</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter budget global</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Exercice</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle du budget</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.libelle"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation global budget</label>
                <money3
                  v-model="ajouterNatureDepense.dotation"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                ></money3>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="EnregistrerSection()"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier budget global</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Exercice</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle du budget</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.libelle"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation global budget</label>
                <money3
                  v-model="modNatureDepense.dotation"
                  class="form-control"
                  id="inputNanme4"
                  style=""
                ></money3>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Décision</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.decision"
                >
                  <option selected></option>
                  <option :value="1">Visé</option>
                  <option :value="2">Visé avec observation</option>
                  <option :value="3">Différé</option>
                  <option :value="4">Réjetté</option>
                  <option :value="0">En attente</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Date décision</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_decision"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getActivite()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationSection()"
              data-bs-dismiss="modal"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- End #main -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        dotation: "",
        libelle: "",
      },
      modNatureDepense: {
        dotation: "",
          libelle: "",
          decision: "",
          date_decision:""
      },
    };
  },
  created() {
    this.getExerciceBudgetaire();
    this.getInformationBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterInformationBudget",
    ]),
    exerciceBudgetaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterExerciceBudgetaire.find(
        (qtreel) => qtreel.encours == 1
      );

      if (qtereel) {
        return qtereel.annee;
      }
      return 0;
      //     }
      //   };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudget",
    ]),
     AfficheVentilationBudget(id) {
      this.$router.push({
        name: "VentilationBudget",
        params: { id: id },
      });
    },
      afficheDecision($id) {
          if ($id == 1) {
            return 'Visé'
          } else if ($id == 2) {
            return 'Visé avec observation'
          } else if ($id == 3) {
            return 'Différé'
          } else if ($id == 4) {
            return 'Réjetté'
          } else {
            return 'En attente'
        }
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterInformationBudget.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        exercice: this.exerciceBudgetaire,
        dotation: this.ajouterNatureDepense.dotation,
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.ajouterInformationBudget(objetDirect1);
      this.ajouterNatureDepense = {};
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        exercice: this.exerciceBudgetaire,
        dotation: this.modNatureDepense.dotation,
          libelle: this.modNatureDepense.libelle,
          date_decision: this.modNatureDepense.date_decision,
        decision: this.modNatureDepense.decision,
      };

      this.modifierInformationBudget(objetDirect1);
      this.modNatureDepense = {};
    },
formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
