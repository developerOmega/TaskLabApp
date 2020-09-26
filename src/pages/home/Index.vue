<template>
  <div class="content">
    
    <EditNameProject v-if="activeEditName" />
    <EditDescriptionProject v-if="activeEditDescription" />

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
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../../components/ProjectCard';
import EditNameProject from '../../components/views/EditNameProject';
import EditDescriptionProject from '../../components/views/EditDescriptionProject';

export default {
  name: 'PageIndexHome',
  components: {
    ProjectCard, EditNameProject, EditDescriptionProject
  },
  data() {
    return {
      activeEditName: false,
      activeEditDescription: false,
      projects: [
        {
          id: 1,
          name: 'CampusBay',
          description: "Algo :v",
          status: 'fine'
        },
        {
          id: 2,
          name: 'ChatRoom',
          description: "Algo :v",
          status: 'warning'
        },
        {
          id: 3,
          name: 'SchoolPlatform',
          description: "Algo :v",
          status: 'danger'       
       },

      ]
    }
  }
}
</script>
