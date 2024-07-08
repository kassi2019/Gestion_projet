<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <!-- <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li> -->
      <li class="nav-heading" style="text-align: center">GESTION BUDGETAIRE</li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-menu-button-wide"></i><span>Parametre Budget</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="components-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('NatureDepense')"
            >
              <i class="bi bi-person"></i>
              <span>Nature dépense</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('NatureEconomique')"
            >
              <i class="bi bi-person"></i>
              <span>Nature économique</span>
            </a>
          </li>

          <li>
            <a href="" @click.prevent="activedOptionMenu('sousBudget')">
              <i class="bi bi-circle"></i><span>Sous budget / Composante</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-journal-text"></i><span>Saisir budget</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="forms-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('BudgetNotifie')"
            >
              <i class="bi bi-person"></i>
              <span>Budget notifié</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('BudgetReport')"
            >
              <i class="bi bi-person"></i>
              <span>Budget réport</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('BudgetRessourcePropre')"
            >
              <i class="bi bi-person"></i>
              <span> Budget ressource propre</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('BudgetAutreRessource')"
            >
              <i class="bi bi-person"></i>
              <span>Budget autre ressource</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="users-profile.html"
              @click.prevent="activedOptionMenu('Budget')"
            >
              <i class="bi bi-person"></i>
              <span>Eclaitement du budget</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span> Modification budget</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-layout-text-window-reverse"></i
          ><span>Saisir ordre paiement</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="tables-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span> Provisoire</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span> Direct</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span> Annulation</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span> Définitif</span>
            </a>
          </li>
        </ul>
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
