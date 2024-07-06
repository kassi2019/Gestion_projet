<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste des roles</h3>
     
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
          <button
            type="button"
            class="btn btn-primary rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#largeModal"
          >
            Ajouter
          </button>
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
              <!-- <th scope="col">N</th> -->
              <th scope="col" style="text-align: center">Code</th>
              <th scope="col" style="text-align: center">Libelle</th>
              <th scope="col" style="text-align: center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in getterRoleUtilisateur"
              :key="item.id"
              
            >
            <td>{{ item.code_role }}</td>
            <td style="width: 70%;">{{ item.libelle }}</td>
            <td>
                <button
                  type="button"
                  class="btn btn-primary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  @click.prevent="AfficheModalModification(item.id)"
                >
                  Modifier
                </button>
                <button type="button" class="btn btn-danger rounded-pill" @click.prevent="supprimerRoleUtilisateur(item.id)" >
                  Supprimer
                </button>
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
            <h5 class="modal-title">AJOUTER UN ROLE</h5>
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
                  >Code</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.code_role"
                />
              </div>
               <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Libelle</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.libelle"
                />
              </div>
             
             
              
              
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
               @click.prevent="this.getRoleUtilisateur()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="EnregistrerRole()"
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
            <h5 class="modal-title">MODIFIER ROLE</h5>
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
                  >Code</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.code_role"
                />
              </div>
             <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Libelle</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.libelle"
                />
              </div>
              
             
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
               @click.prevent="this.getRoleUtilisateur()"
              
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="ModifierRole()"
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

export default {
  components: {},
  data() {
    return {
      formData: {
       libelle: "",
        code_role: ""
      },
      modifierrole: {
        libelle: "",
        code_role: ""
      },
    };
  },
  created() {
    this.getRoleUtilisateur();
    
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "getterExerciceBudgetaire",
      "getterUtilisateur",
      "getterModule",
      "getterGroupement","getterRoleUtilisateur"
    ]),
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getExerciceBudgetaire",
      "getUtilisateur",
      "getModule",
      "ajouterRoleUtilisateur",
      "getListeService","getRoleUtilisateur","modifierRoleUtilisateur","supprimerRoleUtilisateur"
    ]),
    AfficheModalModification(id) {
      this.modifierrole = this.getterRoleUtilisateur.find(
        (items) => items.id == id
      );
    },
 

    EnregistrerRole() {
      var objetDirect1 = {
        libelle: this.formData.libelle,
        code_role: this.formData.code_role
      };

      this.ajouterRoleUtilisateur(objetDirect1);
      this.formData = {
        libelle: "",
        code_role: ""
      };
    },

    ModifierRole() {
      var objetDirect1 = {
        id:this.modifierrole.id,
        libelle: this.modifierrole.libelle,
        code_role: this.modifierrole.code_role
      };

      this.modifierRoleUtilisateur(objetDirect1);
      this.modifierrole = {
        libelle: "",
        code_role: ""
      };
    },
  },
};
</script>
