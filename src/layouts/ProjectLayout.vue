<template>
  <div>
    <header>
      <div class="logo-text"> TaskLab </div>
      <div class="menu">

        <div class="Title"> CampusBay </div>
        <div class="description">
          <p>by</p>

          <div class="name-user"> {{ user.name }} </div>
          <IconAvatar
            :img="user.img"
            :type="user.fine"
          />

          <p> {{ user.name }} </p>
        </div>

      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import IconAvatar from '../components/IconAvatar';

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
      menuOpen: false
    }
  }
}
</script>