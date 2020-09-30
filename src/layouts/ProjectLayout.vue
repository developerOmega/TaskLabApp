<template>
  <div>
    <header class="header">
      <router-link to="/" class="logo-text"> TaskLab </router-link>
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

export default {
  name: 'ProjectLayout',
  components: {
    IconAvatar
  },
  data() {
    return {
      user: {
        img: 'http://placeimg.com/640/480/people',
        type: "fine",
        name: 'Nayeli Lopez'
      },
      menuOpen: false,
      project: {}
    }
  },
  methods: {
    getProject: async function () {
      const projectReq = new Project;
      const project = await projectReq.show( this.$route.params.id );
      this.project = project.data;
    }
  },
  async created () {
    await this.getProject();
  }
}
</script>