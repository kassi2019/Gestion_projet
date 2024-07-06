<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste Section</h3>
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
              v-for="item in getterSection"
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
                  @click.prevent="supprimerSection(item.id)"
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
            <h5 class="modal-title">Ajouter Section</h5>
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
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterSection.code"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterSection.libelle"
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
            <h5 class="modal-title">Modifier Section</h5>
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
                  v-model="modSection.code"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modSection.libelle"
                />
              </div>
             
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getSection()"
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
      ajouterSection: {
        code: "",
        libelle: "",
       
      },
      modSection: {
        code: "",
        libelle: "",
        
      },
    };
  },
  created() {

    this.getSection();
    
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterSection",
      
    ]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getSection",
      "ajouteSection",
      "modifierSection",
      "supprimerSection",
  
    ]),
    AfficheModalModification(id) {
      this.modSection = this.getterSection.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        code: this.ajouterSection.code,
        libelle: this.ajouterSection.libelle,
       
      };

      this.ajouteSection(objetDirect1);
      this.ajouterSection = {
        code: "",
        libelle: "",
       
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modSection.id,
        code: this.modSection.code,
        libelle: this.modSection.libelle,
        
      };

      this.modifierSection(objetDirect1);
      this.modSection = {};
    },

  
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
