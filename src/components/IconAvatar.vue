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
  @import '../styles/variables.scss';

  .img-avatar {

    img {
      display: block;
      margin: auto;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      object-fit:cover;

      &.max {
        width: 120px;
        height: 120px;
      }

      &.min {
        width: 40px;
        height: 40px;
      }

      &.super-min {
        width: 30px;
        height: 30px;
      }
    }

    .not-type {
      -webkit-box-shadow: 0px 0px 12px -2px rgba(79,79,79,1);
      -moz-box-shadow: 0px 0px 12px -2px rgba(79,79,79,1);
      box-shadow: 0px 0px 12px -2px rgba(79,79,79,1);
    }

    .fine {
      border: 3px solid $primary;
      -webkit-box-shadow: 0px 0px 12px -2px rgba(74,203,178,1);
      -moz-box-shadow: 0px 0px 12px -2px rgba(74,203,178,1);
      box-shadow: 0px 0px 12px -2px rgba(74,203,178,1);
    }

    .warning {
      border: 3px solid $warning;
      -webkit-box-shadow: 0px 0px 12px -2px rgba(229,224,83,1);
      -moz-box-shadow: 0px 0px 12px -2px rgba(229,224,83,1);
      box-shadow: 0px 0px 12px -2px rgba(229,224,83,1);
    }

    .danger {
      border: 3px solid $danger;
      -webkit-box-shadow: 0px 0px 12px -2px rgba(203,74,74,1);
      -moz-box-shadow: 0px 0px 12px -2px rgba(203,74,74,1);
      box-shadow: 0px 0px 12px -2px rgba(203,74,74,1);
    }
  }
</style>