<template>
  <main id="main" class="main">
    
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste exercice budgétaire</h3>
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
              <th scope="col">Année</th>
              <th scope="col" style="width: 35%">Date debut</th>
              <th scope="col" style="width: 35%">Date fin</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in getterExerciceBudgetaire"
              :key="item.id"
              style="text-align: center"
            >
              <td
                v-if="item.encours == 1"
                style="
                  background: #1d702d;
                  color: aliceblue;
                  text-align: center;
                "
              >
                {{ item.annee }}
              </td>
              <td v-else>{{ item.annee }}</td>
              <td>{{ formaterDate(item.date_debut) }}</td>
              <td>{{ formaterDate(item.date_fin) }}</td>
              <td v-if="item.encours == 1">en cours</td>
              <td v-if="item.encours != 1"></td>
              <td>
                <!-- <button type="button" class="btn btn-primary rounded-pill">
                  Modifier
                </button> -->
                <span
                  class="badge rounded-pill bg-secondary"
                  style="cursor: pointer"
                  v-if="item.encours == 1"
                ></span>
                <span
                  class="badge rounded-pill bg-dark"
                  style="cursor: pointer"
                  @click.prevent="ModifierExerciceEncours(item.id, item.annee)"
                  v-else
                  >Activer</span
                >

                <span
                  class="badge rounded-pill bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  style="cursor: pointer"
                  @click.prevent="AfficheModalModification(item.id)"
                  >Modifier</span
                >
                <span class="badge bg-danger" style="cursor: pointer"
                  @click.prevent="supprimerExerciceBudgetaire(item.id)">Supprimer</span
                >
                <!-- <button
                  type="button"
                  class="btn btn-danger rounded-pill"
                  v-if="item.encours == 0"
                >
                  Supprimer
                </button> -->
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
            <h5 class="modal-title">Ajouter Exercice budgétaire</h5>
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
                <label for="inputNanme4" class="form-label">Année</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterExercice.annee"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterExercice.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date Fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterExercice.date_fin"
                />
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
              @click.prevent="EnregistrerExercice()"
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
            <h5 class="modal-title">Modifier Exercice budgétaire</h5>
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
                <label for="inputNanme4" class="form-label">Année</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierExercice.annee"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierExercice.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date Fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierExercice.date_fin"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getExerciceBudgetaire()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="ModifierExerciceBudgetaire()"
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
      ajouterExercice: {
        annee: "",
        date_debut: "",
        date_fin: "",
        encours: 0,
      },
      modifierExercice: {
        annee: "",
        date_debut: "",
        date_fin: "",
      },
    };
  },
  created() {
    // this.getUtilisateur();
    this.getExerciceBudgetaire();
    // this.getProfileUsers();
    // this.getUsers();
    // this.getStructureGeoGraphique();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterExerciceBudgetaire",
      "getterUtilisateur",
    ]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getExerciceBudgetaire",
      "getUtilisateur",
      "ajouterExerciceBudgetaire",
      "modifierExerciceBudgetaire",
      "supprimerExerciceBudgetaire",
      "encoursExerciceBudgetaire",
    ]),
    AfficheModalModification(id) {
      this.modifierExercice = this.getterExerciceBudgetaire.find(
        (items) => items.id == id
      );
    },
    EnregistrerExercice() {
      var objetDirect1 = {
        annee: this.ajouterExercice.annee,
        date_debut: this.ajouterExercice.date_debut,
        date_fin: this.ajouterExercice.date_fin,
        encours: this.ajouterExercice.encours,
      };

      this.ajouterExerciceBudgetaire(objetDirect1);
      this.ajouterExercice = {
        annee: "",
        date_debut: "",
        date_fin: "",
      };
    },

    ModifierExerciceBudgetaire() {
      var objetDirect1 = {
        id: this.modifierExercice.id,
        annee: this.modifierExercice.annee,
        date_debut: this.modifierExercice.date_debut,
        date_fin: this.modifierExercice.date_fin,
      };

      this.modifierExerciceBudgetaire(objetDirect1);
      this.modifierExercice = {
       
      };
    },

    ModifierExerciceEncours(id, id1) {
      let ob = {
        id: id,
        annee: id1,
      };
      this.encoursExerciceBudgetaire(ob);
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
