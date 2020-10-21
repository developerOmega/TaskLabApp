<template>
  <div class="card not-padding width-resp-100 template">
    <div class="content pd-20 position-relative">

      <transition name="fade">
        <NotificationProjectCard 
          v-if="notification"
          v-bind:tasks="tasks"
          @unactive-notification="activeNotification" 
        />
      </transition>
      
      <button 
        class="btn btn-chip btn-danger"
        v-if="tasks.length > 0 && buttonNotification"
        v-on:click="activeNotification"
      > 
        <i class="fas fa-tasks"></i> +{{ tasks.length }} 
      </button>
      
      <div class="section-center">
        <a :href="'/projects/' + project.id" :class="'title-project ' + statusStyle"> {{ project.name }} </a>
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
              <button class="btn btn-radio min btn-danger" v-on:click="dropUser(user)"> 
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>

          <form v-if="userSelect" v-on:submit.prevent method="POST" class="form mg-top-15">
            <div class="flex justify-end pd-tb-5">
              <button v-on:click="activeUserSelect" type="button" class="btn btn-radio min btn-danger"> <i class="fas fa-times"></i> </button>
            </div>

            <div class="background-gray pd-lr-5 border-radius-5">
              <div class="field">
                <div class="input">
                  <input type="text" id="name-users" class="background-gray" name="name" v-model="email" v-on:keyup="getUsersSearch" placeholder="Buscar usuario">
                </div>
              </div>

              <div class="grid col-3 pd-bottom-5">
                <button
                  type="button"
                  v-for="user in usersAll"
                  :key="user.id" 
                  class="btn-avatar"
                  v-on:click="addUser(user)"
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

      <div class="fw-600 color-white text-center"> {{ project.status }} </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import IconAvatar from './IconAvatar';
import NotificationProjectCard from './NotificationProjectCard';

import User from '../js/User';
import UserProject from '../js/UserProject';
import Task from '../js/Task';
export default {
  name: 'ProjectBox',
  components: {
    IconAvatar, NotificationProjectCard
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
      notification: false,
      buttonNotification: false,
      userReq: new User,
      taskReq: new Task,
      userProjectReq: new UserProject,
      tasks: [],
      usersAll: [],
      users: [],
      email: ''
    }
  },
  methods: {
    activeNotification: function () {
      this.notification = this.notification == false ? true : false;
      this.buttonNotification = false;
      return this.notification;
    },
    methodActiveMenu: function () {
      this.activeMenu = this.activeMenu == false ? true : false;
      return this.activeMenu;
    },

    methodActiveName: function () {
      this.activeMenu = false;
      this.$emit('active-name', true);
      this.$emit('get-project-edit', this.project);
    },

    methodActiveDescription: function () {
      this.activeMenu = false;
      this.$emit('active-description', true);
      this.$emit('get-project-edit', this.project);
    },

    activeUserSelect: function () {
      this.userSelect = this.userSelect == false ? true : false;
      return this.userSelect;
    },

    getUsers: async function () {
      const users = await this.userReq.indexByProject(this.project.id);
      // this.users = users.data;
      users.data.forEach( user => {
        this.users.push({
          id: user.id,
          img: user.img,
          type: 'fine'
        })
      });
    },
    getUsersSearch: async function (e) {
      const users = await this.userReq.search(e.target.value);
      this.usersAll = typeof users.data === 'object' ? users.data : [];
      this.getUsersAllwithoutUsers();
    },
    getUsersAllwithoutUsers: function () {
      let newUsers = [];
      this.usersAll.forEach( user => {
        if( !this.users.filter( data => data.id === user.id )[0] ){
          newUsers.push( user );
        }
      });
      this.usersAll = newUsers;
    },
    getTask: async function () {
      try {
        let tasks = await this.taskReq.indexByProjectEqualTimeEnd( this.project.id, moment( new Date() ).format('YYYY-MM-DD hh:mm:ss') );
        return tasks.data;
      } catch (error) {
        return [];
      }
    },

    addUser: async function (user) {
      this.users.push(user);
      this.usersAll = [];
      this.email = '';
      await this.userProjectReq.post( user.id, this.project.id, 0 );
    },
    dropUser: async function (user) {
      this.users.splice( this.users.indexOf(user), 1);
      await this.userProjectReq.delete( user.id, this.project.id );
    },

    getNotificationsStorage: function() {
      let notificationsData = JSON.parse(localStorage.getItem('notification_by_projects'));
      let index = notificationsData.map( data => data.id ).indexOf(this.project.id);
      return notificationsData[index].notification;
    }
  },
  computed: {
    statusStyle: function () {
      switch(this.project.status) {
        case 'active':
          return 'fine';
        case 'stop':
          return 'warning';
        case 'finish':
          return 'danger';
        default:
          return ''
      }
    }
  },
  async created() {
    await this.getUsers();
    this.tasks = await this.getTask();
    this.buttonNotification = this.getNotificationsStorage();
   
  }, 
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/ProjectCard.scss';
</style>