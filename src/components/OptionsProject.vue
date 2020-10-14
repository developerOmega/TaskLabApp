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
import Project from '../js/Project';
export default {
  name: 'OptionsProject',
  props: {
    usersByProject: {
      type: Array
    }
  },
  data() {
    return {
      projectReq: new Project,
      project: {},
      status: ''
    }
  },
  methods: {
    inActive: function () {
      this.$emit('options-project', false);
    },
    getProject: async function () {
      const project = await this.projectReq.show(this.$route.params.id);
      this.project = project.data;
    },
    updateStatus: async function (e) {
      await this.projectReq.update(this.$route.params.id, { status: e.target.value });
    }
  },
  computed: {
    isAdmin: function () {
      const userSession = this.projectReq.user;
      const userAdmin = this.usersByProject.filter( user => user.admin == true );
      const userValidate = userAdmin.filter( user => user.id === userSession.id);
      return !userValidate[0] ? false : true;
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