<template>

  <div class="options-header">

    <div class="flex align-items-center">
      <div :class="typeStyle"> {{name}} </div>
      <button v-on:click="inActive()" class="btn-avatar">          
        <IconAvatar
          :img="img"
          :type="type"
        />
      </button>
    </div>
    <div class="options">
      <button v-on:click="inActiveRedirect('/settings/user')" class="link-btn fs-20"><i class="fas fa-cog"></i></button>
      <button v-on:click="logout" class="link-btn fs-20"><i class="fas fa-sign-out-alt"></i></button>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';
import UserSession from '../js/UserSession';

// Template de opciones sesion en header (settings, logout)

export default {
  name: 'OptionsHeader',
  components: {
    IconAvatar
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'fine'
    }
  },
  methods: {

    // Metodo que manda informacion al $emmit 'inactive-menu-header' para desactivar Template        
    inActive: function () {
      this.$emit('inactive-menu-header', false);
    },

    // Metodo que redirecciona al pathname seleccionado
    // Recine parametros -> pathname:strng (link)
    inActiveRedirect: function (pathname) {
      this.inActive();
      this.$router.push(pathname);
    },

    // Metodo que elimina sesion
    logout: function () {
      this.inActive();
      const session = new UserSession;
      session.logout();
      window.location.href = "/login";
    }
  },
  computed: {
    typeStyle: function() {
      
      switch(this.type) {
        case 'fine':
          return 'name-user fs-25 pd-right-15 color-primary';
        case 'warning':
          return 'name-user fs-25 pd-right-15 color-warning';
        case 'danger': 
          return 'name-user fs-25 pd-right-15 color-danger' 
        default: 
          return 'name-user fs-25 pd-right-15 color-text';
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/OptionsHeader.scss';  
</style>