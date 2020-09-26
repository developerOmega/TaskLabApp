<template>
  <div>
    <header class="header">
      <router-link to="/" class="logo-text"> TaskLab </router-link>
      <div class="flex align-items-center">
        <div :class="typeStyle"> {{ user.name }} </div>
        <button v-on:click="activeMenu()" class="btn-avatar">          
          <IconAvatar
            :type="user.type"
            :img="user.img"
          />
        </button>

        <OptionsHeader
          v-if="menuOpen"
          :img="user.img"
          :type="user.type"
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

export default {
  name: 'MainLayout',
  components: {
    IconAvatar,
    OptionsHeader
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
    activeMenu: function () {
      this.menuOpen = true;
    },
    inactiveMenu: function (menuClose) {
      this.menuOpen = menuClose;
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
  }
}
</script>