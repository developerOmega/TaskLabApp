<template>
  <div class="menu scroll scroll-max-71">

    <div class="head flex justify-end">
      <router-link to="/projects/create" class="btn btn-radio btn-primary max">
        <i class="fas fa-plus"></i>
      </router-link>
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
  }
}
</script>