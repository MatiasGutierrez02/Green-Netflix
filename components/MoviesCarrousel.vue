<template>
  <div>
    <h1 class="header-carrousel">{{ title }}</h1>
    <div class="carrousel-container">
      <ul class="list-container" ref="carrousel">
        <li v-for="item in moviesList" :key="item.imdbID">
          <nuxt-link :to="'/movies/' + item.imdbID" class="link-to-movie">
            <img :src="item.Poster" alt="Poster" class="movie-image">
          </nuxt-link>
        </li>
      </ul>
      <button class="prev-button" @click="scrollPrev">
        <img src="images/arrow-left.svg" alt="Fechla desplazamiento izquierda">
      </button>
      <button class="next-button" @click="scrollNext">
        <img src="images/arrow-right.svg" alt="Fechla desplazamiento derecha">
      </button>
    </div>
  </div>
</template>


<style scoped src='@/assets/styles/moviesCarrousel.css'></style>

<script>
    import services from '../plugins/services/moviesService'
    export default {
        name: 'MoviesCarrousel',
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
               moviesList : []
            }
        },
        async created() {
            const response = await services.searchMovieList(this.title)
            this.moviesList = response
        },
        methods: {
            scrollPrev() {
                const carrousel = this.$refs.carrousel;
                carrousel.scrollLeft -= carrousel.offsetWidth;
            },
            scrollNext() {
                const carrousel = this.$refs.carrousel;
                carrousel.scrollLeft += carrousel.offsetWidth;
            }
        }
    }
</script>

