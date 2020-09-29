<template>
  <div class="screen">
    <form action="POST" class="form card background-white screen-content" v-on:submit.prevent="updateDescription">
      
      <div class="flex justify-end">
        <button v-on:click="inActive()" type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>


      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> Editar descripcion </h2>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description" id="description" placeholder="Ingresar nueva descripcion" v-model="description"></textarea>
            <label for="description"> Descripcion </label>
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
  name: 'EditPasswordProject',
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      description: this.project.description,
      projectReq: new Project  
    }
  },
  methods: {
    inActive: function () {
      this.$emit('inactive-description', false);
    },
    updateDescription: async function () {
      await this.projectReq.update(this.project.id, { description: this.description });
      this.$emit('update-project');
      this.inActive();
    }
  }
}
</script>