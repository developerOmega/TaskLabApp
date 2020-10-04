<template>
  <div class="icon-avatar-with-info">
    <IconAvatar
      v-bind:img="user.img"
      v-bind:type="user.type"
    />

    <div class="info">
      <div class="color-text fs-15"> {{ user.name }} </div>
      <div :class="'color-' + typeStyle"> {{ user.email }} </div>
    </div>  
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

// Template de icono de Avatar con infromacion (name y email)

export default {
  name: 'AvatarWithInfo',
  components: {
    IconAvatar
  },
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    typeStyle: function () {
      switch(this.user.type) {
        case 'fine':
          return 'fine';
        case 'warning': 
          return 'warning';
        case 'danger':
          return 'danger';
        default:
          return '';
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/AvatarWithInfo.scss';
</style>