<template>
  <div :class="'card-task position-relative card mg-tb-25 ' + statusStyle">
    <div class="content-task flex align-items-center">
      <div class="head-task">
        <div v-if="isAdmin">
          <button v-if="menuTask" v-on:click="activeMenuTask" class="link-btn btn-black position-relative z-index-2"><i class="fas fa-ellipsis-v"></i></button>
          <button v-else v-on:click="activeMenuTask" class="link-btn position-relative z-index-2"><i class="fas fa-ellipsis-v"></i></button>
        </div>

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

    <div class="menu-responsive" v-if="isVerify">
      <button v-on:click="updateStatusTask('fine')" class="btn btn-fine"> <i class="fas fa-check"></i> </button>
      <button v-on:click="updateStatusTask('error')" class="btn btn-danger"> <i class="fas fa-times"></i> </button>
      <button v-on:click="updateStatusTask('warning')" class="btn btn-warning"> <i class="fas fa-exclamation-triangle"></i> </button>
    </div>

<!--  -->

    <div class="menu flex align-items-center pd-10" v-if="isVerify">
      <div class="grid col-3 justify-center col-gap-15"> 
        <button v-on:click="updateStatusTask('fine')" class="btn btn-radio btn-fine middle"> <i class="fas fa-check"></i> </button>
        <button v-on:click="updateStatusTask('error')" class="btn btn-radio btn-danger middle"> <i class="fas fa-times"></i> </button>
        <button v-on:click="updateStatusTask('warning')" class="btn btn-radio btn-warning middle"> <i class="fas fa-exclamation-triangle"></i> </button>
      </div>        
    </div>



  </div>
</template>

<script>

import IconAvatar from './IconAvatar';
import Task from '../js/Task';
import User from '../js/User';
import Validate from '../js/Validate';
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
      colorCard: this.task.status,
      taskReq: new Task,
      userReq: new User,
      users: [],
      usersProject: [],
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
      await this.taskReq.delete(this.task.id);
      this.$emit('update-task');
    },
    updateStatusTask: async function (status) {
      status = status === this.colorCard ? 'none' : status;
      await this.taskReq.udpateStatus(this.task.id, status);
      this.colorCard = status;
    },
    getUsers: async function () {
      const users = await this.userReq.indexByTask( this.task.id );
      console.log( "El resultado de los usuarios es: ",  );
      this.users =  users.data ? users.data : [];
      return this.users;
    },

    getUsersProject: async function () {
      const users = await this.userReq.indexByProject( this.$route.params.id );
      this.usersProject = users.data; 
    }
  },
  computed: {
    statusStyle: function () {
      switch (this.colorCard) {
        case 'fine':
          return 'fine';
        case 'warning':
          return 'warning';
        case 'error':
          return 'danger'
        default:
          return 'none'
      }
    },
    isVerify: function () {
      const userSession = this.userReq.user;
      const userVerify = this.users.filter( user => user.id === userSession.id);
      return !userVerify[0] ? false : true;
    },
    isAdmin: function () {
      console.log("Es administrador??", Validate.admin( this.userReq.user, this.usersProject));
      return Validate.admin( this.userReq.user, this.usersProject);
    }
  },
  async created  () {
    console.log("Es administrador?", this.isAdmin);
    await this.getUsers();
    await this.getUsersProject();

  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/TaskCard.scss';
</style>