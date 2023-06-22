<template>
    <div class="header-logo-container">
         <nuxt-link to="/mainPage">
            <img src="images/logo.svg" class="mainPage-logo" alt="Logo">
        </nuxt-link>

        <HamburguerMenu/>
    </div>
</template>

<style scoped src='@/assets/styles/header.css'></style>

<script>
import HamburguerMenu from '../components/HamburguerMenu.vue'
export default {
    components: {
        HamburguerMenu
    }
}
</script>