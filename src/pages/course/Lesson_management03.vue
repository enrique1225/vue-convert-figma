<template>
    <div class="lesson">
        <div class="text-center sticky_header">
            <p class="page_title"> GESTIONE LEZIONI </p>
        </div>

        <div class="course_table" style="margin-top: 200px;">
            <div class="course_table_header">
                <p class="title"> <span style="margin-right:50px"> 3/10 </span> ARGOMENTO LEZIONE </p>
            </div>
            <div class="course_admin_create" style="padding: 15px;">
                <form action="" method="post">
                    <textarea class="lesson_textarea" cols="100%" rows="3" placeholder="Scrivi...."></textarea>
                </form>
            </div>
            <div class="message_btns">
                <button class="print_message_btn"> INDIETRO </button>
                <router-link to="/lesson_management04">
                    <button class="download_message_btn"> AVANTI </button>
                </router-link>
            </div>
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
                { name: "Informatica intro", edit: 'edit' , delete: 'delete' },
                { name: "Informatica 1", edit: 'edit' , delete: 'delete'},
                { name: "Informatica 2", edit: 'edit' , delete: 'delete'},
                { name: "Excel 1", edit: 'edit' , delete: 'delete'},
                { name: "Word 1", edit: 'edit' , delete: 'delete'},
                { name: "Word 2", edit: 'edit' , delete: 'delete'},
                { name: "Internet", edit: 'edit' , delete: 'delete'}
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