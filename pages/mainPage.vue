<template>
    <div class="main-page-container">
        <MoviesCarrousel
            title="Star Wars"
        />
        <MoviesCarrousel
            title="Marvel"
        />
        <MoviesCarrousel
            title="Batman"
        />
        <MoviesCarrousel
            title="Harry Potter"
        />
        <MoviesCarrousel
            title="Action"
        />
        <MoviesCarrousel
            title="Horror"
        />
    </div>
</template>
<style scoped src='@/assets/styles/mainPage.css'></style>

<script>
import MoviesCarrousel from '../components/MoviesCarrousel.vue'
export default {
  layout: 'homeLayout',
  components: {
    MoviesCarrousel: MoviesCarrousel
  }
}
</script>
