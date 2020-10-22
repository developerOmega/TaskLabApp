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

    <LoadingIcon v-if="activeLoading" />
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
import moment from 'moment';
import ProjectCard from '../../components/ProjectCard';
import EditNameProject from '../../components/views/EditNameProject';
import EditDescriptionProject from '../../components/views/EditDescriptionProject';
import LoadingIcon from '../../components/Loading';

import Project from '../../js/Project.js';
export default {
  name: 'PageIndexHome',
  components: {
    ProjectCard, 
    EditNameProject, EditDescriptionProject, LoadingIcon
  },
  data() {
    return {
      activeEditName: false,
      activeEditDescription: false,
      activeLoading: false,
      projectReq: new Project,
      projects: [],
      projectEdit: {}
    }
  },
  methods: {
    activeNameView: function (activeEditName) {
      this.activeEditName = activeEditName
    },
    activeDescription: function (activeEditDescription) {
      this.activeEditDescription = activeEditDescription;
    },
    inActiveName: function (activeEditName) {
      this.activeEditName = activeEditName;
    },
    inActiveDescription: function (activeEditDescription) {
      this.activeEditDescription = activeEditDescription;
    },
    getProjects: async function () {
      this.activeLoading = true;
      try {
        const projects = await this.projectReq.indexByUser();
        this.projects = !projects.data ? [] : projects.data;
        this.activeLoading = false;
      } catch (error) {
        this.projects = [];
        console.err(error);
      }
    },

    getProjectEdit: function ( project ) {
      this.projectEdit = project;
    },

    updateProject: async function () {
      await this.getProjects();
    },

    addStatusNotificationToStorage() {
      let notifications = [];
      this.projects.forEach( project => {
        notifications.push({ id: project.id, notification: true });
      });
      localStorage.setItem('notification_by_projects', JSON.stringify(notifications));
    },

    initNotifications: function () {
      const dateStorage = moment(parseInt(Project.dateNow)).format('YYYY-MM-DD');
      const dateNow = moment(Date.now()).format('YYYY-MM-DD');

      if(!Project.dateNow || dateStorage < dateNow){
        localStorage.setItem('date_now', Date.now() );
        this.addStatusNotificationToStorage();
      }

      if(!Project.notificationsStorage) {
        this.addStatusNotificationToStorage();
      }
    }
  },
  async created () {
    await this.getProjects();
    this.initNotifications();
  }
}
</script>
