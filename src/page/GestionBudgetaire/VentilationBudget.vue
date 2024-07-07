<template>
  <main id="main" class="main">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Eclatement du budget</h5>

        <!-- Pills Tabs -->
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              SAISIR BUDGET
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              VERIFICATION DU BUDGET
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div class="tab-content pt-2" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <section class="section">
              <div class="row">
                <div class="col-lg-6">
                  <form class="row g-3">
                    <div class="col-12">
                      <label for="inputNanme4" class="form-label"
                        >Your Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputNanme4"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputNanme4" class="form-label"
                        >Your Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputNanme4"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-lg-6">
                    <form class="row g-3">
                    <div class="col-12">
                      <label for="inputNanme4" class="form-label"
                        >Your Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputNanme4"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputNanme4" class="form-label"
                        >Your Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputNanme4"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure
            eos quia. Accusantium distinctio omnis et atque fugiat. Itaque
            doloremque aliquid sint quasi quia distinctio similique. Voluptate
            nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi
            debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis
            magnam. Officiis accusamus impedit molestias nostrum veniam. Qui
            amet ipsum iure. Dignissimos fuga tempore dolor.
          </div>
        </div>
        <!-- End Pills Tabs -->
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        activite_id: "",
        dotation: "",
      },
      modNatureDepense: {
        activite_id: "",
        dotation: "",
      },

      config: {
        prefix: "",
        suffix: "",
        thousands: ",",
        decimal: ".",
        precision: 0,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  created() {
    this.getActivite();
    this.getExerciceBudgetaire();
    // this.getGroupeActivitebudgetNotifie()
    this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterGrpeActiviteBudgetNotifie",
    ]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
    ]),
  },
};
</script>
