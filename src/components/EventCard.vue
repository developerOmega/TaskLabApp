<template>
  
  <div class="event">
    <div class="section">
      <button class="btn btn-radio min btn-danger">
        <i class="fas fa-minus"></i>
      </button>
    </div>

    <div class="head">
      <div class="title"> Evento #1 </div>
      <div class="second"> 10:00 - 12:00 </div>
    </div>

    <div class="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, obcaecati excepturi facere optio sit ipsum soluta nisi et! Quia modi dolor accusamus necessitatibus reprehenderit, esse perferendis id accusantium quam rem?
    </div>
  </div>

</template>

<script>
export default {
  name: 'EventCard'
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/EventCard.scss';
</style>