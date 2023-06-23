<template>
  <div class="grid-container">
    <div v-for="movie in moviesFavList" :key="movie.id" class="grid-item">
      <nuxt-link :to="'/movies/' + movie.imdbID + '?id=' + movie.id">
         <img :src="movie.Poster" alt="Imagen de la película">
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped src='@/assets/styles/moviesFav.css'></style>

<script>
import services from '../plugins/services/moviesService'
export default {
    data() {
        return {
            moviesFavList: []
        }
    },
    async created() {
        const moviesList = await services.getFavListMovies()
        this.moviesFavList = moviesList
    }
}
</script>