<template>
  <main>
   
    <div class="container">
      <section
        class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
            >
              <div class="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  class="logo d-flex align-items-center w-auto"
                >
                  <img src="../assets/img/logo.png" alt="" />
                  <span class="d-none d-lg-block">FAPAN</span>
                </a>
              </div>
              <!-- End Logo -->

              <div
                class="card mb-3"
                style="
                  border-radius: 15px 50px 30px;
                  border-color: red !important;
                  border-style: solid;
                  box-shadow: 10px 5px 5px #b9121b;
                "
              >
                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p class="text-center small">
                      Enter your username & password to login
                    </p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-12">
                      <label for="yourUsername" class="form-label"
                        >Email</label
                      >
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"
                          >@</span
                        >
                        <input
                          type="text"
                          name="username"
                          class="form-control"
                          id="yourUsername"
                          required
                          v-model="user.email"
                        />
                        <!-- <div class="invalid-feedback">Please enter your username.</div> -->
                      </div>
                      <span style="color:#b9121b;font-weight: bolder;"
                        color="red"
                        class="hasError"
                        v-if="verificationEmail(user.email)==0"
                        role="alert"
                        >l'email est un introuvable
                      </span>
                      <span
                      style="color:#1D702D;font-weight: bolder;"
                        color="#1D702D"
                        class="hasError"
                       v-if="verificationEmail(user.email)==1"
                        role="alert"
                        >l'email est correct
                      </span>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="yourPassword"
                        required
                        v-model="user.password"
                      />
                      <!-- <div class="invalid-feedback">Please enter your password!</div> -->
                    </div>
                    <!-- 
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div> -->
                    <div class="col-12">
                      <button
                        class="btn btn-primary w-100"
                        @click.prevent="connexion()"
                      >
                        Connexion
                      </button>
                    </div>
                    <!-- <div class="col-12">
                      <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div> -->
                  </form>
                </div>
              </div>

              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <!-- End #main -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  props: {
    source: String,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      mydata: false,
    };
  },
  components: {},
  created() {
    this.getUtilisateur();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "loader",
      "getterUtilisateur",
      "champVide",
      "error",
      "errorMessage",
      "getterLoader",
    ]),

    verificationEmail() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.email == id
          );
          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", ["login", "getUtilisateur"]),
    changePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.isVisible = !this.isVisible;
    },

    exit() {
      this.closePopup();
      // and leave the view
    },
    showPopup() {
      this.shouldShowDialog = true;
    },
    closePopup() {
      this.shouldShowDialog = false;
    },
    discard() {
      this.discardEdits();
      this.exit();
    },
    discardEdits() {
      // your code here
    },

    onclikk() {
      this.mydata = true;
    },

    connexion() {
      this.isLoading = true;
    
      if (this.user.email && this.user.password) {
        this.login(this.user).then(
          () => {
            this.isLoading = false;
            this.$router.push("/Accueil");
          },
          (error) => {
            this.loading2 = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
};
</script>
