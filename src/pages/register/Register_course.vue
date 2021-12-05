<template>
  <div class="register">
    <div class="text-center sticky_header">
      <p class="page_title"> REGISTRO </p>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> REGISTRO DEI CORSI </p>
        <p class="subtitle"> PER VERIFICARE LE PRESENZE AI CORSI CLICCARE IL NOME DEL CORSO </p>
      </div>
      <div class="register-responsive">
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
              <td v-for="col in course_column01" v-on:click="coursePath">
                {{course_item[col]}}
              </td>
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
        { name: "Italiano", code: 'AX12' , funding: '' },
        { name: "Storia", code: 'DF54' , funding: ''},
        { name: "Filosofia", code: 'GHHJ5' , funding: ''},
        { name: "Scienze", code: 'GHB2' , funding: ''},
        { name: "Matematica", code: 'SDFA5' , funding: ''},
        { name: "Inglese" , code: 'GDRT5A' , funding: ''},
        { name: "Italiano", code: 'AX12' , funding: '' },
        { name: "Storia", code: 'DF54' , funding: ''},
        { name: "Filosofia", code: 'GHHJ5' , funding: ''},
        { name: "Scienze", code: 'GHB2' , funding: ''},
        { name: "Matematica", code: 'SDFA5' , funding: ''},
        { name: "Inglese" , code: 'GDRT5A' , funding: ''}
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
    },
    coursePath: function(name) {
      this.current = name;
      if(this.current.target.innerText == "Italiano"){
        this.$router.push("/register_lesson");
      }
    }
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
<style>
</style>
