<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Nuevo proyecto </h2>
      <router-link to="/" class="btn btn-radio max btn-primary">
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    
    <div class="main pd-tb-25">
      <form method="POST" class="form card mg-auto max-width-900" v-on:submit.prevent="createProject">

        <div class="field">
          <div class="input">
            <input type="text" class="fs-15" id="name" name="name" v-model="name" placeholder="Ingresa tu nombre">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description"  id="description" class="fs-15" v-model="description" placeholder="Ingresa descripcion"></textarea>
            <label for="description"> Descripcion </label>
          </div>
        </div>

        <div class="field">
          
          <div class="input">

            <input type="search" name="users" class="fs-15" id="user" v-model="userSearch" v-on:keyup="getUsersSearch" placeholder="Buscar usuario">
            <label for="user"> Usuario </label>

            <div class="search-container" v-if="searchUserActive">
              <button 
                v-for="user in users"
                :key="user.id"
                class="link-btn" 
                type="button" 
                v-on:click="addUser(user)"
              >
                <AvatarWithInfo
                  v-bind:user="user"
                />
              </button>
            </div>

          </div>

          <div class="input-container">
            <AvatarCard
              v-for="user in usersSelects"
              :key="user.id"
              v-bind:user="user"
              @admin-user="userAdmin"
              @drop-user="dropUser"
            />
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary" > Crear </button>

      </form>
    </div>

  </div>
</template>

<script>

import AvatarWithInfo from '../../components/AvatarWithInfo';
import AvatarCard from '../../components/AvatarCard';
import User from '../../js/User';
import Project from '../../js/Project';
import UserProject from '../../js/UserProject';

export default {
  name: 'PageCreateProject',
  components: {
    AvatarWithInfo, AvatarCard
  },
  data() {
    return {
      searchUserActive: false,
      name: '',
      description: '',
      userSearch: '', 
      users: [],
      usersSelects: [],
      userReq: new User,
      projectReq: new Project,
      userProjectReq: new UserProject
    }
  },
  methods: {
    createProject: async function () {
      const data = {
        name: this.name,
        description: this.description,
        status: 'active'
      }

      let project = await this.projectReq.post( data );

      console.log(project);

      if(this.usersSelects.length > 1 ) {
        this.createUserProjects( project.data.id );
      }

      this.$router.push(`/projects/${project.data.id}`);
    },
    createUserProjects: async function( projectId ) {
      for (let i = 1; i < this.usersSelects.length; i++ ) {
        await this.userProjectReq.post( this.usersSelects[i].id, projectId, this.usersSelects[i].admin );
      }
    },

    getUserSession: async function () {
      const user = await this.userReq.show(this.userReq.user.id);
      this.usersSelects.push(user.data);
    },
    getUsersSearch: async function (e) {
      const users = await this.userReq.search(e.target.value);
      this.users = typeof users.data === 'object' ? users.data : [];
      this.searchUserActive = typeof users.data === 'object' ? true : false;
      this.getUsersAllwithoutUsers();
    },
    getUsersAllwithoutUsers: function () {
      let newUsers = [];
      this.users.forEach( user => {
        if( !this.usersSelects.filter( data => data.id === user.id )[0] ){
          newUsers.push( user );
        }
      });
      this.users = newUsers;
    },

    addUser: function (user) {
      user.admin = false;
      this.usersSelects.push(user);
      this.users = [];
      this.userSearch = '';
      this.searchUserActive = false;
    },
    dropUser: function (user) {
      this.usersSelects.splice( this.usersSelects.indexOf(user), 1 );
    },

    userAdmin: function(data) {
      let user = this.usersSelects[this.usersSelects.indexOf(data.user)];
      user.admin = data.check;
      this.usersSelects[this.usersSelects.indexOf(data.user)] = user;
    }
  },
  async created() {
    await this.getUserSession();
  }
}
</script>