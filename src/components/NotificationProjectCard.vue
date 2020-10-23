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

      <div 
        v-for="task in tasks" 
        :key="task.id"
        :class="'option ' + verifyStatusClass(task.status)" 
      > 
        <div class="task">{{ taskWhitLimited(task.description) }}</div>
        <div class="status"> <i :class="verifyStatusIcon(task.status)"></i> </div>
      </div>

    </div>

  </div>
</template>

<script>

// Card de notificaciones, esta agregado en la parte superior del Card de proyectos

export default {
  name: "NotificationProjectCard",
  props: {
    tasks: {
      type: Array
    }
  },
  methods: {
    // Metodo que crea un evento personalizado para desactivar Card de notificaciones
    unactiveNotification: function () {
      this.$emit('unactive-notification');
    },

    // Metodo que retorna tareas con un limite de 35 caracteres
    // Recibe parametro -> task:string
    taskWhitLimited: function(task) {
      let taskArr = task.split('');
      if(taskArr.length > 35) {
        taskArr.splice(34, taskArr.length - 34, ' . . .' );
        task = taskArr.join('');
      }
      return task;
    },

    // Metodo administra clases de div de tarea
    // Recibe parametro -> status:string ( none, fine, error, warning )
    verifyStatusClass: function ( status = 'none' ) {
      switch(status) {
        case 'fine':
          return 'option-fine'

        case 'error':
          return 'option-danger'
        
        case 'warning':
          return 'option-warning'

        default: 
          return ''
      }
    },

    // Metodo que verifica icono de status de tarea
    // Recibe parametro -> status:string ( none, fine, error, warning )    
    verifyStatusIcon: function (status = 'none') {
      switch(status) {
        case 'fine':
          return 'fas fa-check'

        case 'error':
          return 'fas fa-times'
        
        case 'warning':
          return 'fas fa-exclamation-triangle'

        default: 
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/NotificationProjectCard.scss';
</style>