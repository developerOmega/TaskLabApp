<template>
  <div class="peoject-show">
    <CreateEvent 
      v-if="activeCreateEvent"
      @create-event="formEvent"
    />
    <EditTask 
      v-if="activeEditTask" 
      @edit-task="viewEditTask"
      
    />

    <div class="sub-header">
      <button><i class="fas fa-arrow-left"></i></button>
      <h3> 12/07/2020 </h3>
      <button><i class="fas fa-arrow-right"></i></button>
    </div>

    <div class="container">
      <div class="grid col-2-of-30-70 justify-between">
        <nav class="position-relative">
          <div class="flex justify-between align-items-center background-gray pd-10">
            <div>
              <button v-on:click="activeOptionsProject" class="link-btn fs-20"> <i class="fas fa-ellipsis-v"></i> </button>
              <OptionsProject v-if="optionsProject" @options-project="inactiveOptionProject" />
            </div>
          
            <div class="flex">
              <button v-if="!eventActive" class="link-btn link-primary fs-25 mg-left-15" v-on:click="executeEventActive()"> 
                <i class="fas fa-calendar-alt"></i> 
              </button>
              
              <button v-else-if="eventActive" class="link-btn link-primary fs-25 mg-left-15" v-on:click="executeEventActive()">  
                <i  class="fas fa-comment-alt"></i>
              </button>

              <button id="task_icon" class="btn-task link-btn link-primary fs-25 mg-left-15" v-on:click="executeEventUnactive()"> 
                <i class="fas fa-tasks"></i> 
              </button>
            </div>
          </div>
          <div class="background-white">
            <ChatRoom v-if="eventActive === false"/>
            <Events 
              v-if="eventActive === true"
              @create-event="formEvent"
            />
          </div>
        </nav>
        <div class="content scroll scroll-max-80">
          <form class="post" method="POST">
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
                  <button v-on:click="activeOptionsUserTask" type="button" :class="'btn-post ' + activeStyle"><i class="fas fa-user"></i></button>
                  
                  <button 
                    type="button" 
                    class="mg-left-15 flex btn-avatar btn-delete"
                    v-for="user in usersSelect"
                    :key="user.id"
                  >
                    <IconAvatar
                      v-bind:img="user.img"
                      size="min"
                    />
                    
                  </button>
                  
                  <div v-if="optionsUserTask" class="options-users">
                    <button
                      class="option btn-avatar fine"
                      type="button"
                      v-for="user in users"
                      :key="user.id"
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

          <div class="main">
            <TaskCard
              v-for="task in tasks"
              :key="task.id"
              v-bind:task="task"
              @edit-task="viewEditTask"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '../../components/TaskCard';
import ChatRoom from '../../components/views/ChatRoom';
import Events from '../../components/views/Events';
import CreateEvent from '../../components/views/CreateEvent';
import EditTask from '../../components/views/EditTask';
import IconAvatar from '../../components/IconAvatar';

import OptionsProject from '../../components/OptionsProject';
export default {
  name: 'PageShowProject',
  components: {
    TaskCard,
    ChatRoom,
    Events,
    IconAvatar,
    CreateEvent,
    EditTask,
    OptionsProject
  },
  data() {
    return {
      activeCreateEvent: false,
      activeEditTask: false,
      eventActive: true,
      optionsProject: false,
      optionsUserTask: false,
      tasks: [
        {
          id: 1,
          content: "Crear vistas y acciones de crud de tabla careers para guard Admin: Index, show, create, store, edit, update, destroy. CampusBay",
          status: 'none'
        },
        {
          id: 2,
          content: "Agregar nuevos parámetros de Career a tabla formulario de Students y Teachers. CampusBay",
          status: 'finish'
        },
        {
          id: 3,
          content: "Crear componentes de targets (Formularios de configuracion, chip de imagene, Targets de usuarios, )",
          status: 'stop'
        },
        {
          id: 4,
          content: "Crear comandos en consola para migrar tablas e información en base de datos con yargs",
          status: 'active'
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
    },
    executeEventUnactive: function () {
      this.eventActive = "Task"
      return this.eventActive;
    },
    formEvent: function (activeForm) {
      this.activeCreateEvent = activeForm;
    },
    viewEditTask: function (activeEditTask) {
      this.activeEditTask = activeEditTask;
    },
    activeOptionsProject: function () {
      this.optionsProject = this.optionsProject == false ? true : false;
      return this.optionsProject;
    },
    activeOptionsUserTask: function () {
      this.optionsUserTask = this.optionsUserTask == false ? true : false;
      return this.optionsUserTask;
    },
    inactiveOptionProject: function (activeOptions){
      this.optionsProject = activeOptions;
    }
  },
  computed :{
    activeStyle () {
      return this.optionsUserTask == false ? '' : 'active';
    }
  }
}
</script>