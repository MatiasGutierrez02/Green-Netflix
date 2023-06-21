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
<style>
.main-page-container{
    padding: 0 0 25px 10px;
}
</style>

<script>
  import MoviesCarrousel from '../components/MoviesCarrousel.vue'
  export default {
    layout: 'homeLayout',
    components: {
        MoviesCarrousel: MoviesCarrousel
    }
  }
</script>