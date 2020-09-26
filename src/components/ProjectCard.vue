<template>
  <div class="card not-padding width-resp-100 template">
    <div class="content pd-20">
      <div class="section-center">
        <router-link to="/" :class="'title-project ' + statusStyle"> {{ project.name }} </router-link>
      </div>
      <div class="section">
        <div class="color-text"> Descripcion: </div>
        <div class="color-text-second pd-tb-5">
          {{ project.description }}
        </div>
        <div class="section">
          <div class="head-section flex justify-between align-items-center">
            <div class="color-text"> Usuarios </div>
            <button v-if="!userSelect" v-on:click="activeUserSelect" :class="'btn btn-radio btn-' + statusStyle">
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <div class="main-section grid col-3 background-gray justify-between">
            <div
              v-for="user in users"
              :key="user.id" 
              class="flex"
            >
              <IconAvatar
                :img="user.img"
                :type="user.type"
              />
              <button class="btn btn-radio min btn-danger"> 
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>

          <form v-if="userSelect" method="POST" class="form mg-top-15">
            <div class="flex justify-end pd-tb-5">
              <button v-on:click="activeUserSelect" type="button" class="btn btn-radio min btn-danger"> <i class="fas fa-times"></i> </button>
            </div>

            <div class="background-gray pd-lr-5 border-radius-5">
              <div class="field">
                <div class="input">
                  <input type="text" id="name-users" class="background-gray" name="name" placeholder="Buscar usuario">
                </div>
              </div>

              <div class="grid col-3 pd-bottom-5">
                <button
                  type="button"
                  v-for="user in usersAll"
                  :key="user.id" 
                  class="btn-avatar"
                >
                  <IconAvatar
                    :img="user.img"
                    :type="user.type"
                  />
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
    <div :class="'pd-5 info ' + statusStyle">

      <button v-on:click="methodActiveMenu()" class="link-btn fs-15 position-relative z-index-2"> 
         <i class="fas fa-ellipsis-v"></i>
      </button>

      <div v-if="activeMenu" class="hover-menu menu-end pd-top-30 z-index-1">
        <button v-on:click="methodActiveName()" class="btn-link link-primary"> Nuevo nombre </button>
        <button v-on:click="methodActiveDescription()" class="btn-link link-primary"> Nueva descripcion </button>  
      </div>

      <div class="fw-600 color-white"> Vigencia </div>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

export default {
  name: 'ProjectBox',
  components: {
    IconAvatar
  },
  props: {
    project: {
      type: Object
    },

  },
  data() {
    return {
      activeMenu: false,
      userSelect: false,
      users: [
        {
          id: 1,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 2,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 3,
          img: "http://placeimg.com/640/480/people",
          type: 'danger'
        }
      ],
      usersAll: [
        {
          id: 1,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        }
      ]
    }
  },
  methods: {
    methodActiveMenu: function () {
      this.activeMenu = this.activeMenu == false ? true : false;
      return this.activeMenu;
    },

    methodActiveName: function () {
      this.activeMenu = false;
      this.$emit('active-name', true);
    },

    methodActiveDescription: function () {
      this.activeMenu = false;
      this.$emit('active-description', true);
    },

    activeUserSelect: function () {
      this.userSelect = this.userSelect == false ? true : false;
      return this.userSelect;
    }

  },
  computed: {
    statusStyle: function () {
      switch(this.project.status) {
        case 'fine':
          return 'fine';
        case 'warning':
          return 'warning';
        case 'danger':
          return 'danger';
        default:
          return ''
      }
    }
  },
  updated() {
    console.log(this.users);
  }, 
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/ProjectCard.scss';
</style>