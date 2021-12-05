<template>
    <div class="container-fluid relative">
    <img :src="desktop_img" class="desktop_img">
    <img :src="mobile_img" class="mobile_img">
        <div class="login">
            <h2> ACCESSO </h2>
            <form action="" method="post">
                <input type="text" name="username" placeholder="Utente">
                <input type="password" name="password" placeholder="Password">
                <button type="button" @click="goToDashboard()"> ACCEDI </button>
                <router-link to="forget_password" class="forget_password">
                    Password dimenticata?
                </router-link>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
                desktop_img: require('../assets/img/desktop-login-header.png'),
                mobile_img: require('../assets/img/ipad-login-header.png')
        }
    },
    methods: {
        goToDashboard: function () {
            location.href='/'
        }
    },
}
</script>