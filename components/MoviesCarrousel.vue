<template>
    <div>
        <h1 class="header-carrousel">{{ title }}</h1>
        <div>
            <ul class="list-container">
                <li v-for="item in moviesList" :key="item.imdbID">
                    <nuxt-link :to="'/movies/' + item.imdbID" class="link-to-movie">
                        <img :src="item.Poster" alt="Poster" class="movie-image">
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style>
.list-container {
    display: flex;
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;

}
.list-container::-webkit-scrollbar {
    display: none;
}
li {
    list-style: none;
    margin-right: 5px;
}
.link-to-movie {
    text-decoration: none;
    color: #999;
}
.movie-image {
    width: 129px;
    max-height: 160px;
}
.header-carrousel {
    margin: 0;
}

</style>

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

        }
    }
</script>

