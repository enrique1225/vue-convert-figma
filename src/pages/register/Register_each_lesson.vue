<template>
  <div class="register">
    <div class="text-center sticky_header">
      <p class="page_title"> REGISTRO LEZIONI </p>
      <p class="page_subtitle"> CORSO INFORMATICA: EXCEL1 </p>
    </div>
    <div class="register_card_row row">
      <div class="col-sm-6 col-12 register_card">
        <p> ARGOMENTO DELLA LEZIONE: </p>
        <p style="margin-top: 80px;"> TIPO DI LEZIONE: <br> <strong> In diretta </strong> </p>
      </div>
      <img src="@/assets/img/Path 87.png" class="mobile_wave">
      <div class="col-sm-6 col-12 register_card">
        <p> Scarica il registro <br> 
          del <strong> CORSO </strong> <br>
          <img src="@/assets/img/cloud.png">
        </p>
        <p> Scarica il registro della <br>
          <strong> LEZIONE </strong> </p>
          <img src="@/assets/img/cloud.png">
        </p>
      </div>
      <img src="@/assets/img/Path 87.png" class="dashboard_white_wave">
    </div>
    <div class="course_table" style="margin:0">
      <div class="course_table_header">
        <router-link to="/register_student" class="title"> DOCENTI </router-link>
      </div>
      <div class="course-responsive">
        <table class="custom_each_lesson_table">
          <thead>
            <tr>
              <th v-for="col in course_column02" v-on:click="sortTable02(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data02">
              <td v-for="col in course_column02">{{course_item[col]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <router-link to="/register_student" class="title"> ALUNNI </router-link>
      </div>
      <div class="course-responsive" style="margin-bottom: 50px;">
        <table class="custom_each_lesson_table02">
          <thead>
            <tr>
              <th v-for="col in course_column03" v-on:click="sortTable03(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data03">
              <td v-for="col in course_column03">{{course_item[col]}}</td>
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
      course_data02: [
        { name: 'Rossi Mario', module: '', status: 'Presente'},
        { name: 'Rossi Mario', module: '', status: 'Presente'},
        { name: 'Rossi Mario', module: '', status: 'Presente'},
        { name: 'Rossi Mario', module: '', status: 'Presente'},
        { name: 'Rossi Mario', module: '', status: 'Presente'}
      ],
      course_data03: [
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
        { name: "Mario Rossi", code: ' GFD45R6T782H' , status: 'Presente'},
        { name: "Luca Bianchi", code: 'GFD45R6T782H' , status: 'Assente'},
      ],
    };
  },
  methods: {
    "sortTable02": function sortTable02(col) {
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
    },
    "sortTable03": function sortTable03(col) {
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
    "course_column02": function course_column02() {
      if (this.course_data02.length == 0) {
        return [];
      }
      return Object.keys(this.course_data02[0])
    },
    "course_column03": function course_column03() {
      if (this.course_data03.length == 0) {
        return [];
      }
      return Object.keys(this.course_data03[0])
    }
  }
};
</script>
<style>
</style>
