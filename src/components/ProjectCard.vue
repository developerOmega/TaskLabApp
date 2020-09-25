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
            <button :class="'btn btn-radio btn-' + statusStyle">
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

        </div>
      </div>
    </div>
    <div :class="'pd-5 info ' + statusStyle">
      <button class="link-btn fs-15"> 
         <i class="fas fa-ellipsis-v"></i>
      </button>
      <div class="fw-600"> Vigencia </div>
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
  data() {
    return {
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
      ]
    }
  },
  props: {
    project: {
      type: Object
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