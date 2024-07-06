<template>
  <div style="border: #00734F;">
    <TheHeader/>
   
    <main id="main" class="main">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <section class="section dashboard"  style=" padding-left: 15%;">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-xxl-4 col-md-6">
                <div
                  class="card info-card sales-card"
                  style="
                    border-radius: 15px 50px 30px;
                    border-color: red !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #B9121B;
                    
                  "
                >
                  <div class="card-body"  @click.prevent="ParametreGeneraux(1)">
                    <div class="d-flex align-items-center" @click.prevent="ParametreGeneraux(1)">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div 
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-cart" style=" padding-right: 100%;"></i>
                      </div> -->
                      <!-- <div class="ps-3">
                      <h6>145</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span>
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div> -->
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center" @click.prevent="ParametreGeneraux(1)">
                      Parametre Généraux
                    </h5>
                  </div>

                  <!-- ------------------------------ -->
                </div>
              </div>
              <div class="col-xxl-4 col-md-6" @click.prevent="ParametreGeneraux(2)" v-if="afficheGestionBudgetaire(id_service)!=0">
                <div
                  class="card info-card revenue-card"
                  style="
                    border-radius: 15px 50px 30px;
                    border-color: #375D81 !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #375D81;
                  "
                >
                  <div class="card-body">
                    <div class="d-flex align-items-center" @click.prevent="ParametreGeneraux(2)">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-currency-dollar"></i>
                      </div> -->
                      <!-- <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span>
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div> -->
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center" @click.prevent="ParametreGeneraux(2)">
                      Gestion Budgétaire
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-md-6" @click.prevent="ParametreGeneraux(3)" v-if="afficheGestionMarche(id_service)!=0">
                <div
                  class="card info-card revenue-card"
                  style="
                    border-radius: 15px 50px 30px;
                    border-color: #F9A41E !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #F9A41E;
                  "
                >
                  <div class="card-body" @click.prevent="ParametreGeneraux(3)">
                    <div class="d-flex align-items-center" @click.prevent="ParametreGeneraux(3)">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-currency-dollar"></i>
                      </div> -->
                      <!-- <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span>
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div> -->
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center" @click.prevent="ParametreGeneraux(3)">
                      Gestion des Marches
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--2 ---------------------------------------------- -->

          <div class="col-lg-8">
            <div class="row">
              <div class="col-xxl-4 col-md-6" @click.prevent="ParametreGeneraux(4)" v-if="afficheGestionPersonnel(id_service)!=0">
                <div
                  class="card info-card revenue-card"
                  style="
                    border-radius: 15px 50px 30px;
                    border-color: #00734F !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #00734F;#457DBB
                  "
                >
                  <div class="card-body" @click.prevent="ParametreGeneraux(4)" >
                    <div class="d-flex align-items-center">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-currency-dollar"></i>
                      </div> -->
                      <!-- <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span>
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div> -->
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center" @click.prevent="ParametreGeneraux(4)">
                      Gestion du Personnel
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-md-6" @click.prevent="ParametreGeneraux(5)">
                <div
                  class="card info-card revenue-card"
                  style="
                    border-radius: 15px 50px 30px;
                    border-color: #457DBB !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #457DBB;
                  "
                >
                  <div class="card-body" @click.prevent="ParametreGeneraux(5)">
                    <div class="d-flex align-items-center">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-currency-dollar"></i>
                      </div> -->
                      <!-- <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span>
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div> -->
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center" @click.prevent="ParametreGeneraux(5)">
                      Gestion des Rapports
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-md-6"  @click.prevent="ParametreGeneraux(6)">
                <div
                  class="card info-card revenue-card"
                 style="
                    border-radius: 15px 50px 30px;
                    border-color: #457DBB !important;
                    border-style: solid;
                    box-shadow: 10px 5px 5px #457DBB;
                  "
                >
                  <div class="card-body">
                    <div class="d-flex align-items-center"  @click.prevent="ParametreGeneraux(6)">
                      <br />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <!-- <div
                        class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-currency-dollar"></i>
                      </div> -->
                     
                    </div>
                    <h5 class="card-title fw-bold" style="text-align: center"  @click.prevent="ParametreGeneraux(6)">
                      Gestion Utilisateurs
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--3 ------------------------------------------------------- -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import TheHeader from "../../layouts/TheHeader.vue"
export default {
    
    components: {
    TheHeader
    },

  created() {
      this.getListeService()
    // this.getProfileUsers();
    // this.getUsers();
   // this.getStructureGeoGraphique();

    },
    computed: {
        ...mapGetters("Utilisateurs", ["getterUserStore","getterGroupement"]),
id_service() {
       let objLinea = localStorage.getItem("User");
  let objJson = JSON.parse(objLinea);
  return objJson.service_id

      },

      afficheGestionBudgetaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterGroupement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.mod_gb;
          }
          return 0;
        }
      };
      },
    afficheGestionMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterGroupement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.mod_gm;
          }
          return 0;
        }
      };
      },
    afficheGestionPersonnel() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterGroupement.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.mod_gp;
          }
          return 0;
        }
      };
    },
    },
    methods: {
        ...mapActions("Utilisateurs", [
            "getListeService"
        ]),
 ParametreGeneraux(id) {
      this.$router.push({
        name: "PageAccueil",
        params: { id: id },
      });
    },
    }
};

</script>
