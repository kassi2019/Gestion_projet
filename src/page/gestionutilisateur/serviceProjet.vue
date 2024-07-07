<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste des services</h3>
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
              <th></th>
              <th colspan="3" style="text-align: center">MODULE</th>
              <th></th>
            </tr>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th scope="col">Nom du service</th>
              <th scope="col" style="text-align: center">Gestion budgétaire</th>
              <th scope="col" style="text-align: center">
                Gestion des marches
              </th>
              <th scope="col" style="text-align: center">
                Gestion du personnel
              </th>
              <th scope="col" style="text-align: center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in getterGroupement"
              :key="item.id"
              style="text-align: center"
            >
              <td>{{ item.libelle }}</td>
              <td
                v-if="item.mod_gb != 0"
                style="
                  background: #1d702d;
                  color: aliceblue;
                  text-align: center;
                "
              >
                MODULE ACTIVE
              </td>
              <td v-else></td>
              <td
                v-if="item.mod_gm != 0"
                style="
                  background: #1d702d;
                  color: aliceblue;
                  text-align: center;
                "
              >
                MODULE ACTIVE
              </td>
              <td v-else></td>
              <td
                v-if="item.mod_gp != 0"
                style="
                  background: #1d702d;
                  color: aliceblue;
                  text-align: center;
                "
              >
                MODULE ACTIVE
              </td>
              <td v-else></td>

              <td>
                <span
                  class="badge rounded-pill bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  style="cursor: pointer"
                  @click.prevent="AfficheModalModification(item.id)"
                  >Modifier</span
                >
                <!-- <span
                  class="badge bg-danger"
                  style="cursor: pointer"
                  @click.prevent="supprimerActivite(item.id)"
                  >Supprimer</span
                > -->
                
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
            <h5 class="modal-title">ENREGISTREMENT DU SERVICE</h5>
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
                <label for="inputNanme4" class="form-label"
                  >Nom du groupement</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.libelle"
                />
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 1</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.mod_gb"
                >
                  <option selected></option>
                  <option
                    v-for="item in afficheModule(1)"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 2</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.mod_gm"
                >
                  <option selected></option>
                  <option
                    v-for="item in afficheModule(2)"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 3</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.mod_gp"
                >
                  <option selected></option>
                  <option
                    v-for="item in afficheModule(3)"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
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
              @click.prevent="EnregistrementOpAutreDepenese()"
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
            <h5 class="modal-title">MODIFICATION DU SERVICE</h5>
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
                <label for="inputNanme4" class="form-label"
                  >Nom du groupement</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierService.libelle"
                />
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 1</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modifierService.mod_gb"
                >
                  <option
                    v-for="item in getterModule.filter(
                      (item1) => item1.code == 1
                    )"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 2</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modifierService.mod_gm"
                >
                  <option
                    v-for="item in getterModule.filter(
                      (item1) => item1.code == 2
                    )"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <br />
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Module 3</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modifierService.mod_gp"
                >
                  <option
                    v-for="item in getterModule.filter(
                      (item1) => item1.code == 3
                    )"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
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
              @click.prevent="EnregistrementOpAutreDepenese()"
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

export default {
  components: {},
  data() {
    return {
      formData: {
        libelle: "",
        mod_gb: 0,
        mod_gm: 0,
        mod_gp: 0,
      },
      modifierService: {
        libelle: "",
        mod_gb: 0,
        mod_gm: 0,
        mod_gp: 0,
      },
    };
  },
  created() {
    // this.getUtilisateur();
    this.getModule();
    this.getListeService();
    //this.getExerciceBudgetaire();
    // this.getProfileUsers();
    // this.getUsers();
    // this.getStructureGeoGraphique();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "getterExerciceBudgetaire",
      "getterUtilisateur",
      "getterModule",
      "getterGroupement",
    ]),
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getExerciceBudgetaire",
      "getUtilisateur",
      "getModule",
      "ajouterServiceGroupement",
      "getListeService",
    ]),
    AfficheModalModification(id) {
      this.modifierService = this.getterGroupement.find(
        (items) => items.id == id
      );
    },
    afficheModule($id) {
      return this.getterModule.filter((data) => data.code == $id);
    },

    EnregistrementOpAutreDepenese() {
      var objetDirect1 = {
        libelle: this.formData.libelle,
        mod_gb: this.formData.mod_gb,
        mod_gm: this.formData.mod_gm,
        mod_gp: this.formData.mod_gp,
      };

      this.ajouterServiceGroupement(objetDirect1);
      this.formData = {
        libelle: "",
        mod_gb: 0,
        mod_gm: 0,
        mod_gp: 0,
      };
    },
  },
};
</script>
