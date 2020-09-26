<template>
  <div class="screen">
    <form action="POST" class="form card background-white screen-content">
      
      <div class="flex justify-end">
        <button v-on:click="inActive" type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>

      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> Agendar evento </h2>
        </div>

        <div class="field">
          <div class="input">
            <input type="text" id="name" name="name" class="fs-15" placeholder="Ingresar nombre del evento">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description" id="description" class="fs-15" placeholder="Ingresa descripcion"></textarea>
            <label for="description"> Descripcion </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            
            <div class="box-input">
              <i class="fas fa-calendar-alt"></i>
              <input type="datetime-local" id="time-init" class="fs-15">
            </div>
            
            <label for="time-init"> Horario </label>
          
          </div>
        </div>

        <button type="submit" class="btn btn-primary" > Agendar </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateEvent',
  methods: {
    inActive: function () {
      this.$emit('create-event', false);
    }
  }
}
</script>