//... login page
import Login from "@/pages/Login.vue";
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";

// ========= Admin pages ==========
//... dashboard page
import Dashboard from "@/pages/Dashboard.vue";

//... course pages
import Course from "@/pages/course/Course.vue";
import Lesson from '@/pages/course/Lesson.vue';
import Virtual_classroom from '@/pages/course/Virtual_classroom.vue';
import Course_admin from "@/pages/course/Course_admin.vue";
import Course_admin1 from "@/pages/course/Course_admin1.vue";
import Lesson_management01 from "@/pages/course/Lesson_management01.vue";
import Lesson_management02 from "@/pages/course/Lesson_management02.vue";
import Lesson_management03 from "@/pages/course/Lesson_management03.vue";
import Lesson_management04 from "@/pages/course/Lesson_management04.vue";
import Lesson_management05 from "@/pages/course/Lesson_management05.vue";
import Mobile_admin from "@/pages/course/Mobile_admin.vue";

//... users pages
import Users from "@/pages/user/Users.vue";
import User_edit from "@/pages/user/User_edit.vue";

//... message pages
import Message from "@/pages/message/Message.vue";
import Message_admin from "@/pages/message/Message_admin.vue";
import Message_edit from '@/pages/message/Message_edit.vue';
import Message_schoolyear from '@/pages/message/Message_schoolyear.vue';

//.... register pages
import Register_course from '@/pages/register/Register_course.vue';
import Register_lesson from '@/pages/register/Register_lesson.vue';
import Register_each_lesson from '@/pages/register/Register_each_lesson.vue';
import Register_student from '@/pages/register/Register_student.vue';

//... help pages
import Help from "@/pages/Help.vue";

const routes = [{
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            //... dashboard components
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },

            //... course components
            {
                path: "course",
                name: "course",
                component: Course
            },
            {
                path: "lesson",
                name: "lesson",
                component: Lesson
            },
            {
                path: "lesson/id",
                name: "virtual_classroom",
                component: Virtual_classroom
            },
            {
                path: "course_admin",
                name: "course_admin",
                component: Course_admin
            },
            {
                path: "course_admin1",
                name: "course_admin1",
                component: Course_admin1
            },
            {
                path: "lesson_management01",
                name: "lesson_management01",
                component: Lesson_management01
            },
            {
                path: "lesson_management02",
                name: "lesson_management02",
                component: Lesson_management02
            },
            {
                path: "lesson_management03",
                name: "lesson_management03",
                component: Lesson_management03
            },
            {
                path: "lesson_management04",
                name: "lesson_management04",
                component: Lesson_management04
            },
            {
                path: "lesson_management05",
                name: "lesson_management05",
                component: Lesson_management05
            },
            {
                path: "mobile_admin",
                name: "mobile_admin",
                component: Mobile_admin
            },


            //... users components
            {
                path: "users",
                name: "users",
                component: Users
            },
            {
                path: "user/id",
                name: "user_edit",
                component: User_edit
            },

            //... message components
            {
                path: "message",
                name: "message",
                component: Message
            },
            {
                path: "message_admin",
                name: "message_admin",
                component: Message_admin
            },
            {
                path: "message/id",
                name: "message_edit",
                component: Message_edit
            },
            {
                path: "message/schoolyear",
                name: "message_schoolyear",
                component: Message_schoolyear
            },

            //... register components
            {
                path: "register_course",
                name: "register_course",
                component: Register_course
            },
            {
                path: "register_lesson",
                name: "register_lesson",
                component: Register_lesson
            },
            {
                path: "register_each_lesson",
                name: "register_each_lesson",
                component: Register_each_lesson
            },
            {
                path: "register_student",
                name: "register_student",
                component: Register_student
            },

            //... help components
            {
                path: "help",
                name: "help",
                component: Help
            },
        ]
    },
    {
        path: "/",
        component: Login,
        children: [{
            path: "/login",
            name: "login",
            component: Login
        }]
    },

    { path: "*", component: NotFound }
];

export default routes;