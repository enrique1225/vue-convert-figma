<template>
  <div class="register">
    <div class="text-center sticky_header">
      <p class="page_title"> REGISTRO ALUNNI </p>
    </div>
    <div class="register_card_row row" style="margin-top: 70px">
      <div class="col-sm-6 col-12 register_card" style="padding-top: 50px!important;">
        <p> ALUNNO: <br> <strong> MARIO ROSSI </strong> </p>
        <p> CODICE FISCALE: <br> <strong> DJKGBN56T37G285K </strong> </p>          
      </div>
      <img src="@/assets/img/Path 87.png" class="mobile_wave">
      <div class="col-sm-6 col-12 register_card" style="padding-top: 70px!important;">
        <p> Scarica <br> 
          tutte le prezenze
        </p>
        <img src="@/assets/img/cloud.png">
      </div>
      <img src="@/assets/img/Path 87.png" class="dashboard_white_wave">
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> ALUNNO: MARIO ROSSI </p>
      </div>
      <div class="course-responsive" style="margin-bottom: 50px;">
        <table>
          <thead>
            <tr>
              <th v-for="col in course_column01" v-on:click="sortTable01(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data01">
              <td v-for="col in course_column01">{{course_item[col]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
</style>
<script>
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      course_data01: [
        { course: 'Informatica', lesson: 'Internet', status: 'Presente'},
        { course: 'Informatica', lesson: 'Excel 1', status: 'Assente'},
        { course: 'Informatica', lesson: 'Word 1', status: 'Presente'},
        { course: 'Informatica', lesson: 'Windows', status: 'Presente'},
        { course: 'Informatica', lesson: 'Informatica 1', status: 'Assente'},
        { course: 'Inglese', lesson: 'Inglese 1', status: 'Presente'},
        { course: 'Inglese', lesson: 'Aggettivi', status: 'Presente'},
      ],
    };
  },
  methods: {
    "sortTable01": function sortTable01(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }
      var ascending = this.ascending;
      this.course_data01.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    }
  },
  computed: {
    "course_column01": function course_column01() {
      if (this.course_data01.length == 0) {
        return [];
      }
      return Object.keys(this.course_data01[0])
    },
  }
};
</script>
<style>
</style>
