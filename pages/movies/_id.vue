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
    </div>
</template>

<style>
.movie-data-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 65px; 
  margin: 0 20px;
  font-size: 15px;
}
.column {
    text-align: justify;
}
.column p {
    color: #878787;
}
.column span {
    color: #F3F3F3;
}
.movie-info p{
    color: #AEAEAE;
}
.movie-plot {
    text-align: justify;
    margin: 20px 20px 50px;
    font-size: 21px;
    font-weight: 500;
    color: #F3F3F3;
}
.header-movie-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 10px 20px;
}
.header-movie-cont h1{
    color: #F3F3F3;
}
</style>

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
        console.log(this.movieData)
    }
    
}
</script>