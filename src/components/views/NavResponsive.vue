<template>
  <div class="nav-responsive">
    <div class="header">
      <router-link to="/" class="logo-text"> TaskLab </router-link>
      <div class="flex align-items-center">
        <button class="btn-avatar">          
          <IconAvatar
            :type="user.type"
            :img="user.img"
          />
        </button>

      </div>
    </div>

    <nav class="in-config">
      <div v-on:click="inActive" class="flex justify-end mg-top-15">
        <button class="btn-link"> <i class="fas fa-times"></i> </button>
      </div>
      <div class="menu">
        <div class="options">
          <h2 class="title text-center"> Configuracion </h2>

          <button v-on:click="inActiveRedirect('/settings/user')" class="link link-primary fs-20"> Datos de usuario </button>
          <button v-on:click="inActiveRedirect('/settings/password')" class="link link-primary fs-20"> Datos de contraseña </button>
        </div>

        <router-link to="/" class="link position-end"> Ir a inicio </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import IconAvatar from '../IconAvatar';

// Template de nav responsive -> solo en settings

export default {
  name: 'NavResponsive',
  components: {
    IconAvatar
  },
   data() {
    return {
      user: {
        img: 'http://placeimg.com/640/480/people',
        type: "fine",
        name: 'Nayeli Lopez'
      },
      menuOpen: false
    }
  },
  methods: {

    // Metodo que manda informacion al $emmit 'nav-response' para desactivar Template    
    inActive: function () {
      this.$emit('nav-response', false);
    },

    // Metodo que redirecciona al pathname seleccionado
    // Recine parametros -> pathname:strng (link)
    inActiveRedirect: function (pathname) {
      this.inActive();
      this.$router.push(pathname);
    }
  }
}
</script>

<style lang="scss">
  @import '../../styles/vueComponents/NavResponsive.scss';
</style>