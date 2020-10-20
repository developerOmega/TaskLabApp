<template>
  <div class="notification">
    <div class="flex justify-between align-items-center">
      <div>
        <i class="fas fa-tasks"></i>
      </div>

      <button v-on:click="unactiveNotification" class="btn btn-radio btn-danger min">
        <i class="fas fa-minus"></i>
      </button>
    </div>

    <div class="options">

      <div class="option"> 
        <div class="task">Agregar request de Api</div>
      </div>

      <div class="option option-fine">
        <div class="task">Documentar peticionar de tabla rela...</div> 
         <div class="status"> <i class="fas fa-check"></i> </div>
      </div>

      <div class="option option-warning">
        <div class="task">Documentar peticionar de tabla rela...</div> 
        <div class="status"> <i class="fas fa-exclamation-triangle"></i> </div>
      </div>

      <div class="option option-danger">
        <div class="task">Documentar peticionar de tabla rela...</div> 
        <div class="status"> <i class="fas fa-times"></i> </div>
      </div>      
    </div>

  </div>
</template>

<script>
export default {
  name: "NotificationProjectCard",
  methods: {
    unactiveNotification: function () {
      this.$emit('unactive-notification');
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/NotificationProjectCard.scss';
</style>