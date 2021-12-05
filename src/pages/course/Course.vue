<template>
  <div>
    <div class="text-center sticky_header">
      <p class="page_title"> CORSI </p>
    </div>

    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> CORSI IN SVOLGIMENTO </p>
        <p class="subtitle"> PER ACCEDERE ALLE LEZIONI CLICCARE SUL CORSO </p>
      </div>
      <div class="course-responsive">
        <table class="custom_course_user_table">
          <thead>
            <tr>
              <th v-for="col in course_column01" v-on:click="sortTable01(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data01" :key="course_item.name">
              <td v-for="col in course_column01" v-on:click="coursePath">
                {{course_item[col]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> CORSI COMPLETATI </p>
        <p class="subtitle"> PER ACCEDERE ALLE LEZIONI CLICCARE SUL CORSO </p>
      </div>
      <div class="course-responsive">
        <table class="custom_course_user_table">
          <thead>
            <tr>
              <th v-for="col in course_column02" v-on:click="sortTable02(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data02">
              <td v-for="col in course_column02" v-on:click="coursePath">
                {{course_item[col]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="manage_course">
      <button> GESTISCI CORSI</button>
    </div>
  </div>
</template>
<style lang="scss">
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
      current: null,
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      course_data01: [
        { name: "Italiano", date: '05/03/2020', schedule: '' , progress: '5 pre do 5' , documents: '' },
        { name: "Storia", date: '02/04/2020', schedule: '' , progress: '2 pre do 2' , documents: ''},
        { name: "Filosofia", date: '05/03/2020', schedule: '' , progress: '8 pre do 9', documents: ''},
        { name: "Scienze", date: '03/03/2020', schedule: '' , progress: '3 pre do 5' , documents: ''},
        { name: "Matematica", date: '01/03/2020', schedule: '' , progress: '0 pre do 1' , documents: ''},
        { name: "Fisica", date: '07/03/2020', schedule: '' , progress: '5 pre do 8' , documents: ''}
      ],
      course_data02: [
        { name: "Italiano", date: '05/03/2020', status: 'Promosso' , documents: '' },
        { name: "Storia", date: '02/04/2020', status: 'Da saldare' , documents: ''},
        { name: "Filosofia", date: '05/03/2020', status: 'Non superato' , documents: ''},
        { name: "Scienze", date: '03/03/2020', status: '' , documents: ''},
        { name: "Matematica", date: '01/03/2020', status: 'EMOJI' , documents: ''},
        { name: "Fisica", date: '07/03/2020', status: '' , documents: ''},
        { name: "Fisica", date: '07/03/2020', status: '' , documents: ''},
        { name: "Fisica", date: '07/03/2020', status: '' , documents: ''},
        { name: "Fisica", date: '07/03/2020', status: '' , documents: ''}
      ]
    }
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
    },
    "sortTable02": function sortTable02(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;
      this.course_data02.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    },
    coursePath: function(name) {
      this.current = name;
      if(this.current.target.innerText == "Italiano"){
        this.$router.push("/lesson");
      }
    }
  },
  computed: {
    "course_column01": function course_column01() {
      if (this.course_data01.length == 0) {
        return [];
      }
      return Object.keys(this.course_data01[0])
    },
    "course_column02": function course_column02() {
      if (this.course_data02.length == 0) {
        return [];
      }
      return Object.keys(this.course_data02[0]);
    }
  }
};
</script>