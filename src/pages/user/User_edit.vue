<template>
  <div class="register">
    <div class="text-center sticky_header" :class="{ transparent : changeBackground }">
      <p class="page_title"> PAGINA UTENTE </p>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> DATI UTENTE </p>
      </div>
      <div class="register-responsive user_edit_table row">
        <div class="col-md-6 col-sm-12 user_form_column">
          <div class="user_form">
            <label> Congnome </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Codice Fiscale </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Data di nascita </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Nazionlaita </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> In Via </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Domiciliato a </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Civico </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Congnome </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Email </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Note </label>
            <input type="text">
          </div>
        </div>
        <div class="col-md-6 col-sm-12 user_form_column">
          <div class="user_form">
            <label> Nome </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Sesso </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Luogo </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Residente a </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Civico </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> In via </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> REcapito telefonico </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Azienda </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Data dimissione </label>
            <input type="text">
          </div>
          <div class="user_form">
            <label> Ruolo </label>
            <div>
              <p> <input type="checkbox" name="role" style="width:18px"> Alunno </p>
              <p> <input type="checkbox" name="role" style="width:18px"> Docente </p>
              <p> <input type="checkbox" name="role" style="width:18px"> Controller </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right" style="padding:10px">
        <button type="button" @click="saveModal" class="save_btn" > SALVA </button>
        <modal-window
          :visible="showModal"
          :close-on-escape="true"
          :close-on-outside-click="true"
          @close="showModal = false"
        >
          <h2> UTENTE SALVATO! </h2>
          <p> L’UTENTE RICEVERA’ UNA MAIL DI CONFERMA. </p>
          <router-link to="/users">
            <h3> CLICCA QUI PER PROSEGUIRE </h3>
          </router-link>
        </modal-window>
    </div>
  </div>
</template>
<style>
  .register-responsive{  
    height: 350px;
    overflow-y: scroll;
    width: 100%;
    overflow-x: auto;
    border-bottom: 1px solid #34B5CF;
  }
  .transparent{
    background: transparent;
  }
</style>
<script>
import ModalWindow from "@vuesence/modal-window";

export default {
    components: {
        ModalWindow
    },
    data() {
      return {
        changeBackground: false,
        showModal: false
      };
    },
    methods: {
      saveModal() {
        this.showModal= true;
        this.changeBackground = true;
      }
    }
};
</script>