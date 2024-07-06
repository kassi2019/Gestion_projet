<template>
  <main id="main" class="main">
   
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste Projet</h3>
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
              <th scope="col">Section</th>
              <th scope="col" style="width: 40%">Nom projet</th>
              <th scope="col" style="width:10% ">Date début</th>
              <th scope="col" style="width:10% ">Date fin</th>
              <th style="width:15% "></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getterProjet" :key="item.id">
              <td>{{ item.section }}</td>
              <td>{{ item.nom_projet }}</td>
              <td>{{ formaterDate(item.date_debut) }}</td>
              <td>{{ formaterDate(item.date_fin) }}</td>
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
                  @click.prevent="supprimerProjet(item.id)"
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
            <h5 class="modal-title">Ajouter Projet</h5>
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
                <label for="inputNanme4" class="form-label">Section</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.section_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterSection"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.nom_projet"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.date_fin"
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
            <h5 class="modal-title">Modifier Projet</h5>
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
                <label for="inputNanme4" class="form-label">Section</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.section_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterSection"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.nom_projet"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_fin"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getProjet()"
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
        date_fin: "",
        libelle: "",
        date_debut: "",
        section_id: "",
      },
      modNatureDepense: {
        date_fin: "",
        libelle: "",
        date_debut: "",
        section_id: "",
      },
    };
  },
  created() {
    this.getSection();
    this.getProjet();
  },
  computed: {
    ...mapGetters("parametrage", ["getterProjet", "getterSection"]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getProjet",
      "ajouteProjet",
      "modifierProjet",
      "supprimerProjet",
      "getSection",
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterProjet.find((items) => items.id == id);
    },
    EnregistrerSection() {
      var objetDirect1 = {
        section_id: this.ajouterNatureDepense.section_id,
        nom_projet: this.ajouterNatureDepense.nom_projet,
        date_debut: this.ajouterNatureDepense.date_debut,
        date_fin: this.ajouterNatureDepense.date_fin,
      };

      this.ajouteProjet(objetDirect1);
      this.ajouterNatureDepense = {
        section_id: "",
        nom_projet: "",
        date_debut: "",
        nom_projet: "",
        date_fin: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        section_id: this.modNatureDepense.section_id,
        nom_projet: this.modNatureDepense.nom_projet,
        date_debut: this.modNatureDepense.date_debut,
        date_fin: this.modNatureDepense.date_fin,
      };

      this.modifierProjet(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
