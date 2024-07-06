<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

    

      <li class="nav-heading">GESTION UTILISATEUR</li>

      <!-- <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Module</span>
        </a>
      </li> -->
<li class="nav-item">
        <a class="nav-link collapsed" href="" @click.prevent="activedOptionMenu('serviceProjet')">
          <i class="bi bi-person"></i>
          <span>Service</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="" @click.prevent="activedOptionMenu('roleUtilisateur')">
          <i class="bi bi-person"></i>
          <span>Role</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="" @click.prevent="activedOptionMenu('Utilisateur')">
          <i class="bi bi-person"></i>
          <span>Utilisateur</span>
        </a>
      </li>
      

    </ul>

  </aside><!-- End Sidebar-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    
    components: {
 
    },

    created() {
   this.marcheid = this.$route.params.id;
    },
    computed: {
        ...mapGetters("Utilisateurs", ["getterUserStore"]),

    },
    methods: {
        ...mapActions("Application", [
            "getRenvoi"
        ]),
      activedOptionMenu(route_name) {
      
      this.$router.push({
        name: route_name,
      });
    },
    }
};

</script>
