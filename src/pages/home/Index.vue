<template>
  <div class="container">
    <div class="head">
      <h2> Proyectos. </h2>
      <router-link to="/projects/create" class="btn bor-50">
        <i class="fas fa-plus"></i>
      </router-link>
    </div>

    <div class="content">
      <ProjectBox
        v-for="project in projects"
        :key="project.id"
        v-bind:project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectBox from '../../components/ProjectBox';

export default {
  name: 'PageIndexHome',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'CampusBay',
          description: "Algo :v",
        },
        {
          id: 2,
          name: 'ChatRoom',
          description: "Algo :v",
        },
        {
          id: 3,
          name: 'SchoolPlatform',
          description: "Algo :v",
        },

      ]
    }
  },
  components: {
    ProjectBox
  }
}
</script>
