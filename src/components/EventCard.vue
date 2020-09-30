<template>
  
  <div class="event">
    <div class="section">
      <button v-on:click="deleteEvent" class="btn btn-radio min btn-danger">
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
import moment from 'moment';
import Event from '../js/Event';
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object
    }
  },
  data() {
    return {
      eventReq: new Event
    }
  },
  methods: {
    deleteEvent: async function () {
      await this.eventReq.delete( this.event.id );
      this.$emit('delete-event');
    }
  },
  computed: {
    date: function () {
      return moment.utc( this.event.time_end ).format('HH:MM'); //"10:00 - 12:00"
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/EventCard.scss';
</style>