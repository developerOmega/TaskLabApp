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
            <button v-on:click="activeOptionsUserTask" type="button" :class="'btn-post ' + activeStyle"><i class="fas fa-user"></i></button>

            <button 
              type="button" 
              class="mg-left-15 flex btn-avatar btn-delete"
              v-for="user in usersSelect"
              :key="user.id"
              v-on:click="dropUserSelect(user)"
            >
              <IconAvatar
                v-bind:img="user.img"
                size="min"
              />
            </button>

            <div v-if="optionsUserTask" id="options-users" class="options-users">
              <button
                class="option btn-avatar fine"
                type="button"
                v-for="user in users"
                :key="user.id"
                v-on:click="addUserSelect(user)"
              >
                <IconAvatar
                  v-bind:img="user.img"
                  size="min"
                />
              </button>
            </div>

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
import User from '../../js/User';
import UserTask from '../../js/UserTask';
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
      taskReq: new Task,
      userReq: new User,
      userTaskReq: new UserTask,
      optionsUserTask: false,
    }
  },
  methods: {
    inActive: function () {
      this.$emit('edit-task', false);
    },
    activeOptionsUserTask: function () {
      this.optionsUserTask = this.optionsUserTask == false ? true : false;
      return this.optionsUserTask;
    },

    addUserSelect: function (user) {
      this.usersSelect.push(user);
      this.users.splice(this.users.indexOf(user), 1);
    },
    dropUserSelect: function (user) {
      this.usersSelect.splice(this.usersSelect.indexOf(user), 1);
      this.users.push(user);
    },

    updateUserTask: async function ( taskId ) {
      let userTasks = await this.userReq.indexByTask(taskId);

      userTasks.data.forEach( async (user) => {
        if(!this.usersSelect.filter( data => data.id === user.id )[0]) {
          userTasks = await this.userTaskReq.delete( user.id, taskId );
        }
      });

      this.usersSelect.forEach(async (user) => {   
        if( !userTasks.data.filter(data => data.id === user.id)[0] ) {
          await this.userTaskReq.post( user.id, taskId )
        }
      });
    },
    updateTask: async function () {
      const body = {
        description: this.description,
        time_end: this.timeEnd
      }

      const task = await this.taskReq.update( this.task.id, body );
      this.updateUserTask(task.data.id);

      this.$emit('update-task', task.data);
      this.inActive();
    },

    getUsers: async function () {
      const users = await this.userReq.indexByProject( this.task.project_id );
      this.users = users.data;
    },
    getUserSelect: async function () {
      const users = await this.userReq.indexByTask(this.task.id);
      this.usersSelect = !users.data ? [] : users.data;
    },
    getUserswithoutUserSelect: function () {
      let newUsers = [];
      this.users.forEach( user => {
        if( !this.usersSelect.filter( data => data.id === user.id )[0] ){
          newUsers.push( user );
        }
      });
      this.users = newUsers;
    }
  },
  computed: {
    activeStyle () {
      return this.optionsUserTask == false ? '' : 'active';
    }
  },
  async created () {
    await this.getUsers();
    await this.getUserSelect();
    this.getUserswithoutUserSelect();
  }
}
</script>

