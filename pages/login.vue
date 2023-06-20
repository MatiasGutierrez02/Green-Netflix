<template>
  <div class="main-container">
      <nuxt-link to="/">
        <img src="images/logo.svg" class="login-logo" alt="Logo">
      </nuxt-link>
      
      <h1>Inicia sesión</h1>

      <div class="inputs-container">
        <input type="text" placeholder="Email" class="login-input">
        <input type="text" placeholder="Contrasña" class="login-input">
      </div>
      

      <button class="button-login">
        Iniciar sesión
      </button>

      <h3 class="singUp-link">¿Primera vez? <nuxt-link class="redirect-link" to="/singUp">Registrate</nuxt-link></h3>
      <h4>Todos los derechos reservados. Esta pagina es sin uso comercial.</h4>
  </div>
</template>

<style scoped src='@/assets/styles/login.css'></style>