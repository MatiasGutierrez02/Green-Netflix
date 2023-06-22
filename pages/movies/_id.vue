<template>
    <div>
        <div class="header-movie-cont">
            <h1>{{ this.movieData.Title }}</h1>
            <img :src="this.movieData.Poster" alt="Movie Poster">
        </div>
        
        
        <div class="movie-data-container">
            <div class="column movie-info">
                <p>{{ this.movieData.Released + " | " + this.movieData.Runtime }}</p>
                <p>{{ this.movieData.Rated }}</p>
                <p>{{ "Metascore: " + this.movieData.Metascore }}</p>
                <p>{{ "Nominaciones: " + this.movieData.Awards }}</p>
            </div>
            <div class="column">
                <p>Elenco: <span>{{ this.movieData.Actors }}</span></p>
                <p>Directores: <span>{{ this.movieData.Director }}</span></p>
                <p>Género: <span>{{ this.movieData.Genre }}</span></p>
            </div>
        </div>
        <p class="movie-plot">{{ this.movieData.Plot }}</p>

        <button @click="addMovieToFavList" class="button-fav">Añadir a favoritos</button>
        <button @click="removeMovieToFavList" class="button-fav">Eliminar de favoritos</button>
    </div>
</template>

<style scoped src='@/assets/styles/moviePage.css'></style>
<script>
import services from '../../plugins/services/moviesService'
export default {
    layout: 'homeLayout',
    data() {
        return {
            movieData: {}
        }
    },
    async created() {
        const imdbID = this.$route.params.id
        const res = await services.searchMovieByImdbID(imdbID)
        this.movieData = res
    },
    methods: {
        async addMovieToFavList(){            
            const isFaved = await this.isMovieFaved()
            if(isFaved){
                alert("¡La pelicula ya esta seleccionada como favorita!")

            }else{
                const res = await services.addMovieToFavList(this.movieData)
                this.$router.push("/favFilms")
            }
            
        },
        async removeMovieToFavList(){
            const isFaved = await this.isMovieFaved()
            if(isFaved){
                const id = this.$route.query.id
                const res = await services.removeMovieToFavList(id)
                this.$router.push("/favFilms")

            }else{
                alert("¡La pelicula no esta seleccionada como favorita!")
            }
            
        },
        async isMovieFaved(){
            const isMovieFaved = await services.isMovieFaved(this.movieData.imdbID);
            return isMovieFaved

        }
    }
    
}
</script>