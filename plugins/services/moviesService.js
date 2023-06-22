import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://www.omdbapi.com/',
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
    }
    
}
