<template>
  <div :class="'card-task position-relative card mg-tb-25 ' + statusStyle">
    <div class="content-task">
      <div class="head-task">
        <button v-if="menuTask" v-on:click="activeMenuTask" class="link-btn btn-black position-relative z-index-2"><i class="fas fa-ellipsis-v"></i></button>
        <button v-else v-on:click="activeMenuTask" class="link-btn position-relative z-index-2"><i class="fas fa-ellipsis-v"></i></button>

        <div v-if="menuTask" class="hover-menu menu-init z-index-1 pd-top-20 pd-left-40">
          <button v-on:click="activeEditTask" class="btn-link link-warning"> <i class="fas fa-pen"></i> Editar tarea </button>
          <button v-on:click="deleteTask" class="btn-link link-danger"> <i class="fas fa-trash"></i> Eliminar tarea </button>
        </div>

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
        {{ task.description }}
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
import Task from '../js/Task';
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
      menuTask: false,
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
  methods: {
    activeMenuTask: function () {
      this.menuTask = this.menuTask == false ? true : false;
      return this.menuTask;
    },
    activeEditTask: function () {
      this.menuTask = false;
      this.$emit('edit-task', true);
      this.$emit('get-task-edit', this.task)
    },
    deleteTask: async function () {
      const taskReq = new Task;
      await taskReq.delete(this.task.id);
      this.$emit('update-task');
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
  @import '../styles/vueComponents/TaskCard.scss';
</style>