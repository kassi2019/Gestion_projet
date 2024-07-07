<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h3 style="font-size: 16px">Liste des utilisateurs</h3>

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
              <!-- <th scope="col">N</th> -->
              <th scope="col" style="text-align: center">Nom</th>
              <th scope="col" style="text-align: center">Prénoms</th>
              <th scope="col" style="text-align: center">Email</th>
              <th scope="col" style="text-align: center">Rôle</th>
              <th scope="col" style="text-align: center">Service</th>
              <th scope="col" style="text-align: center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getterUtilisateur" :key="item.id">
              <td>{{ item.name }}</td>
              <td style="">{{ item.prenoms }}</td>
              <td style="">{{ item.email }}</td>
              <td style="">{{ item.libelle_role }}</td>
              <td style="">{{ item.libelle_service }}</td>
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
                  
                  >Supprimer</span
                >
                <!-- <button
                  type="button"
                  class="btn btn-primary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  @click.prevent="AfficheModalModification(item.id)"
                >
                  Modifier
                </button> -->
                
                <!-- <button
                  type="button"
                  class="btn btn-danger rounded-pill"
                  @click.prevent="supprimerRoleUtilisateur(item.id)"
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
            <h5 class="modal-title">AJOUTER UTILISATEUR</h5>
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
                <label for="inputNanme4" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.name"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Prénoms</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.prenoms"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.email"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Password</label>

                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="yourPassword"
                  required
                  style="border: 1px solid #000"
                  v-model="formData.password"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Rôle</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.role_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterRoleUtilisateur"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Service</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.service_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterGroupement"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <!-- <div class="col-12">
                <label for="inputNanme4" class="form-label">Module{{ formData.module_id }}</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.module_id"
                >
                 
                  <option
                    v-for="item in AfficheModuleGb(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gb"
                  >
                    {{ item.mod_gb }}
                  </option>
                   <option
                    v-for="item in AfficheModuleGm(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gm"
                  >
                    {{ libelleModule(item.mod_gm) }}
                  </option>
                  <option
                    v-for="item in AfficheModuleGP(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gp"
                  >
                    {{ libelleModule(item.mod_gp) }}
                  </option>
                </select>
              </div> -->
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
              @click.prevent="EnregistrerUtilisateur()"
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
                <label for="inputNanme4" class="form-label">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.code_role"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
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
        module_id: "",
      },
      FormDataFacture: {},
      modifierrole: {
        libelle: "",
        code_role: "",
      },
    };
  },
  created() {
    // this.getRoleUtilisateur();
    // this.getModule();
    // this.getListeService();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "getterExerciceBudgetaire",
      "getterUtilisateur",
      "getterModule",
      "getterGroupement",
      "getterRoleUtilisateur",
    ]),

    libelleModule() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterModule.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getExerciceBudgetaire",
      "getUtilisateur",
      "getModule",
      "EnregistreUtilisateur",
      "getListeService",
      "getRoleUtilisateur",
      "modifierRoleUtilisateur",
      "supprimerRoleUtilisateur",
    ]),
    AfficheModalModification(id) {
      this.modifierrole = this.getterRoleUtilisateur.find(
        (items) => items.id == id
      );
    },

    AfficheModuleGb($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gb != 0
      );
    },
    AfficheModuleGm($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gm != 0
      );
    },
    AfficheModuleGP($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gp != 0
      );
    },
    EnregistrerUtilisateur() {
      var objetDirect1 = {
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
        role_id: this.formData.role_id,
        service_id: this.formData.service_id,
        prenoms: this.formData.prenoms,
      };

      this.EnregistreUtilisateur(objetDirect1);
      this.formData = {
        name: "",
        email: "",
        password: "",
        role_id: "",
        service_id: "",
        prenoms: "",
      };
    },

    ModifierRole() {
      var objetDirect1 = {
        id: this.modifierrole.id,
        libelle: this.modifierrole.libelle,
        code_role: this.modifierrole.code_role,
      };

      this.modifierRoleUtilisateur(objetDirect1);
      this.modifierrole = {
        libelle: "",
        code_role: "",
      };
    },
  },
};
</script>
