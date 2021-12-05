<template>
  <div>
    <div class="text-center sticky_header">
        <p class="page_title"> INFORMATICA </p>
    </div>
    
    <div class="course_table02">
      <p class="computer_text01"> Il percorso da te scelto Addetto amminitrativo cod. 10863/2019DL della durata di 600 ore, 
      prevede il conseguimento della qualifica di Addetto amministrativo riconosciuta in base all'40 L.R. 
      18/85 è autorizzato in base al decreto 10863/2019. </p> <br>
      <p class="computer_text02"> Ciao Gaia! </p>
      <p class="computer_text02"> Benvenuta nel <span class="font_bold"> corso di </span> Informatica <br>
        L’ultima lezione che hai seguito è : <span class="font_bold"> Informatica intro </span></p>
      <p class="computer_text02"> <span class="font_bold"> La tua prossima lezione sincrona sarà il </span> 05/05/2020 orario <span class="font_bold"> 12 / 13 </span></p>
    </div>
    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> TUTTE LE TUE LEZIONI DEL CORSO: INFORMATICA  </p>
        <p class="subtitle"> PER ACCEDE ALLA LEZIONE CLICCARE SUL TITOLO </p>
      </div>
      <div class="course-responsive">
        <table class="custom_lesson_table">
          <thead>
            <tr>
              <th v-for="col in course_column01" v-on:click="sortTable01(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data01">
              <td v-for="col in course_column01" v-on:click="computer_path">
                {{course_item[col]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container">
      <p class="progress_title"> AVANZAMENTO DEL CORSO </p>
      <p class="progress_state"> HAI SVOLTO 3 ORE SU 5 </p>
      <div class="loading-bar">
        <div class="percentage" :style="{'width' : percentage + '%'}"></div>
      </div>
    </div>

    <div class="course_table" style="margin-bottom: 30px;">
      <div class="course_table_header">
        <p class="title"> I MIEI TEST </p>
        <p class="subtitle"> PER ACCEDE ALLA LEZIONE CLICCARE SUL TITOLO </p>
      </div>
      <div class="course-responsive">
        <table class="custom_lesson_table02">
          <thead>
            <tr>
              <th v-for="col in course_column02" v-on:click="sortTable02(col)">
                {{col}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course_item in course_data02">
              <td v-for="col in course_column02" v-on:click="computer_path">
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
  .container{
    text-align: center;
    background: #34B5CF;
    padding: 10px;
    margin: 70px 15px 0 0!important;
  }
</style>
<script>
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable,
  },
  created(){
    var intval = setInterval(()=>{
      if(this.percentage < 60)
        this.percentage += 0.5;
      else 
        clearInterval(intval);
    }, 10);
  },
  
  data() {
    return {
      percentage: 0,
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      course_data01: [
        { icon:"", name: "Informatica intro", information: 'Argomento: Informatica nozioni base'},
        { icon:"", name: "Informatica intro", information: 'Docente: Mario Rossi'},
        { icon:"", name: "Informatica intro", information: 'Tipo di lezione: In diretta'},
        { icon:"", name: "Informatica intro", information: 'Giorno 05/05/2020 h 12/13'},
        { icon:"", name: "Word1", information: 'Argomento: Informatica nozioni base'},
        { icon:"", name: "Word1", information: 'Docente: Mario Rossi'},
        { icon:"", name: "Word1", information: 'Tipo di lezione: In diretta'},
        { icon:"", name: "Word1", information: 'Giorno 05/05/2020 h 12/13'},
        { icon:"", name: "Informatica intro", information: 'Argomento: Informatica nozioni base'},
        { icon:"", name: "Informatica intro", information: 'Docente: Mario Rossi'},
        { icon:"", name: "Informatica intro", information: 'Tipo di lezione: In diretta'},
        { icon:"", name: "Informatica intro", information: 'Giorno 05/05/2020 h 12/13'}
      ],
      course_data02: [
        { name: "Informatica intro", meteria: 'Informatica', state: '', vote:'9', download: ''},
        { name: "Informatica 1", meteria: 'Informatica', state: '', vote:'', download: ''},
        { name: "Informatica 2", meteria: 'Informatica', state: '', vote:'5', download: ''},
        { name: "Excel 1", meteria: 'Informatica', state: '', vote:'', download: ''},
        { name: "Word 1", meteria: 'Informatica', state: '', vote:'7', download: ''},
        { name: "Informatica 1", meteria: 'Informatica', state: '', vote:'6+', download: ''},
        { name: "Informatica 1", meteria: 'Informatica', state: '', vote:'5-', download: ''},
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
    },
    computer_path: function(name) {
      this.current = name;
      if(this.current.target.innerText == "Informatica intro"){
        this.$router.push("/lesson/id");
      }
    }
  },
  computed: {
    percent(){
      return this.percentage.toFixed();
    },
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
<style>
</style>
