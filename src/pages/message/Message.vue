<template>
  <div>
    <div class="text-center sticky_header">
      <p class="page_title"> MESSAGGI </p>
    </div>
    
    <div class="course_table02">
      <p class="computer_text02"> Ciao Gaia! </p>
      <p class="computer_text02"> In questa sezione trovi tutti i messaggi ricevuti dall'ente formativo. <br>
      Clicca sul testo per leggere il messaggio completo.</p>
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
          totam rem aperiam, eaque ipsa quae ab illo inventore ...
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
          totam rem aperiam, eaque ipsa quae ab illo inventore ...
        </div>
      </div>
    </div>

    <div class="message">
      <div class="message_box" style="margin-bottom: 50px;">
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
          totam rem aperiam, eaque ipsa quae ab illo inventore ... 
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
</style>
<script>
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable,
  },
  
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>