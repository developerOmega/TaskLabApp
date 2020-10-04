<template>
  <div class="options-project">
    <button v-on:click="inActive" class="link-btn fs-20"> <i class="fas fa-ellipsis-v"></i> </button>

    <div class="head">
      <div class="title fs-20"> Estado </div>
    </div>
    <div class="form content">
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

    <div class="flex justify-center">
      <a href="/" class="btn-link link-primary text-center"> Ir a inicio </a>
    </div>
  </div>
</template>

<script>
import Project from '../js/Project';

// Template de opciones de proyectos (modificacion de status)

export default {
  name: 'OptionsProject',
  data() {
    return {
      projectReq: new Project,
      project: {},
      status: ''
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

    // Metodo que relaiza peticion UPDATE para actualzar estado de proyecto
    updateStatus: async function (e) {
      await this.projectReq.update(this.$route.params.id, { status: e.target.value });
    }
  },
  async created () {
    await this.getProject();
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/OptionsProject.scss';  
</style>