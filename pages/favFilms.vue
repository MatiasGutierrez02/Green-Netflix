<template>
    <div class="favfilm-container">
        <h1>Peliculas Favoritas</h1>
        <MoviesFav/>
    </div>
</template>
<style>
.favfilm-container{
    margin: 0px 10px 170px;
}
</style>
<script>
  import MoviesFav from '../components/MoviesFav.vue'
  export default {
    layout: 'homeLayout',
    components: {
        MoviesCarrousel: MoviesFav
    }
  }
</script>