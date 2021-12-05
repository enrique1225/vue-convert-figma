<template>
  <div class="mobile_sidebar">
    <div class="">
      <ul>
        <li>
          <router-link to="/dashboard">
            <i class="ti-panel"></i>
            <p> Bacheca </p>
          </router-link>
        </li>
        <li>
          <router-link to="/course">
            <i class="ti-course"></i>
            <p> Corsi </p>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <i class="ti-users"></i>
            <p> Utenti </p>
          </router-link>
        </li>
        <li>
          <router-link to="/register_course">
            <i class="ti-register"></i>
            <p> Registro </p>
          </router-link>
        </li>
        <li>
          <router-link to="/message" style="position: relative">
            <i class="ti-messages" style="position: relative"></i>
            <p> Messaggi </p>
            <p class="mobile_notification"> 2 </p>
          </router-link>
        </li>
        <li>
          <router-link to="/help">
            <i class="ti-help"></i>
            <p> Help </p>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <i class="ti-goout"></i>
            <p> Esci </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>