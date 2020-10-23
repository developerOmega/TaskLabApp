<template>
  <div class="menu scroll scroll-max-71">

    <div class="head flex justify-end">
      <button v-if="isAdmin" v-on:click="activeCreateEvent" class="btn btn-radio btn-primary max">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="main">
      <EventCard
        v-for="event in events"
        :key="event.id"
        v-bind:event="event"
        @delete-event="deleteEvent"
      />
    </div>

  </div>
</template>

<script>
// Template que muestra todos los eventos de un proyecto

import EventCard from '../EventCard';
import User from '../../js/User';
import Validate from '../../js/Validate';
export default {
  name: 'Event',
  components: {
    EventCard
  },
  props: {
    events: {
      type: Array
    }
  },
  data() {
    return {
      eventsData: this.events,
      userReq: new User,
      users: [],
    }
  },
  methods: {

    // Metodo que manda informacion al $emmit 'create-event' para activar formulrio para crear evento    
    activeCreateEvent: function () {
      this.$emit('create-event', true);
    },

    // Metodo que manda informacion al $emmit 'delete-event' para eliminar evento    
    deleteEvent: async function () {
      this.$emit('delete-event');
    },

    // Metodo que busca usuarios por proyecto
    getUsers: async function () {
      const users = await this.userReq.indexByProject( this.$route.params.id );
      this.users = users.data; 
    } 
  },
  computed: {
    // Metodo que verifica si el usuario en sesion es administrador del proyecto
    isAdmin: function () {
      return Validate.admin(this.userReq.user, this.users);
    }
  },
  async created() {
    await this.getUsers();
  }
}
</script>