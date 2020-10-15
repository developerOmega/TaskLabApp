<template>
  <div class="options-project">
    <button v-on:click="inActive" class="link-btn fs-20"> <i class="fas fa-ellipsis-v"></i> </button>

    <div class="head">
      <div class="title fs-20"> Estado </div>
    </div>
    <div class="form content" v-if="isAdmin">
      <div class="field">
        
        <div class="input-radio">
          <input type="radio" id="active" name="status" value="active" v-on:change="updateStatus" :checked="project.status === 'active'">
          <label for="active"> Vigente </label>
        </div>

        <div class="input-radio danger">
          <input type="radio" id="finish" name="status" value="finish" v-on:change="updateStatus" :checked="project.status === 'finish'">
          <label for="finish"> Finalizar </label>
        </div>

        <div class="input-radio warning">
          <input type="radio" id="stop" name="status" value="stop" v-on:change="updateStatus" :checked="project.status === 'stop'">
          <label for="stop"> Suspender </label>
        </div>

      </div>
    </div>
    <div class="form content" v-else>
      <div class="field">
        
        <div v-if="project.status === 'active'" class="input-radio">
          <input type="radio" id="active" name="status" value="active" :checked="project.status === 'active'">
          <label for="active"> Vigente </label>
        </div>

        <div v-else-if="project.status === 'finish'" class="input-radio danger">
          <input type="radio" id="finish" name="status" value="finish" :checked="project.status === 'finish'">
          <label for="finish"> Finalizar </label>
        </div>

        <div value="stop" v-else-if="project.status === 'stop'" class="input-radio warning">
          <input type="radio" id="stop" name="status" :checked="project.status === 'stop'">
          <label for="stop"> Suspender </label>
        </div>

      </div>
    </div>

    <div class="flex justify-center">
      <a href="/" class="btn-link link-primary text-center"> Ir a inicio </a>
    </div>
  </div>
</template>

<script>
// Template de opciones de proyectos (modificacion de status)

import Project from '../js/Project';
import User from '../js/User';
import Validate from '../js/Validate';
export default {
  name: 'OptionsProject',
  data() {
    return {
      projectReq: new Project,
      userReq: new User,
      project: {},
      status: '',
      users: []
    }
  },
  methods: {

    // Metodo que manda informacion al $emmit 'options-project' para desactivar Template        
    inActive: function () {
      this.$emit('options-project', false);
    },

    // Metodo que busca proyecto 
    getProject: async function () {
      const project = await this.projectReq.show(this.$route.params.id);
      this.project = project.data;
    },

    // Metodo que busca usuarios por proyecto
    getUser: async function () {
      const users = await this.userReq.indexByProject(this.$route.params.id);
      this.users = users.data;
    },

    // Metodo que relaiza peticion UPDATE para actualzar estado de proyecto
    updateStatus: async function (e) {
      await this.projectReq.update(this.$route.params.id, { status: e.target.value });
    }
  },
  computed: {
    // Metodo que manda informacion al $emmit 'create-event' para desactivar Template
    isAdmin: function () {
      return Validate.admin(this.userReq.user, this.users);
    }
  },
  async created () {
    await this.getProject();
    await this.getUser();
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/OptionsProject.scss';  
</style>