<template>
    <div class="home-page-container">
        <Header/>
        <Nuxt/>
        <Footer/>
    </div>

</template>

<style>
.home-page-container{
    background-color: #141414;
    color: #999;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    padding-top: 85px;
    min-height: 100vh;
}
</style>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: {
    // eslint-disable-next-line object-shorthand, vue/no-reserved-component-names
    Footer: Footer,
    // eslint-disable-next-line object-shorthand, vue/no-reserved-component-names
    Header: Header
  }

}
</script>
