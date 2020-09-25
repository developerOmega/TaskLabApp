<template>
  <div class="img-avatar">
    <img :class="typeStyle + ' ' + widthStyle" :src="img" width="120px">
  </div>
</template>

<script>
export default {
  name: 'IconAvatar',
  props: {
    img: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    
    typeStyle: (e) => {
      switch (e.type) {
        case 'fine' :
          return 'fine';
        case 'warning' :
          return 'warning';
        case 'danger' :
          return 'danger';
        default:
          return 'not-type';
      }
    },

    widthStyle: function () {
      switch(this.size) {
        case 'max':
          return 'max';
        case 'min':
          return 'min';
        case 'super-min':
          return 'super-min';
        default:
          return '';
      }
    } 
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/IconAvatar.scss';
</style>