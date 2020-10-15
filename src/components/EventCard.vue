<template>
  
  <div class="event">
    <div class="section">
      <button v-if="isAdmin" v-on:click="deleteEvent" class="btn btn-radio min btn-danger">
        <i class="fas fa-minus"></i>
      </button>
    </div>

    <div class="head">
      <div class="title"> {{event.name}} </div>
      <div class="second"> {{date}}  </div>
    </div>

    <div class="main">
      {{ event.description }}
    </div>
  </div>

</template>

<script>
// Template de tarjeta de evento

import moment from 'moment';
import Event from '../js/Event';
import User from '../js/User';
import Validate from '../js/Validate';
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object
    }
  },
  data() {
    return {
      eventReq: new Event,
      userReq: new User,
      users: []
    }
  },
  methods: {

    // Metodo que elimina evento y manda informacion por $emit ('delete-event')
    deleteEvent: async function () {
      await this.eventReq.delete( this.event.id );
      this.$emit('delete-event');
    },

    // Metodo que busca usuarios por proyecto
    getUser: async function () {
      const user = await this.userReq.indexByProject( this.event.project_id );
      this.users = user.data;
    }
  },
  computed: {
    // Entidad computada para mostrar horario de columna time_end
    date: function () {
      return moment.utc( this.event.time_end ).format('HH:MM'); //"10:00 - 12:00"
    },
    
    // Metodo que verifica si el usuario en secion es administrador del proyecto
    isAdmin: function () {
      return Validate.admin( this.userReq.user, this.users );
    }
  },
  async created () {
    await this.getUser();
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/EventCard.scss';
</style>