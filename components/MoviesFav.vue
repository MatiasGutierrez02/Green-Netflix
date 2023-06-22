<template>
  <div class="grid-container">
    <div v-for="movie in moviesFavList" :key="movie.id" class="grid-item">
      <nuxt-link :to="'/movies/' + movie.imdbID + '?id=' + movie.id">
         <img :src="movie.Poster" alt="Imagen de la película">
      </nuxt-link>
    </div>
  </div>
</template>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item img{
    width: 124px;
    max-height: 160px;
}
</style>

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