<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-container">
      <nuxt-link to="/">
        <img src="images/logo.svg" class="login-logo" alt="Logo">
      </nuxt-link>

      <h1>Inicia sesión</h1>

      <div class="inputs-container">
        <input v-model="user.email" type="text" placeholder="Email" class="login-input">
        <input v-model="user.password" type="password" placeholder="Contrasña" class="login-input">
      </div>

      <button class="button-login" @click="searchUser">
        Iniciar sesión
      </button>

      <h3 class="singUp-link">¿Primera vez? <nuxt-link class="redirect-link" to="/singUp">Registrate</nuxt-link></h3>
      <h4>Todos los derechos reservados. Esta pagina es sin uso comercial.</h4>
  </div>
</template>

<style scoped src='@/assets/styles/login.css'></style>

<script>
import services from '../plugins/services/usersService'
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    async searchUser () {
      const user = await services.searchUser(this.user.email)

      if (user.email === this.user.email && user.password === this.user.password) {
        console.log('Usuario encontrado')
        this.$router.push('/mainPage')
      } else {
        console.log('Usuario no encontrado')
      }
    }
  }

}
</script>
