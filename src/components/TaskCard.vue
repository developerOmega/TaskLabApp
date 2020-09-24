<template>
  <div :class="'card-task card mg-tb-25 ' + statusStyle">
    <div class="content-task">
      <div class="head-task">
        <button class="link-btn"><i class="fas fa-ellipsis-v"></i></button>
        <div class="cont">
          <IconAvatar
            v-for="user in users"
            :key="user.id"
            v-bind:img="user.img"
            size="super-min"
          />
        </div>
      </div>

      <div class="main">
        {{ task.content }}
      </div>

    </div>

    <div class="menu">
      <button class="btn btn-fine"> <i class="fas fa-check"></i> </button>
      <button class="btn btn-danger"> <i class="fas fa-times"></i> </button>
      <button class="btn btn-warning"> <i class="fas fa-exclamation-triangle"></i> </button>
    </div>

  </div>
</template>

<script>

import IconAvatar from './IconAvatar';

export default {
  name: 'TaskCard',
  components: {
    IconAvatar
  },
  props: {
    task:{
      type: Object
    }
  },
  data() {
    return {
      users: [
         {
          id: 1,
          name: 'Sofia Velazquez',
          email: 'sofia@mail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ]
    }
  },
  computed: {
    statusStyle: function () {
      switch (this.task.status) {
        case 'active':
          return 'fine';
        case 'stop':
          return 'warning';
        case 'finish':
          return 'danger'
        default:
          return 'none'
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/variables.scss';

  .card-task {
    display: flex;
    justify-content: space-between;
    padding: 0;
    .content-task {
      padding: 20px;
      .head-task {
        display: flex;
        align-items: center;
        .cont {
          padding-left: 30px;
        }
        .link-btn {
          font-size: 20px;
          display: flex;
          align-items: center;
        }
      }
      .main {
        padding: 20px 0;
        padding-bottom: 0; 
        color: $text-primary;
      }
    }

    .menu {
      display: grid;
      .btn {
        border-radius: 0;
        padding: 12px;
        &:nth-child(1) {
          border-top-right-radius: 10px; 
        }
        &:nth-child(3) {
          border-bottom-right-radius: 10px; 
        }
      }
    }
    &.fine {
      background: $primary;
    }
    &.danger {
      background: $danger;
    }
    &.warning {
      background: $warning;
    }

    &.fine, &.danger ,&.warning {
      color: white;
      
      .main, .link-btn { 
        color: white;
      }

      .link-btn {
        &:hover {
          color: $text-second;
        }
      }
      
    }

  }
</style>