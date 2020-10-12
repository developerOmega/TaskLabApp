<template>
  <div class="peoject-show">
    <CreateEvent 
      v-if="activeCreateEvent"
      @create-event="formEvent"
      @update-events="getEvents"
      v-bind:project="project"
    />
    <EditTask 
      v-if="activeEditTask" 
      @edit-task="viewEditTask"
      @update-task="updateTask"
      v-bind:task="editTask"
    />

    <div class="sub-header">
      <button v-on:click="restDateTime"><i class="fas fa-arrow-left"></i></button>
      <h3> {{ dateTime }} </h3>
      <button v-on:click="addDateTime" ><i class="fas fa-arrow-right"></i></button>
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
              @delete-event="getEvents"
              v-bind:events="events"
            />
          </div>
        </nav>
        <div class="content scroll scroll-max-80">
          <form class="post" method="POST" v-on:submit.prevent="createTask">
            <textarea class="post-content post-height-max" name="description" id="description" placeholder="Escribir tarea" v-model="description"></textarea>
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

          <div class="main">
            <TaskCard
              v-for="task in tasks"
              :key="task.id"
              v-bind:task="task"
              @edit-task="viewEditTask"
              @get-task-edit="getEditTask"
              @update-task="updateTask"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { sumDays, restDays } from '../../js/DateTime';

import TaskCard from '../../components/TaskCard';
import ChatRoom from '../../components/views/ChatRoom';
import Events from '../../components/views/Events';
import CreateEvent from '../../components/views/CreateEvent';
import EditTask from '../../components/views/EditTask';
import IconAvatar from '../../components/IconAvatar';
import OptionsProject from '../../components/OptionsProject';

import Task from '../../js/Task';
import Project from '../../js/Project';
import User from '../../js/User';
import UserTask from '../../js/UserTask';
import Event from '../../js/Event';

// Template de show de proyecto

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

      taskReq: new Task,
      userTaskReq: new UserTask,
      project: {},
      editTask: {},
      tasks: [],
      users: [],
      events: [],
      usersSelect: [],

      description: '',
      timeEnd: '',

      dateTimeNow:  moment( new Date().toJSON().slice(0, 19).replace('T', ' ') ).format('DD/MM/YYYY')
    }
  },
  methods: {
    // Metodo de activa nav de eventos
    executeEventActive: function () {
      this.eventActive = this.eventActive == false ? true : false;
      return this.eventActive;
    },

    // Metodo de desactiva nav de eventos    
    executeEventUnactive: function () {
      this.eventActive = "Task"
      return this.eventActive;
    },

    // Metodo de activa el formulario del evento
    // Recibe parametros -> activeForm:boolean=true
    formEvent: function (activeForm) {
      this.activeCreateEvent = activeForm;
    },

    // Metodo que activa el formulario para editar tarea
    // Recibe parametros -> activeEditTask:boolean=true
    viewEditTask: function (activeEditTask) {
      this.activeEditTask = activeEditTask;
    },

    // Metodo que activa las opciones del proyecto ( informacio de status )
    activeOptionsProject: function () {
      this.optionsProject = this.optionsProject == false ? true : false;
      return this.optionsProject;
    },

    // Metodo que activa las opciones de usuarios del formulario de tareas
    activeOptionsUserTask: function () {
      this.optionsUserTask = this.optionsUserTask == false ? true : false;
      return this.optionsUserTask;
    },

    // Metodo que desactiva las opciones de proyecto
    // Recibe parametros -> activeOptions:boolean=false
    inactiveOptionProject: function (activeOptions){
      this.optionsProject = activeOptions;
    },

    // Metodo realiza peticion GET para buscar proyecto por id
    getProject: async function () {
      let projectReq = new Project;
      let project = await projectReq.show(this.$route.params.id);
      this.project = !project.data ? {} : project.data;
    },

    // Metodo que busca tareas por proyecto
    getTasks: async function () {
      this.tasks = [];
      const tasks = await this.taskReq.indexByProject(this.project.id);
      this.tasks = !tasks.data ? [] : tasks.data;
      return this.tasks;
    },

    // Metodo que busca usuarios por proyecto
    getUsers: async function () {
      const userReq = new User;
      const users = await userReq.indexByProject( this.project.id );
      this.users = !users.data ? [] : users.data; 
    },

    // Metodo que edita tarea
    // Recibe parametros -> task:object (datos de tarea editada)
    getEditTask: function ( task ) {
      this.editTask = task;
    },

    // Buscar eventos por proyecto
    getEvents: async function () {
      const eventReq = new Event;
      const events = await eventReq.indexPerProject( this.project.id );
      this.events = !events.data ? [] : events.data;
    },

    // Agregar usuarios a propiedad usersSelect
    addUserSelect: function (user) {
      this.usersSelect.push(user);
      this.users.splice(this.users.indexOf(user), 1);
    },

    // Eliminar usuarios a propiedad usersSelect
    dropUserSelect: function (user) {
      this.usersSelect.splice(this.usersSelect.indexOf(user), 1);
      this.users.push(user);
    },

    // Metodo que realiza peticion POST para crear nueva tarea
    createTask: async function () {
      const body = {
        description: this.description,
        status: 'none',
        time_init: new Date().toJSON().slice(0, 19).replace('T', ' '),
        time_end: this.timeEnd,
        project_id: this.project.id 
      }
      let task = await this.taskReq.post(body);
      // this.tasks.push( task.data );
      this.tasks.splice(0,0, task.data );
      this.createUserTask(task.data.id);
    },
    

    // Metodo que crea relacion entre usuarios y tareas
    // Recibe parametros -> taskId:number (id de tarea)
    createUserTask: function ( taskId ) {

      this.usersSelect.forEach(async (user) => {
        console.log(user.id,taskId);
        await this.userTaskReq.post( user.id, taskId );
      });
    },

    // Metodo que actualiza tareas al momento de modificar tarea    
    updateTask: async function () {
      await this.getTasks();
    },

    addDateTime: function () {
      let date = sumDays( this.dateTimeNow , 1);
      this.dateTimeNow = moment(date).format('DD/MM/YYYY')
    },
    restDateTime: function () {
      let date = restDays(this.dateTimeNow , 1);
      this.dateTimeNow = moment(date).format('DD/MM/YYYY')
    }
  },
  computed :{
    activeStyle () {
      return this.optionsUserTask == false ? '' : 'active';
    },
    dateTime: function () {
      return this.dateTimeNow;
    }
  },
  async created () {
    await this.getProject();
    await this.getTasks();
    await this.getUsers();
    await this.getEvents();
    console.log(this.users);
  }
}
</script>