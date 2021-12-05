<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Bacheca" icon="ti-panel"/>
        <sidebar-link to="/course" name="Corsi" icon="ti-course"/>
        <sidebar-link to="/users" name="Utenti" icon="ti-users"/>
        <sidebar-link to="/message" name="Messaggi" notification="2" icon="ti-messages" class="sidebar_notification">  </sidebar-link>
        <sidebar-link to="/register_course" name="Registro" icon="ti-register"/>
        <sidebar-link to="/help" name="Help" icon="ti-help"/>
        <sidebar-link to="/login" name="Esci" icon="ti-goout"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <div class="mobile_logo">
        <img src="@/assets/img/mobile_logo.png">
      </div>
      <dashboard-content @click.native="toggleSidebar"></dashboard-content>
      <MobileMenu></MobileMenu>
    </div>
  </div>
</template>
<script>
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
