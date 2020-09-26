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
      <button v-on:click="inActiveRedirect('/login')" class="link-btn fs-20"><i class="fas fa-sign-out-alt"></i></button>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

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
    inActive: function () {
      this.$emit('inactive-menu-header', false);
    },
    inActiveRedirect: function (pathname) {
      this.inActive();
      this.$router.push(pathname);
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