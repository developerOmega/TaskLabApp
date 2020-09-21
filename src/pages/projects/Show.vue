<template>
  <div>
    
    <div class="sub-header">
      <button><i class="fas fa-arrow-left"></i></button>
      <h3> 12/07/2020 </h3>
      <button><i class="fas fa-arrow-right"></i></button>
    </div>

    <div class="container">
      <nav>
        <ChatRoom/>
        <Events v-if="eventActive"/>
      </nav>
      <div class="content">
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
      eventActive: false,
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
          id: 1,
          name: 'Tyler Durden',
          email: 'tyler@gmail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'danger'
        },
        {
          id: 1,
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
}
</script>