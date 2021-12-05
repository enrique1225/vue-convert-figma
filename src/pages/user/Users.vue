<template>
  <div class="register">
    <div class="text-center sticky_header">
      <p class="page_title"> UTENTI </p>
    </div>
    <div class="course_table02">
      <p class="computer_text02">Ciao Admin! </p>
      <p class="computer_text02"> In questa sezione trovi tutti gli utenti registrati al sito. </p>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <router-link to="/user/id">
          <p class="title"> DOCENTI </p>
        </router-link>
        <p class="subtitle"> PER VISUALIZZARE O MODIFICARE I DATI CLICCARE SUL NOME DEL DOCENTE </p>
      </div>
      <div class="course-responsive">
        <table class="custom_user_table">
          <thead>
            <tr>
              <th v-for="col in course_column01" v-on:click="sortTable01(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data01">
              <td v-for="col in course_column01">
                {{course_item[col]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-right" style="padding:10px">
        <button type="submit" class="save_btn" style="margin-top: 20px"> SALVA </button>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <router-link to="/user/id">
          <p class="title"> ALUNNI </p>
        </router-link>        
        <p class="subtitle"> PER VISUALIZZARE O MODIFICARE I DATI CLICCARE SUL NOME ALUNNO </p>
      </div>
      <div class="course-responsive">
        <table class="custom_user_table">
          <thead>
            <tr>
              <th v-for="col in course_column02" v-on:click="sortTable02(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data02">
              <td v-for="col in course_column02">
                {{course_item[col]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-right" style="padding:10px">
        <button type="submit" class="save_btn" style="margin-top: 20px"> SALVA </button>
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
        { surname: "Rossi", name: "Alessandro", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Mattia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Luca", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Matteo", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Alessandro", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''}
      ],
      course_data02: [
        { surname: "Rossi", name: "Alessandro", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Mattia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Luca", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Matteo", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Verdi", name: "Alessandro", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''},
        { surname: "Rossi", name: "Gaia", code: 'GDHJKD56G45H872S' , disable: '', remove: ''}
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
      return Object.keys(this.course_data02[0])
    }
  }
};
</script>