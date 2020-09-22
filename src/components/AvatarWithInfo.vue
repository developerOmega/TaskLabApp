<template>
  <button class="icon-avatar-with-info">
    <IconAvatar
      v-bind:img="user.img"
      v-bind:type="user.type"
    />

    <div class="info">
      <div class="color-text fs-15"> {{ user.name }} </div>
      <div :class="'color-' + typeStyle"> {{ user.email }} </div>
    </div>  
  </button>
</template>

<script>
import IconAvatar from './IconAvatar';
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

  @import '../styles/variables.scss';

  .icon-avatar-with-info {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
    .info {
      padding-left: 10px;
      text-align: left;
    }
    
    &:hover {
      .color-fine {
        color: $fine-second;
      }
      .color-warning {
        color: $warning-second;
      }
      .color-danger {
        color: $danger-second;
      }
      
      img.fine {
        border: 3px solid $fine-second;
        -webkit-box-shadow: 0px 0px 12px -2px $fine-second;
        -moz-box-shadow: 0px 0px 12px -2px $fine-second;
        box-shadow: 0px 0px 12px -2px $fine-second;
      }
      img.warning {
        border: 3px solid $warning-second;
        -webkit-box-shadow: 0px 0px 12px -2px $warning-second;
        -moz-box-shadow: 0px 0px 12px -2px $warning-second;
        box-shadow: 0px 0px 12px -2px $warning-second;
      }
      img.danger {
        border: 3px solid $danger-second;
        -webkit-box-shadow: 0px 0px 12px -2px $danger-second;
        -moz-box-shadow: 0px 0px 12px -2px $danger-second;
        box-shadow: 0px 0px 12px -2px $danger-second;
      }
    }
  }
</style>