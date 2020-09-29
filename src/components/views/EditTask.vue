<template>
  <div class="screen">
    <form class="post mg-auto screen-content" method="POST" v-on:submit.prevent="updateTask">
      <div class="post-head">
        <div class="fs-20">
          Editar tarea
        </div>
        <button v-on:click="inActive" type="button" class="link-btn link-white fs-20"><i class="fas fa-times"></i></button>
        
      </div>
      <textarea class="post-content post-height-max" name="content" id="content" placeholder="Escribir tarea" v-model="description"></textarea>
      <div class="post-options inline-options">
        
        <div class="flex align-items-center pd-left-15">
          <div class="field-date">
            <div class="input">
              <label for="time_end">
                <i class="fas fa-calendar-alt"></i>
              </label>
              <input type="date" name="time_end" id="time_end" v-model="timeEnd">
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
import Task from '../../js/Task';
import moment from 'moment';
export default {
  name: 'EditTask',
  components: {
    IconAvatar
  },
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      users: [],
      usersSelect: [],
      description: this.task.description,
      timeEnd: moment.utc( this.task.time_end ).format('YYYY-MM-DD'),
      taskReq: new Task
    }
  },
  methods: {
    inActive: function () {
      this.$emit('edit-task', false);
    },
    updateTask: async function () {
      const body = {
        description: this.description,
        time_end: this.timeEnd
      }

      const task = await this.taskReq.update( this.task.id, body );
      this.$emit('update-task', task.data);
      this.inActive();
    }
  }
}
</script>

