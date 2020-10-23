<template>
  <div>
    <header class="header">
      <router-link to="/" class="logo-text"> WorkTask </router-link>
      <div class="flex align-items-center">
        <!-- <div :class="typeStyle"> {{ user.name }} </div> -->
        <div class="name-user fs-25 pd-right-15 color-primary"> {{ user.name }} </div>
        <button v-on:click="activeMenu()" class="btn-avatar">          
          <IconAvatar
            type="fine"
            :img="user.img"
          />
        </button>

        <OptionsHeader
          v-if="menuOpen"
          :img="user.img"
          type="fine"
          :name="user.name"
          @inactive-menu-header="inactiveMenu"
        />

      </div>
    </header>

    <div class="container">
      <router-view />
    </div>


  </div>
</template>

<script>
import IconAvatar from '../components/IconAvatar.vue';
import OptionsHeader from '../components/OptionsHeader';
import Model from '../js/Model';

// Template de layout global (exepto: project y login)

export default {
  name: 'MainLayout',
  components: {
    IconAvatar,
    OptionsHeader
  },
  data() {
    return {
      modelReq: new Model,
      user: {
        img: 'http://placeimg.com/640/480/people',
        type: "fine",
        name: 'Nayeli Lopez'
      },
      menuOpen: false
    }
  },
  methods: {

    // Metodo que activa menu de opciones de usuario
    activeMenu: function () {
      this.menuOpen = true;
    },

    // Metodo que desactiva menu de opciones de usuario
    // Recine parametro -> menuClose:boolean=false
    inactiveMenu: function (menuClose) {
      this.menuOpen = menuClose;
    },

    // Metodo que busca la sesion del usuario
    getUserSession: function () {
      this.user = this.modelReq.user;
    } 
  },
  computed: {
    typeStyle: function() {
      
      switch(this.user.type) {
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
  },
  created () {
    this.getUserSession();
  }
}
</script>