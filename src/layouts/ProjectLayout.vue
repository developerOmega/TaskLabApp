<template>
  <div>
    <header class="header">
      <a href="/" class="logo-text"> WorkTask </a>
      <div class="menu flex align-items-end">

        <div class="title fs-35 name-project"> {{ project.name }} </div>
        <div class="flex align-items-center justify-between color-primary pd-left-15">
          <b class="pd-right-5">by</b>

          <IconAvatar
            :img="user.img"
            :type="user.type"
            size="min"
          />

          <div class="name-user"> {{ user.name }} </div>

        </div>

      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import IconAvatar from '../components/IconAvatar';
import Project from '../js/Project';
import User from '../js/User';

import {Socket} from '../js/Socket';

// Template de layout de project show

export default {
  name: 'ProjectLayout',
  components: {
    IconAvatar
  },
  data() {
    return {
      user: {},
      menuOpen: false,
      project: {}
    }
  },
  methods: {
    // Metodo que reliza peticion GET para buscar projecto por id
    getProject: async function () {
      const projectReq = new Project;
      const project = await projectReq.show( this.$route.params.id );
      this.project = project.data;
    },

    // Metodo que busca usuarios por proyecto
    getUser: async function () {
      const userReq = new User;
      const user = await userReq.showByProject( this.$route.params.id );
      this.user = user.data;
    }
  },
  async created () {
    await this.getProject();
    await this.getUser();

    Socket.on('connect', () => {
      console.log("Conectado al servidor");
    });

    Socket.on('disconnect', () => {
      console.log("Perdimos conexion");
    });
  }
}
</script>