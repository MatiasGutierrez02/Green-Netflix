<template>
    <div>
        <Nuxt/>
        <Footer/>
    </div>
        
</template>

<style>
    body {
        background-color: #000000;
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