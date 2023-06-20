<template>
  <div class="main-container">
      <nuxt-link to="/">
        <img src="images/logo.svg" class="login-logo" alt="Logo">
      </nuxt-link>
      
      <h1>Registrate</h1>

      <div class="inputs-container">
        <input type="text" placeholder="Nombre" class="singup-input">
        <input type="text" placeholder="Apellido" class="singup-input">
        <input type="text" placeholder="Fecha nacimiento" class="singup-input">
        <input type="text" placeholder="Email" class="singup-input">
        <input type="text" placeholder="Contrasña" class="singup-input">
      </div>
      

      <button class="button-singup">
        Registrate
      </button>
  </div>
</template>

<style scoped src='@/assets/styles/singup.css'></style>