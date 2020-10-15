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
    activeCreateEvent: function () {
      this.$emit('create-event', true);
    },
    deleteEvent: async function () {
      this.$emit('delete-event');
    },
    getUsers: async function () {
      const users = await this.userReq.indexByProject( this.$route.params.id );
      this.users = users.data; 
    } 
  },
  computed: {
    isAdmin: function () {
      return Validate.admin( this.userReq.user, this.users )
    }
  },
  async created() {
    await this.getUsers();
  }
}
</script>