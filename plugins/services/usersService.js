import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://64920dad2f2c7ee6c2c95b2f.mockapi.io/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async registerUser(usuario) {
        try {
            const res = await apiClient.post(`/users`, usuario)
            console.log("Usuario registrado correctamente.")

        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async searchUser(email) {
        try {
            const usuario = await apiClient.get(`/users?email=${email}`);
            return usuario.data[0]
        } catch( error ) {
            throw "Error de conexion";
        }
    }
}