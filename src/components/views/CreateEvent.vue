<template>
  <div class="screen">
    <form action="POST" v-on:submit.prevent="createEvent" class="form card background-white screen-content">
      
      <div class="flex justify-end">
        <button v-on:click="inActive" type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>

      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> Agendar evento </h2>
        </div>

        <div class="field">
          <div class="input">
            <input type="text" id="name" name="name" v-model="name" class="fs-15" placeholder="Ingresar nombre del evento">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description" id="description" v-model="description" class="fs-15" placeholder="Ingresa descripcion"></textarea>
            <label for="description"> Descripcion </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            
            <div class="box-input">
              <i class="fas fa-calendar-alt"></i>
              <input type="datetime-local" id="time-init" v-model="timeEnd" class="fs-15">
            </div>
            
            <label for="time-init"> Horario </label>
          
          </div>
        </div>

        <button type="submit" class="btn btn-primary" > Agendar </button>
      </div>

    </form>
  </div>
</template>

<script>
import Event from '../../js/Event';
import moment from 'moment'; 
export default {
  name: 'CreateEvent',
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      name: "",
      description: "",
      timeEnd: "",
      eventReq: new Event
    }
  },
  methods: {
    inActive: function () {
      this.$emit('create-event', false);
    },
    createEvent: async function () {
      const data = {
        name: this.name,
        description: this.description,
        time_init: new Date().toJSON().slice(0, 19).replace('T', ' '),
        time_end: moment.utc( this.timeEnd ).format('YYYY-MM-DD HH:MM:SS') ,
        project_id: this.project.id
      }
      console.log(data);
      await this.eventReq.post( data );
      this.$emit('update-events');
      this.inActive();
    }
  }
}
</script>