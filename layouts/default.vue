<template>
    <div class="default-container">
        <Nuxt/>
        <Footer/>
    </div>
        
</template>

<style>
    body{
        margin: 0;
    }
    .default-container {
        background-color: #000000;
        margin: 0;
        color: #FFFFFF;
        font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    }
</style>

<script>
import Footer from '../components/Footer.vue'
export default {
    components: {
        Footer
    }
    
}
</script>