<template>
  <div>
    <header>
      <div class="logo-text"> TaskLab </div>
      <div class="menu">
        <div class="name-user"> {{ user.name }} </div>
        <IconAvatar
          :img="user.img"
          :type="user.fine"
        />

        <OptionsHeader
          v-if="menuOpen"
          :img="user.img"
          :type="user.fine"
          :name="user.name"
        />

      </div>
    </header>

    <router-view />

  </div>
</template>

<script>
import IconAvatar from '../components/IconAvatar.vue';
import OptionsHeader from '../components/OptionsHeader';

export default {
  name: 'MainLayout',
  components: {
    IconAvatar,
    OptionsHeader
  },
  data() {
    return {
      user: {
        img: 'http://placeimg.com/640/480/people',
        type: "fine",
        name: 'Nayeli Lopez'
      },
      menuOpen: false
    }
  },
}
</script>