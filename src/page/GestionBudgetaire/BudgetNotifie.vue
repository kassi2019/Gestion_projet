<template>
  <main id="main" class="main">
    {{ getterDotationNotifie }}
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste Budget notifié</h3>
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
              <th scope="col" style="width: 75%">Activité</th>
              <th scope="col" style="width: ">Dotation</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr
              v-for="item in getterActivite"
              :key="item.id"
              
            >
              <td>{{ item.code }}</td>
              <td>{{ item.libelle }}</td>

              <td>
                <span
                  class="badge rounded-pill bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  style="cursor: pointer"
                  @click.prevent="AfficheModalModification(item.id)"
                  >Modifier</span
                >
                <span
                  class="badge bg-danger"
                  style="cursor: pointer"
                  @click.prevent="supprimerActivite(item.id)"
                  >Supprimer</span
                >
              
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </section>
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter Budget notifié</h5>
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
                  style="border: 1px solid #000"
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Activité</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.activite_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterActivite"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation{{ ajouterNatureDepense.dotation }}</label>
                <money3  v-model="ajouterNatureDepense.dotation"  class="form-control" id="inputNanme4"    style="border: 1px solid #000"></money3> 
             
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
            <h5 class="modal-title">Modifier Buddget notifié</h5>
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
                  style="border: 1px solid #000"
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Activité</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.activite_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterActivite"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.dotation"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getDotationNotifie()"
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
export default {
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
       activite_id: "",
        dotation: "",
      },
      modNatureDepense: {
       activite_id: "",
        dotation: "",
        },

        config: {
          prefix: '',
          suffix: '',
          thousands: ',',
          decimal: '.',
          precision: 0,
          disableNegative: false,
          disabled: false,
          min: null,
          max: null,
          allowBlank: false,
          minimumNumberOfCharacters: 0,
          shouldRound: true,
          focusOnRight: false,
        }
    };
  },
  created() {
    this.getActivite();
    this.getExerciceBudgetaire();
    this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
    ]),
      ...mapGetters("budgetaire", ["getterDotationNotifie"]),

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
    ...mapActions("parametrage", ["getActivite", "getExerciceBudgetaire"]),
    ...mapActions("budgetaire", [
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterDotationNotifie.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        activite_id: this.ajouterNatureDepense.activite_id,
          dotation: this.ajouterNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.ajouterDotationNotifie(objetDirect1);
      this.ajouterNatureDepense = {
        activite_id: "",
        dotation: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
       
        activite_id: this.modNatureDepense.activite_id,
          dotation: this.modNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.modifierDotationNotifie(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
