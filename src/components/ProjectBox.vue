<template>
  <div class="box">
    <div class="content">
      <h3 class="title"> {{ project.name }} </h3>
      <div class="section">
        <b> Descripcion: </b>
        <div class="color-title-second">
          {{ project.description }}
        </div>
        <div class="section">
          <div>
            <b> Usuarios </b>
            <button class="btn bor-50">
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <div class="bg-gray">
            <div
              v-for="user in users"
              :key="user.id" 
              class="display"
            >
              <IconAvatar
                :img="user.img"
                :type="user.fine"
              />
              <button class="danger"> 
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="info"></div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

export default {
  name: 'ProjectBox',
  components: {
    IconAvatar
  },
  data() {
    return {
      users: [
        {
          id: 1,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 2,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 3,
          img: "http://placeimg.com/640/480/people",
          type: 'danger'
        }
      ]
    }
  },
  props: {
    project: {
      type: Object
    }
  },
  updated() {
    console.log(this.users);
  }, 
}
</script>