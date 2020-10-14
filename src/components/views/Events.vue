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
import EventCard from '../EventCard';
import Event from '../../js/Event';

export default {
  name: 'Event',
  components: {
    EventCard
  },
  props: {
    events: {
      type: Array
    },
     usersByProject: {
      type: Array
    }
  },
  data() {
    return {
      eventsData: this.events,
      eventReq: new Event
    }
  },
  methods: {
    activeCreateEvent: function () {
      this.$emit('create-event', true);
    },
    deleteEvent: async function () {
      this.$emit('delete-event');
    }
  },
  computed: {
      isAdmin: function () {
      const userSession = this.eventReq.user;
      const userAdmin = this.usersByProject.filter( user => user.admin == true );
      const userValidate = userAdmin.filter( user => user.id === userSession.id);
      return !userValidate[0] ? false : true;
    }
  }
}
</script>