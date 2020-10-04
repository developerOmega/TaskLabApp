<template>
  <div id="container-config" class="grid col-2-of-20-80 justify-between">
    <NavResponsive 
      v-if="navResponse"
      @nav-response="inactiveNavResponse"
    />

    <button v-on:click="activeNavResponse" class="btn-nav">
      <i class="fas fa-bars"></i>
    </button>

    <nav id="in-config-no-response" class="in-config"> 

      <div class="menu">
        <div class="options">
          <h2 class="title text-center"> Configuracion </h2>

          <router-link to="/settings/user" class="link link-primary fs-20"> Datos de usuario </router-link>
          <router-link to="/settings/password" class="link link-primary fs-20"> Datos de contraseña </router-link>
        </div>

        <router-link to="/" class="link position-end"> Ir a inicio </router-link>
      </div>

    </nav>

    <router-view />
  </div>
</template>

<script>
import NavResponsive from '../../components/views/NavResponsive';

// Template global de settings

export default {
  name: 'PageMainSettings',
  components: {
    NavResponsive
  },
  data() {
    return {
      navResponse: false
    }
  },
  methods: {
    
    // Activa menu responsivo
    activeNavResponse: function () {
      this.navResponse = true;
    },

    // Desactiva menu responsivo
    inactiveNavResponse: function ( inactive ) {
      this.navResponse = inactive;
    }
  }
}
</script>