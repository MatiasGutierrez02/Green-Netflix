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
        <input v-model="newUser.password" type="text" placeholder="Contrasña" class="singup-input">
      </div>
      

      <button class="button-singup" @click="register">
        Registrate
      </button>
  </div>
</template>

<style scoped src='@/assets/styles/singup.css'></style>

<script>
import services from '../plugins/services/usersService'
export default {
  data() {
    return {
      newUser: {}
    }
  },
  methods: {
    async register(){
      let registerUser = await services.registerUser(this.newUser)
      this.$router.push("/mainPage")

    }
  }
}
</script>