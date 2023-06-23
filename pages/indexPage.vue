<template>
  <div>
    <div class="header-section">
      <div>
        <div class="logo-container">
          <nuxt-link to="/">
          <img src="images/logo.svg" class="logo" alt="Logo">
        </nuxt-link>
        </div>
        <button class="button-index login">
          <nuxt-link to="/login" class="link">
            Iniciar Sesion
          </nuxt-link>
        </button>
      </div>

      <div class="image-container">
        <img src="images/background.jpg" alt="Image">
      </div>
      <div class="text-container">
        <h1>Películas y series para toda la familia y más</h1>
        <p>Disfruta todo nuestro catálogo con toda tu familia. ¿Buscas una pelicula? ¡Seguro la tenemos! Registrate en nuestra pagina y disfruta de miles de peliculas.</p>
        <button class="button-index register">
          <nuxt-link to="/singup" class="link">
            Registrarme
          </nuxt-link>
        </button>
      </div>
    </div>

    <HomeCard
      title="Descubri nuestro catálogo"
      body="Ahora podes descubrir nuestro catálogo desde tu casa."
      src="images/watchFromHome.jpg"
    />
    <HomeCard
      title="Podes entrar desde distintos dispositivos"
      body="Podes descubrir premios, rankings y opiniones sobre cualquier pelicula en el dispositivo que quieras."
      src="images/tabletImage.jpg"
    />
    <HomeCard
      title="Descarga tus series y miralas cuando quieras"
      body="Guarda en tu dispositivo tus peliculas favoritas."
      src="images/kids.png"
    />
  </div>
</template>

<style scoped src='@/assets/styles/index.css'></style>

<script>
import HomeCard from '../components/HomeCard.vue'
export default {
  components: {
    HomeCard: HomeCard
  },
  head () {
    return {
      title: 'Videclub: Alquiler de peliculas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pagina web de renta de peliculas'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  }

}
</script>
