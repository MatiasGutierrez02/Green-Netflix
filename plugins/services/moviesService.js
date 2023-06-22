import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const favMoviesApiClient = axios.create({
    baseURL: 'https://64920dad2f2c7ee6c2c95b2f.mockapi.io/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async searchMovieList(title) {
        try {
            const response = await apiClient.get('http://www.omdbapi.com/', {
                params: {
                    apiKey: '2b062e31',
                    s: title
                }
            });

            const movieData = response.data.Search;
            return movieData

        } catch (error) {
            console.error(error);

        }
    },
    async searchMovieByImdbID(id) {
        try {
            const response = await apiClient.get('http://www.omdbapi.com/', {
                params: {
                    apiKey: '2b062e31',
                    i: id
                }
            });
            const movieData = response.data;
            return movieData

        } catch (error) {
            console.error(error);

        }
    },
    async addMovieToFavList(movie) {
        try {
            const res = await favMoviesApiClient.post(`/moviesFav`, movie)
            console.log("Pelicula agregada correctamente.")

        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async removeMovieToFavList(id) {
        try {
            const res = await favMoviesApiClient.delete(`/moviesFav/${id}`)
            console.log("Pelicula eliminada correctamente.")

        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async getFavListMovies() {
        try {
            const moviesList = await favMoviesApiClient.get(`/moviesFav`)
            return moviesList.data

        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async isMovieFaved(imdbID) {
        try {
            const movieFaved = await favMoviesApiClient.get(`/moviesFav?imdbID=${imdbID}`)
            if (movieFaved.data.length > 0){
                return true

            }else{
                return false

            }

        } catch( error ) {
            throw "Error de conexion"
        }
    }
    
}
