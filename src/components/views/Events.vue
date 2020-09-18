<template>
  <div>

    <div class="head">
      <router-link to="/projects/create" class="btn bor-50">
        <i class="fas fa-plus"></i>
      </router-link>
    </div>

    <div class="main">
      <EventTarget/>
    </div>

  </div>
</template>

<script>
import EventTarget from '../EventTarget';
export default {
  name: 'Event',
  components: {
    EventTarget
  }
}
</script>