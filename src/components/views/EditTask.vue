<template>
  <div class="screen">
    <form class="post mg-auto screen-content" method="POST">
      <div class="post-head">
        <div class="fs-20">
          Editar tarea
        </div>
        <button v-on:click="inActive" type="button" class="link-btn link-white fs-20"><i class="fas fa-times"></i></button>
        
      </div>
      <textarea class="post-content post-height-max" name="content" id="content" placeholder="Escribir tarea"></textarea>
      <div class="post-options inline-options">
        
        <div class="flex align-items-center pd-left-15">
          <div class="field-date">
            <div class="input">
              <label for="time_end">
                <i class="fas fa-calendar-alt"></i>
              </label>
              <input type="date" name="time_end" id="time_end">
            </div>
          </div>

          <div class="field-users">
            <button type="button" class="btn-post"><i class="fas fa-user"></i></button>
            <div class="options-select flex">
              <IconAvatar
                v-for="user in usersSelect"
                :key="user.id"
                v-bind:img="user.img"
                size="min"
              />
            </div>
                  
            <!-- <div class="options">
              <IconAvatar
                v-for="user in users"
                :key="user.id"
                v-bind:img="user.img"
              />
            </div> -->
          </div>

        </div>
        
        <button class="btn-post" > <i class="fas fa-share"></i> </button>

      </div>


    </form>
  </div>
</template>

<script>
 import IconAvatar from '../IconAvatar';
export default {
  name: 'EditTask',
  components: {
    IconAvatar
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Nayeli Lopez',
          email: 'naye@mgail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        },
        {
          id: 2,
          name: 'Tyler Durden',
          email: 'tyler@gmail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'danger'
        },
        {
          id: 3,
          name: 'Sofia Velazquez',
          email: 'sofia@mail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ],
      usersSelect: [
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
  methods: {
    inActive: function () {
      this.$emit('edit-task', false);
    }
  }
}
</script>

