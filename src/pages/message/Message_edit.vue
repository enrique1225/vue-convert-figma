<template>
  <div>
    <div class="text-center sticky_header">
      <p class="page_title"> MESSAGGI </p>
    </div>
    <div class="message_box" style="margin-bottom: 50px;">
      <div class="message_close text-right">
        <img src="@/assets/img/close.png">
      </div>
      <div class="course_table" style="margin-top: 20px;">        
        <div class="course_edit_title">
          <p> SELEZIONARE DESTINATARI TRA GLI STUDENTI DEI CORSI </p>
        </div>
        <div class="course-responsive user_edit_table">
          <table>
            <thead>
              <tr>
                <th v-for="col in course_column01">
                  {{col}}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="course_item in course_data01" :key="course_item.name">
                <td v-for="col in course_column01">
                  {{course_item[col]}} <input type="checkbox" class="message_checkbox">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="course_table">
        <div class="course_edit_title">
          <p> OGGETTO: </p>
        </div>
        <input type="text" placeholder="Scrivi..." class="course_edit_input">
      </div>
      <div class="course_table">
        <form action="" method="post" class="comment" style="box-shadow: 0;">
          <div class="course_edit_title">
            <p> MESSAGGIO: </p>
          </div>
          <textarea rows="12" cols="100%" placeholder="Scrivi..."> </textarea>
          <div class="text-right" style="padding: 20px 10px;margin-top: -10px;background: white;">
              <button type="submit"> INVIA </button>
          </div>
        </form>
      </div>      
    </div>
    <img src="@/assets/img/white_wave01.png" class="message_white_wave">
  </div>
</template>

<style lang="scss">
.container{
  text-align: center;
  background: #34B5CF;
  padding: 10px;
  margin: 70px 15px 0 0!important;
}

.course_table{
    width: 100%;
    margin: 70px 15px 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .course_table_header{
        text-align: center;
        padding: 15px 15px;
        border-bottom: 0;
        background-color: #34B5CF;

        .title{
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            margin: 0 0 10px 0;
        }

        .subtitle{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
            margin-bottom: 0px;
        }
    }

    table {
        width: 100%;
        border: 1px solid #34B5CF;
        border-bottom: none;

        th{
            text-transform: uppercase;
            text-align: left;
            background: #E7F0F3;
            cursor: pointer;
            padding: 8px 15px;
            min-width: 30px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color: #1C7690;
            border-right: 1px solid #34B5CF;
        }

        td {
            padding: 8px 15px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #1C7690;
            border-right: 1px solid #34B5CF;
        }

        td:last-child {
            border-right: none;
        }

        tr:nth-child(2n) td {
            background: #E7F0F3;
        }
    }
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
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      course_data01: [
        { name: "Italiano"},
        { name: "Storia"},
        { name: "Filosofia"},
        { name: "Scienze"},
        { name: "Matematica"},
        { name: "Fisica"},
        { name: "Inglese"}
      ]
    };
  },
  methods: {

  },
  computed: {
    "course_column01": function course_column01() {
      if (this.course_data01.length == 0) {
        return [];
      }
      return Object.keys(this.course_data01[0])
    }
  }
};
</script>