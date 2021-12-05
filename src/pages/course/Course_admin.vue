<template>
    <div>
        <div class="text-center sticky_header">
            <p class="page_title"> GESTIONE CORSI </p>
        </div>

        <p class="computer_text02" style="margin-bottom: 40px;margin-top: 70px"> In questa sezione potrai modificare i corsi </p>
        <div class="course_table" style="margin-top:0">
            <div class="course_table_header">
                <p class="title"> MODIFICA CORSO ESISTENTE </p>
            </div>
            <div class="course-responsive course_edit_table">
                <table class="custom_course_admin_table">
                    <thead>
                        <tr>
                            <th v-for="col in course_column01" v-on:click="sortTable01(col)">
                                {{col}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course_item in course_data01" :key="course_item.name">
                            <td v-for="col in course_column01" v-on:click="editLesson">
                                {{course_item[col]}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <p class="computer_text02" style="margin-bottom: 40px;margin-top: 70px"> Segui la procedura guidata per aggiungere un nuovo corso </p>
        <div class="course_table" style="margin-top:0;margin-bottom: 50px;">            
            <div class="course_table_header">
                <p class="title"> ASSEGNA TITOLO A UN NUOVO CORSO </p>
            </div>
            <div class="course_admin_create">
                <form action="" method="post">
                    <input type="text" placeholder="Scrivi nome del corso">
                     
                </form>   
            </div>
        </div>
        <div class="text-right" style="margin-bottom: 50px;">
            <router-link to="/course_admin1">
                <button type="button" class="save_btn" > AVANTI </button>
            </router-link>                
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
                { name: "Italiano", edit: '' , code: '' },
                { name: "Storia", edit: '' , code: ''},
                { name: "Filosofia", edit: '' , code: ''},
                { name: "Scienze", edit: '' , code: ''},
                { name: "Matematica", edit: '' , code: ''},
                { name: "Fisica", edit: '' , code: ''},
                { name: "Inglese", edit: '' , code: ''}
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
        editLesson: function(name) {
            this.current = name;
            if(this.current.target.innerText == "edit"){
                this.$router.push("/lesson_management01");
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