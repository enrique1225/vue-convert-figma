<template>
  <div>
    <div class="text-center sticky_header">
      <p class="page_title"> MESSAGGI </p>
    </div>

    <div class="register_card_row row">
      <div class="col-sm-6 col-12 register_card" style="padding-top: 60px!important;">
        <p> Ciao <strong> ADMIN! </strong> </p>
        <p style="margin-top: 20px;"> In questa sezione trovi i messaggi inviati. <br> 
          Clicca sul testo per leggere il messaggio completo. </p>
      </div>
      <img src="@/assets/img/Path 87.png" class="mobile_wave">
      <div class="col-sm-6 col-12 register_card" style="padding-top: 90px!important;">
        <router-link to="/message/id">
          <img src="@/assets/img/edit.png">
          <strong style="display: block"> NUOVO MESSAGGIO</strong> 
        </router-link>
      </div>
      <img src="@/assets/img/Path 87.png" class="dashboard_white_wave">
    </div>

    <div class="message">
      <div class="message_box">
        <div class="message_header">
          <div class="message_title">
            <p class="message_date"> 05/05/2020 h 12.03 </p>
            <span>
              <router-link to="/message/schoolyear"> Iscrizione anno scolastico </router-link>
            </span>
          </div>
        </div>
        <div class="message_preview">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore ....
        </div>
      </div>
    </div>

    <div class="message">
      <div class="message_box">
        <div class="message_header">
          <div class="message_title">
            <p class="message_date"> 05/05/2020 h 12.03 </p>
            <span>
              <router-link to="/message/schoolyear"> Iscrizione anno scolastico </router-link>
            </span>
          </div>
        </div>
        <div class="message_preview">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore ....
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .container{
    text-align: center;
    background: #34B5CF;
    padding: 10px;
    margin: 70px 15px 0 0!important;
  }
  .register_card_row{
    width: 100%;
    margin: 70px 15px 0 0;
  }
</style>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
