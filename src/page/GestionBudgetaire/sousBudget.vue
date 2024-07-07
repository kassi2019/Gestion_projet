<template>
  <main id="main" class="main">

    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste Sous budget</h3>
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
     <table class="table table-bordered border-primary">
                      <thead>
                        <tr>
                          <!-- <th scope="col">#</th> -->
                          <!-- <th scope="col">N</th> -->
 <th scope="col" style="text-align: center" >
                            Activité
                          </th>
                          <th scope="col" style="text-align: center" >
                            Sous budget
                          </th>
                          <th scope="col" style="text-align: center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item1 in getterSousBudget"
                          :key="item1.id"
                        >
                        <td style="width: 45%">{{ libelleActivite(item1.activite_id) }}</td>
                          <td style="width: 40%">{{ item1.libelle }}</td>
                          <td>
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
                  @click.prevent="supprimerSousBudget(item1.id)"
                  >Supprimer</span
                >
                           
                          </td>
                        </tr>
                      </tbody>
                    </table>
    </section>
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter Sous Budget / Composante</h5>
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
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.libelle"
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
            <h5 class="modal-title">Modifier Sous Budget / Composante</h5>
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
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.libelle"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getSousBudget()"
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
        libelle: "",

        activite_id: "",
      },
      modNatureDepense: {
        libelle: "",

        activite_id: "",
      },
    };
  },
  created() {
    this.getActivite();
    this.getGroupeActivite()
    this.getSousBudget();
  },
  computed: {
   
    ...mapGetters("parametrage", ["getterActivite","getterSousBudget",'getterGrpeActivite']),
    libelleSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterSousBudget.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },
    libelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActivite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" - ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    GroupeParActivie() {
      // return (id) => {

      let objet = this.getterSousBudget;
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.activite_id);
        });
        let unique = [...new Set(array_exercie)];

        if (unique.length == 0) {
          return [];
        }
        return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
      }
      return [];
      // };
    },
  },
  methods: {
   
      ...mapActions("parametrage", [
      "getActivite",
      "getSection", "getActivite",'getGroupeActivite',
      "getSousBudget",
      "ajouterSousBudget",
      "modifierSousBudget",
      "supprimerSousBudget",
      
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterSousBudget.find((items) => items.id == id);
    },
    EnregistrerSection() {
      var objetDirect1 = {
        activite_id: this.ajouterNatureDepense.activite_id,
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.ajouterSousBudget(objetDirect1);
      this.ajouterNatureDepense = {
        activite_id: "",
        libelle: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        activite_id: this.modNatureDepense.activite_id,
        libelle: this.modNatureDepense.libelle,
      };

      this.modifierSousBudget(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
