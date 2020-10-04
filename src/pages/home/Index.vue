<template>
  <div class="content">
    
    <EditNameProject 
      v-if="activeEditName"
      v-bind:project="projectEdit"
      @inactive-name="inActiveName"
      @update-project="updateProject"
    />
    <EditDescriptionProject
      v-if="activeEditDescription"
      v-bind:project="projectEdit"
      @inactive-description="inActiveDescription"    
      @update-project="updateProject"
    />

    <div class="head">
      <h2 class="title"> Proyectos. </h2>
      <router-link to="/projects/create" class="btn btn-primary btn-radio max">
        <i class="fas fa-plus"></i>
      </router-link>
    </div>

    <div id="projects-in-home" class="grid col-3 gap-15 pd-tb-25">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        v-bind:project="project"
        @active-name="activeNameView"
        @active-description="activeDescription"
        @get-project-edit="getProjectEdit"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../../components/ProjectCard';
import EditNameProject from '../../components/views/EditNameProject';
import EditDescriptionProject from '../../components/views/EditDescriptionProject';

import Project from '../../js/Project.js';

// Template de la pagina principal

export default {
  name: 'PageIndexHome',
  components: {
    ProjectCard, EditNameProject, EditDescriptionProject
  },
  data() {
    return {
      activeEditName: false,
      activeEditDescription: false,
      projectReq: new Project,
      projects: [],
      projectEdit: {}
    }
  },
  methods: {

    // Metodo que activa el formulario para editar nombre
    // Recibe parametros -> activeEditName:boolean=true
    activeNameView: function (activeEditName) {
      this.activeEditName = activeEditName
    },

    // Metodo que activa el formulario para editar descripcion
    // Recibe parametros -> activeEditDescription:boolean=true
    activeDescription: function (activeEditDescription) {
      this.activeEditDescription = activeEditDescription;
    },

    // Metodo que desactiva el formulario para editar nombre
    // Recibe parametros -> activeEditName:boolean=false 
    inActiveName: function (activeEditName) {
      this.activeEditName = activeEditName;
    },

    // Metodo que desactiva el formulario para editar descripcion
    // Recibe parametros -> activeEditDescription:boolean=false
    inActiveDescription: function (activeEditDescription) {
      this.activeEditDescription = activeEditDescription;
    },

    // Metodo que busca proyectos por el usuario
    getProjects: async function () {
      const projects = await this.projectReq.indexByUser();
      this.projects = !projects.data ? [] : projects.data;
    },

    // Metodo que muestra el proyecto editado (para poder clasificar el id al momento de llamar a los firmularios name y  decription)
    // Recibe parametros -> project:object (datos de usuario)
    getProjectEdit: function ( project ) {
      this.projectEdit = project;
    },

    // Metodo que actualiza proyectos al momento de modificar nombre o descripcion
    updateProject: async function () {
      await this.getProjects();
    }
  },
  async created () {
    await this.getProjects();
  }
}
</script>
