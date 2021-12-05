<template>
    <div>
        <div class="text-center sticky_header">
            <p class="page_title"> MESSAGGI </p>
        </div>

        <div class="register_card_row">
            <div class="message">
                <div class="message_box">
                    <div class="message_header">
                        <div class="message_close text-right">
                            <img src="@/assets/img/close.png">
                        </div>
                        <div class="message_title">
                            <p class="message_date"> 05/05/2020 h 12.03 </p>
                            <span> Iscrizione anno scolastico </span>
                        </div>
                    </div>
                    <div class="message_body">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
                        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
                <div class="message_btns">
                    <button class="print_message_btn"> STAMPA MESSAGGIO </button>
                    <button class="download_message_btn"> SCARICA MESSAGGIO </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
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
