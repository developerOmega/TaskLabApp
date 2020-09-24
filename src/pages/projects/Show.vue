<template>
  <div class="z-index-1">
    
    <div class="sub-header">
      <button><i class="fas fa-arrow-left"></i></button>
      <h3> 12/07/2020 </h3>
      <button><i class="fas fa-arrow-right"></i></button>
    </div>

    <div class="container">
      <div class="grid col-2-of-30-70 justify-between">
        <nav >
          <div class="flex justify-between align-items-center background-gray pd-10">
            <div>
              <button class="link-btn fs-20"> <i class="fas fa-ellipsis-v"></i> </button>
            </div>
          
            <div class="flex">
              <button class="link-btn link-primary fs-25" v-on:click="executeEventActive()"> 
                <i v-if="!eventActive" class="fas fa-calendar-alt"></i> 
                <i v-else class="fas fa-comment-alt"></i>
              </button>
            </div>
          </div>
          <div class="">
            <ChatRoom v-if="eventActive == false"/>
            <Events v-if="eventActive"/>
          </div>
        </nav>
        <div class="content scroll scroll-max-80">
          <form method="POST">
            <textarea name="content" id="content" placeholder="Escribir tarea" cols="30" rows="10"></textarea>
            <div class="options">
              <div>

                <div class="field-date">
                  <div class="input">
                    <label for="time_end">
                      <i class="fas fa-calendar-alt"></i>
                    </label>
                    <input type="date" name="time_end" id="time_end">
                    <div class="text">
                      15/07/2020
                    </div>
                  </div>
                </div>

                <div class="users">
                  <button><i class="fas fa-user"></i></button>
                  <IconAvatar
                    v-for="user in usersSelect"
                    :key="user.id"
                    v-bind:img="user.img"
                  />
                  
                  <div class="options">
                    <IconAvatar
                      v-for="user in users"
                      :key="user.id"
                      v-bind:img="user.img"
                    />
                  </div>
                </div>

              </div>
              
              <button class="btn" > <i class="fas fa-share"></i> </button>

            </div>


          </form>

          <div class="main">
            <TaskTarget
              v-for="task in tasks"
              :key="task.id"
              v-bind:task="task"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskTarget from '../../components/TaskTarget';
import ChatRoom from '../../components/views/ChatRoom';
import Events from '../../components/views/Events';
import IconAvatar from '../../components/IconAvatar';

export default {
  name: 'PageShowProject',
  components: {
    TaskTarget,
    ChatRoom,
    Events,
    IconAvatar
  },
  data() {
    return {
      eventActive: true,
      tasks: [
        {
          id: 1,
          content: "Crear vistas y acciones de crud de tabla careers para guard Admin: Index, show, create, store, edit, update, destroy. CampusBay"
        },

        {
          id: 2,
          content: "Agregar nuevos parámetros de Career a tabla formulario de Students y Teachers. CampusBay"
        }
      ],

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
    executeEventActive: function () {
      this.eventActive = this.eventActive == false ? true : false;
      return this.eventActive;
    }
  }
}
</script>