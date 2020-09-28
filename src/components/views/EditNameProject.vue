<template>
  <div class="screen">
    <form action="POST" v-on:submit.prevent="updateName" class="form card background-white screen-content">
      
      <div class="flex justify-end">
        <button v-on:click="inActive()" type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>


      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> Editar nombre </h2>
        </div>

        <div class="field">
          <div class="input">
            <input type="text" id="name" class="fs-15" name="name" placeholder="Ingresa nuevo nombre" v-model="name">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary"> Guardar </button>
      </div>

    </form>
  </div>
</template>

<script>
import Project from '../../js/Project';
export default {
  name: 'EditNameProject',
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      name: this.project.name,
      projectReq: new Project
    }
  },
  methods: {
    inActive: function () {
      this.$emit('inactive-name', false);
    },
    updateName: async function () {
      await this.projectReq.update(this.project.id, { name: this.name });
      this.inActive();
    }
  }
}
</script>