<template>
    <div>
        <div class="lesson">
            <div class="text-center sticky_header">
                <p class="page_title"> GESTIONE LEZIONI </p>
            </div>
            <div class="row lesson_step">
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> TIPO DI LEZIONE </p>
                    </div>
                    <div class="lesson_step_checkbox grey_background">
                        <input type="checkbox" name="sincrona">
                        <p> Sincrona </p>
                    </div>
                    <div class="lesson_step_checkbox white_background">
                        <input type="checkbox" name="asincrona">
                        <p> Asincrona </p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> COMPITI / ANNOTAZIONI </p>
                    </div>
                    <div class="lesson_step_content">
                        <input type="text" placeholder="Scrivi" name="compiti">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> DATA - lezione sincrona </p>
                    </div>
                    <div class="lesson_step_content row">
                        <div class="col-md-4">
                            <select name="sincrona">
                                <option> Giorno </option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select name="sincrona">
                                <option> Mese </option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select name="sincrona">
                                <option> Anno </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> ANNOTAZIONI PRIVATE </p>
                    </div>
                    <div class="lesson_step_content">
                        <input type="text" placeholder="Scrivi" name="annotazioni">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> DATA - lezione sincrona </p>
                    </div>
                    <div class="lesson_step_content row">
                        <div class="col-md-4 col-sm-12">
                            <select name="ora">
                                <option> Ora </option>
                            </select>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <select name="ora">
                                <option> Minuti </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> ARGOMENTO DELLA LEZIONE </p>
                    </div>
                    <div class="lesson_step_content">
                        <input type="text" placeholder="Scrivi" name="argomento">
                    </div>
                </div>
            </div>
            <div class="row" style="margin-bottom: 50px!important">
                <div class="col-md-6 col-sm-12 lesson_step_card">
                    <div class="lesson_step_title">
                        <p> CRAICA VIDEO </p>
                    </div>
                    <div class="lesson_step_content">
                        <input type="text" name="video">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 lesson_step_card01">
                    <div class="lesson_step_title01">
                        <p> ALLEGATI </p>
                        <img src="@/assets/img/black_cloud.png">
                    </div>
                    <div class="lesson_step_title02">
                        <p> INVIA PROMEMORIA </p>
                        <img src="@/assets/img/bend_arrow.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>