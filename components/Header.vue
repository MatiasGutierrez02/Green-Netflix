<template>
    <div class="header-logo-container">
         <nuxt-link to="/mainPage">
            <img src="images/logo.svg" class="mainPage-logo" alt="Logo">
        </nuxt-link>

        <HamburguerMenu/>
    </div>
</template>

<style>
.mainPage-logo {
    width: 25px;
    margin: 10px 0 10px 10px;
}
.header-logo-container{
    display: flex;
    justify-content: space-between;
    background-color: #090909;
    margin-bottom: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
</style>

<script>
import HamburguerMenu from '../components/HamburguerMenu.vue'
export default {
    components: {
        HamburguerMenu
    }
}
</script>