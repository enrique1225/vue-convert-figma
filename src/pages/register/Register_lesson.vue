<template>
  <div class="register">
    <div class="text-center sticky_header">
      <p class="page_title"> REGISTRO LEZIONI </p>
      <p class="page_subtitle"> CORSO INFORMATICA </p>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> LEZIONI DI INFORMATICA </p>
        <p class="subtitle"> PER VERIFICARE LE PRESENZE ALLE SINGOLE LEZIONI, CLICCARE IL NOME DELLA LEZIONE </p>
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
              <td v-for="col in course_column01" v-on:click="lessonPath">
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
        { name: "Informatica 1", professor: 'Mario Rossi' , date: '05/05/2020'},
        { name: "Excel", professor: 'Gaia Dallera' , date: '05/05/2020'},
        { name: "Word", professor: 'Luca Beatrice' , date: '05/05/2020'},
        { name: "Office", professor: 'Salvatore Dagostino' , date: '05/05/2020'},
        { name: "Internet", professor: 'Mario Rossi' , date: '05/05/2020'},
        { name: "Windows" , professor: 'Gaia Dallera' , date: '05/05/2020'},
        { name: "Adobe", professor: 'Luca Beatrice' , date: '05/05/2020'},
        { name: "Informatica 1", professor: 'Mario Rossi' , date: '05/05/2020'},
        { name: "Excel", professor: 'Gaia Dallera' , date: '05/05/2020'},
        { name: "Word", professor: 'Luca Beatrice' , date: '05/05/2020'},
        { name: "Office", professor: 'Salvatore Dagostino' , date: '05/05/2020'},
        { name: "Internet", professor: 'Mario Rossi' , date: '05/05/2020'},
        { name: "Windows" , professor: 'Gaia Dallera' , date: '05/05/2020'},
        { name: "Adobe", professor: 'Luca Beatrice' , date: '05/05/2020'}
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
    lessonPath: function(name) {
      this.current = name;
      if(this.current.target.innerText == "Informatica 1"){
        this.$router.push("/register_each_lesson");
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
