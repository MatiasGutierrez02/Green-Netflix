<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-container">
      <nuxt-link to="/">
        <img src="images/logo.svg" class="login-logo" alt="Logo">
      </nuxt-link>

      <h1>Registrate</h1>

      <div class="inputs-container">
        <input v-model="newUser.name" type="text" placeholder="Nombre" class="singup-input">
        <input v-model="newUser.lastName" type="text" placeholder="Apellido" class="singup-input">
        <input v-model="newUser.birthday" type="text" placeholder="Fecha nacimiento" class="singup-input">
        <input v-model="newUser.email" type="text" placeholder="Email" class="singup-input">
        <input v-model="newUser.password" type="password" placeholder="Contrasña" class="singup-input">
      </div>

      <button class="button-singup" @click="register">
        Registrate
      </button>

      <h3 class="login-link">¿Ya tienes cuenta? <nuxt-link class="redirect-link" to="/login">Inicia Sesión</nuxt-link></h3>
      <h4>Todos los derechos reservados. Esta pagina es sin uso comercial.</h4>
  </div>
</template>

<style scoped src='@/assets/styles/singup.css'></style>

<script>
import services from '../plugins/services/usersService'
export default {
  data () {
    return {
      newUser: {}
    }
  },
  methods: {
    async register () {
      const registerUser = await services.registerUser(this.newUser)
      console.log(registerUser + ' is registered!')
      this.$router.push('/mainPage')
    }
  }
}
</script>
