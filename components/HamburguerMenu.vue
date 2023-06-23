<template>
    <div>
        <button :class="['open-menu', visible]"  @click="openMenu">
            <img src="images/menu.svg" alt="Boton de abrir menu.">
        </button>
        <nav :class="['nav', visible]">
            <button class="close-menu"  @click="closeMenu">
                <img src="images/close.svg" alt="Boton de cerrar menu.">
            </button>
            <ul class="nav-list">
                <li @click="closeMenu">
                    <nuxt-link class="nav-item" to="/mainPage">
                        Home
                    </nuxt-link>
                </li>
                <li @click="closeMenu">
                    <nuxt-link class="nav-item" to="/favFilms">
                        Favoritos
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="nav-item" to="/">
                        Cerrar Sesion
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data () {
    return {
      visible: ''
    }
  },
  methods: {
    openMenu () {
      this.visible = 'visible'
    },
    closeMenu () {
      this.visible = ''
    }
  }
}
</script>

<style src='@/assets/styles/hamburguerMenu.css'></style>
