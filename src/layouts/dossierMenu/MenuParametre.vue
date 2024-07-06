<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-heading" style="text-align: center">PARAMETRE GENERAUX</li>

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href=""
          @click.prevent="activedOptionMenu('ExerciceBudgetaire')"
        >
          <i class="bi bi-person"></i>
          <span>Exercice Budgétaire</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href=""
          @click.prevent="activedOptionMenu('section')"
        >
          <i class="bi bi-person"></i>
          <span>Section</span>
        </a>
      </li>
      
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href=""
          @click.prevent="activedOptionMenu('typeFinancement')"
        >
          <i class="bi bi-person"></i>
          <span>Type de financement</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href=""
          @click.prevent="activedOptionMenu('bailleur')"
        >
          <i class="bi bi-person"></i>
          <span>Bailleur</span>
        </a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Taux</span>
        </a>
      </li> -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href=""
          @click.prevent="activedOptionMenu('Activite')"
        >
          <i class="bi bi-person"></i>
          <span>Activité</span>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link collapsed" href="" @click.prevent="activedOptionMenu('projet')">
          <i class="bi bi-person"></i>
          <span>Création du projet</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Création entreprise</span>
        </a>
      </li>
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},

  created() {
    this.marcheid = this.$route.params.id;
  },
  computed: {
    ...mapGetters("Utilisateurs", ["getterUserStore"]),
  },
  methods: {
    ...mapActions("Application", ["getRenvoi"]),
    activedOptionMenu(route_name) {
      this.$router.push({
        name: route_name,
      });
    },
  },
};
</script>
