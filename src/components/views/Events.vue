<template>
  <div class="menu scroll scroll-max-71">

    <div class="head flex justify-end">
      <button v-on:click="activeCreateEvent" class="btn btn-radio btn-primary max">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="main">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>

  </div>
</template>

<script>
import EventCard from '../EventCard';
export default {
  name: 'Event',
  components: {
    EventCard
  },
  methods: {
    activeCreateEvent: function () {
      this.$emit('create-event', true);
    }
  }
}
</script>