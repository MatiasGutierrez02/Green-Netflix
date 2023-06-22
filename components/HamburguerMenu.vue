import HamburguerMenu from 'HamburguerMenu.vue';
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
                <li>
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
    data() {
        return {
            visible: ''
        }
    },
    methods: {
        openMenu() {
            this.visible = 'visible';
        },
        closeMenu() {
            this.visible = '';
        }
    }
}
</script>

<style>
    .nav {
        padding: 10px 10px 0;
        transition: opacity 0.3s, visibility 0s linear 0.3s;
        
    }
    .nav-list {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    .nav-item {
        text-decoration: none;
        color: #999;
        font-weight: 600;
    }
    .open-menu, .close-menu{
        display: none;
        background: none;
        border: none;
    }
    .open-menu img, .close-menu img{
        width: 32px;
    }
    .open-menu{
        padding: 17px 10px 0;
    }


    @media screen and (max-width: 550px) {
        .open-menu, .close-menu {
            display: block;
        }
        .nav {
            padding: 25px 10px 0 0; 
            opacity: 0;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 1rem;
            position: fixed;
            top: 56px;
            right: 0;
            bottom: 0;
            background-color: #040404;
            box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
        }
        .nav.visible {
            opacity: 1;
            visibility: visible;
            transition-delay: 0s;
        }
        .open-menu.visible {
            display: none;
        }
        .nav-list {
            flex-direction: column;
            align-items: flex-end;
        }
    }
</style>