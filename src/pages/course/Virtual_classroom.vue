<template>
  <div class="virtual_classroom">
    <div class="text-center sticky_header">
        <p class="page_title"> AULA VIRTUALE </p>
        <p class="page_subtitle"> EXCEL 1 </p>
    </div>

    <div class="video-responsive">
        <iframe width="420" height="315" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="virtual_carousel">
      <div class="course_table_header">
        <p class="title"> ASSEGNA TITOLO A UN NUOVO CORSO </p>
      </div>
      <carousel :per-page="6" 
        :centerMode="true" 
        :adjustableHeight="true" 
        :paginationEnabled="false" 
        :loop="true" 
        :navigationEnabled="true" 
        :mouseDrag="true"
        :navigationNextLabel="'>'"
        :navigationPrevLabel="'<'">
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
         <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
         <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
         <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
        <slide>
          <p> GF </p>
          <p> 85 </p>
        </slide>
      </carousel>
    </div>

    <div class="course_table">
      <div class="course_table_header">
        <p class="title"> COMMENTI AL VIDEO </p>
      </div>
      <div class="course-responsive">
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

    <form action="" method="post" class="comment">
        <div class="comment_title text-center">
            <p> SCRIVI UN COMMENTO PUBBLICO </p> 
        </div>
        <textarea rows="3" cols="100%" placeholder="Scrivi..."> </textarea>
        <div class="text-right" style="padding:10px">
            <button type="submit"> INVIA </button>
        </div>
    </form>

    <form action="" method="post" class="comment">
        <div class="comment_title text-center">
            <p> SCRIVI UN COMMENTO PRIVATO </p> 
        </div>
        <textarea rows="3" cols="100%" placeholder="Scrivi..."> </textarea>
        <div class="text-right" style="padding:10px">
            <button type="submit"> INVIA </button>
        </div>
    </form>
  </div>
</template>
<style lang="scss">
    .video-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
        margin: 0 15px;
    }
    .video-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }
    textarea{
        width: 100%;
        border: none;
        padding: 10px;
    }
    textarea:focus{
        outline: none;
    }
</style>
<script>
import { PaperTable } from "@/components";
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'
import { Carousel, Slide } from 'vue-carousel';


export default {
  components: {
    PaperTable,
    Carousel,
    Slide
  },
  data() {
    return {
      percentage: 0,
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      course_data01: [
        { type: "DOCENTE", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        { type: "STUDENTE", comment: 'Duis aute irure dolor in reprehenderit in voluptate velit.'},
        { type: "STUDENTE", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        { type: "STUDENTE", comment: 'Duis aute irure dolor in reprehenderit in voluptate velit.'},
        { type: "DOCENTE", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        { type: "STUDENTE", comment: 'Duis aute irure dolor in reprehenderit in voluptate velit.'},
      ],
      slides: [
        {
          id: 'slide-1',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-2',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-3',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-4',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-5',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-6',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-7',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-8',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-9',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-10',
          title: 'GF',
          content: '85'
        },
        {
          id: 'slide-11',
          title: 'GF',
          content: '85'
        }
      ]
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
        }
    }
  
};
</script>
<style>
</style>
