<template>
    <div class="full_page">
        <div class="text-center sticky_header">
            <p class="page_title"> HELP </p>
        </div>
        <div class="message_box"  style="margin: 70px 0;">
            <div class="message_header">
                <div class="message_title text-center">
                    <span> Iscrizione anno scolastico </span>
                </div>
            </div>
            <div class="message_preview text-center" style="padding: 30px">
                PAGINA DI ASSISTENZA PER L'USO DEL PORTALE IN QUESTA SEZIONE POTRAI TROVARE LE RISPOSTE ALLE DOMANDE PIU’ 
                FREQUENTI RELATIVE ALL’USO DEL PORTALE
            </div>
        </div>
        <div class="help">
            <div class="help_title" @click="help_show01" v-bind:class="{active: isActive01}">
                <img src="@/assets/img/plus.png"  v-if="isActive01">
                <img src="@/assets/img/minus.png"  v-if="!isActive01">
                <p> COME POSSO ACCEDERE AI CORSI? </p>
            </div>
            <div class="help_body" v-if="!isActive01">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
            </div>
        </div>
        <div class="help">
            <div class="help_title" @click="help_show02" v-bind:class="{active: isActive02}">
                <img src="@/assets/img/plus.png"  v-if="isActive02">
                <img src="@/assets/img/minus.png"  v-if="!isActive02">
                <p> COME POSSO ACCEDERE AI CORSI? </p>
            </div>
            <div class="help_body" v-if="!isActive02">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
            </div>
        </div>
        <div class="help">
            <div class="help_title" @click="help_show03" v-bind:class="{active: isActive03}">
                <img src="@/assets/img/plus.png"  v-if="isActive03">
                <img src="@/assets/img/minus.png"  v-if="!isActive03">
                <p> COME POSSO CREARE UNA LEZIONE? </p>
            </div>
            <div class="help_body" v-if="!isActive03">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
            </div>
        </div>
        <div class="help" style="margin-bottom: 50px;">
            <div class="help_title" @click="help_show04" v-bind:class="{active: isActive04}">
                <img src="@/assets/img/plus.png"  v-if="isActive04">
                <img src="@/assets/img/minus.png"  v-if="!isActive04">
                <p> LE FREQUENZE ALLE LEZIONI SARANNO VALIDE? </p>
            </div>
            <div class="help_body" v-if="!isActive04">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isActive01: true,
            isActive02: false,
            isActive03: true,
            isActive04: true
        };
    },
    methods: {
        help_show01: function(){
            this.isActive01 = !this.isActive01;
        },
        help_show02: function(){
            this.isActive02 = !this.isActive02;
        },
        help_show03: function(){
            this.isActive03 = !this.isActive03;
        },
        help_show04: function(){
            this.isActive04 = !this.isActive04
        }
    },
};
</script>
<style>
</style>
