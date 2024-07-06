<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste Activité</h3>
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
              <th scope="col">Code</th>
              <th scope="col" style="width: 75%">Libelle</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
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
            <h5 class="modal-title">Ajouter Activité</h5>
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
                <label for="inputNanme4" class="form-label">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.code"
                />
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
            <h5 class="modal-title">Modifier Activité</h5>
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
                <label for="inputNanme4" class="form-label">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.code"
                />
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
export default {
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        code: "",
        libelle: "",
       
      },
      modNatureDepense: {
        code: "",
        libelle: "",
        
      },
    };
  },
  created() {

    this.getActivite();
    
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      
    ]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "ajouteActivite",
      "modifierActivite",
      "supprimerActivite",
  
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterActivite.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        code: this.ajouterNatureDepense.code,
        libelle: this.ajouterNatureDepense.libelle,
       
      };

      this.ajouteActivite(objetDirect1);
      this.ajouterNatureDepense = {
        code: "",
        libelle: "",
       
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        code: this.modNatureDepense.code,
        libelle: this.modNatureDepense.libelle,
        
      };

      this.modifierActivite(objetDirect1);
      this.modNatureDepense = {};
    },

  
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
