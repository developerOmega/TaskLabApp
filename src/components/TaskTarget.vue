<template>
  <div class="card">
    <div class="content">
      <div class="head">
        <button><i class="fas fa-ellipsis-v"></i></button>
        <div class="cont">
          <IconAvatar
            v-for="user in users"
            :key="user.id"
            v-bind:img="user.img"
          />
        </div>
      </div>

      <div class="main">
        {{ task.content }}
      </div>

    </div>

    <div class="menu">
      <button class="bc-fine"> <i class="fas fa-check"></i> </button>
      <button class="bc-danger"> <i class="fas fa-times"></i> </button>
      <button class="bc-warning"> <i class="fas fa-exclamation-triangle"></i> </button>
    </div>

  </div>
</template>

<script>

import IconAvatar from './IconAvatar';

export default {
  name: 'TaskTarget',
  components: {
    IconAvatar
  },
  props: {
    task:{
      type: Object
    }
  },
  data() {
    return {
      users: [
         {
          id: 1,
          name: 'Sofia Velazquez',
          email: 'sofia@mail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ]
    }
  },
}
</script>