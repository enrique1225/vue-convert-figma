<template>
    <div>
        <div class="text-center sticky_header" :class="{ transparent : changeBackground }">
            <p class="page_title"> GESTIONE CORSI </p>
        </div>

        <div class="course_assignment">
            <div class="course_table_header">
                <p class="title"> 1/2 ASSEGNAZIONE DEL CORSO </p>
            </div>
            <div class="body">
                <input type="text" placeholder="TITOLO DEL CORSO APPENA CREATO">
            </div>            
        </div>

        <div class="course_table">
            <div class="course_table_header text-left">
                <p class="title"> DOCENTI DEL CORSO </p>
                <input type="text" placeholder="Cerca docente....">
            </div>
            <div class="course-responsive">
                <table>
                    <thead>
                        <tr>
                            <th v-for="col in edit_course01" v-on:click="sortTable01(col)">
                                {{col}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course_item,i) in course_data01">
                            <td v-for="col in edit_course01">
                                {{course_item[col]}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="text-right" style="padding:20px 10px">
            <router-link to="">
                <button type="button" class="save_btn" @click="saveModal"> SALVA </button>
            </router-link>                
        </div>

        <div class="course_table">
            <div class="course_table_header text-left">
                <p class="title"> ALUNNI DEL CORSO </p>
                <input type="text" placeholder="Cerca alunno....">
            </div>
            <div class="course-responsive">
                <table>
                    <thead>
                        <tr>
                            <th v-for="col in edit_course02" v-on:click="sortTable02(col)">
                                {{col}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course_item,i) in course_data02">
                            <td v-for="col in edit_course02">
                                {{course_item[col]}} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="text-right" style="padding:20px 10px">
            <button type="button" class="save_btn" @click="saveModal"> SALVA </button>
            <modal-window
                :visible="showModal"
                :close-on-escape="true"
                :close-on-outside-click="true"
                @close="showModal = false"
                >
                <h2> CORSO SALVATO! </h2>
                <h3 @click="showModal=false;changeBackground = false;" style="margin-top: 60px;"> CLICCA QUI PER PROSEGUIRE </h3>
            </modal-window>
        </div>
    </div>
</template>
<style lang="scss">
.course_assignment{
    margin-top: 70px;
    .body{
        background: #E7F0F3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 15px;
    }

    input{
        width: 100%;
        padding: 5px 15px;
        border: none;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #1C7690;
    }

    input::placeholder{
        color: #1C7690;
    }
}

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
        margin: 0;
        display: inline-block;
    }

    input{
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #707070;
        float: right;
        border: none;
        padding: 5px 15px;
    }
}

.course_table{
    width: 100%;
    margin: 70px 15px 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
@media screen and (max-width: 576px) {
    .course_table_header{
        input{
            float: none!important;
        }
    }
}
</style>

<script>
import { PaperTable } from "@/components";
import ModalWindow from "@vuesence/modal-window";

export default {
    components: {
        PaperTable,ModalWindow
    },
    data() {
        return {
            changeBackground: false,        
            showModal: false,
            current: null,
            currentPage: 1,
            elementsPerPage: 3,
            ascending: false,
            sortColumn: '',
            course_data01: [
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchii", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
            ],
            course_data02: [
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchii", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Luca Bianchi", code: 'HGGHJK67D43T567A' , course: '' },
                { name: "Mario Rossi", code: 'HGGHJK67D43T567A' , course: '' },
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
        saveCourse: function(){
            this.$fire({
                title: "CORSO SALVATO!",
                timer: 60000
            }).then(r => {
                history.go("/")
            });
        },
        saveModal() {
            this.showModal= true;
            this.changeBackground = true;
        }
    },
    computed: {
        "edit_course01": function edit_course01() {
            if (this.course_data01.length == 0) {
                return [];
            }
            return Object.keys(this.course_data01[0])
        },
        "edit_course02": function edit_course02() {
            if (this.course_data02.length == 0) {
                return [];
            }
            return Object.keys(this.course_data02[0])
        }
    }
};
</script>
