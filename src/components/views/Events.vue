<template>
  <div class="menu scroll scroll-max-71">

    <div class="head flex justify-end">
      <button v-on:click="activeCreateEvent" class="btn btn-radio btn-primary max">
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
// import Event from '../../js/Event';
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
      eventsData: this.events
    }
  },
  methods: {
    activeCreateEvent: function () {
      this.$emit('create-event', true);
    },
    deleteEvent: async function () {
      // const eventReq = new Event;
      // const events = await eventReq.indexPerProject(this.$route.params.id);
      // this.eventsData = events.data;
      this.$emit('delete-event');
    }
  },
  async created() {
    console.log(this.eventsData);
    // await this.deleteEvent();
    // this.eventsData = this.events;
  },
}
</script>