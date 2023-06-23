<template>
    <div class="favfilm-container">
        <h1>Peliculas Favoritas</h1>
        <MoviesFav/>
    </div>
</template>
<style scoped src='@/assets/styles/favFilm.css'></style>
<script>
import MoviesFav from '../components/MoviesFav.vue'
export default {
  layout: 'homeLayout',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MoviesCarrousel: MoviesFav
  }
}
</script>
