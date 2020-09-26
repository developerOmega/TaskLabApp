<template>
  <div class="options-project">
    <button v-on:click="inActive" class="link-btn fs-20"> <i class="fas fa-ellipsis-v"></i> </button>

    <div class="head">
      <div class="title fs-20"> Estado </div>
    </div>
    <div class="form content">
      <div class="field">
        
        <div class="input-radio">
          <input type="radio" id="active" name="status" value="12" >
          <label for="active"> Vigente </label>
        </div>

        <div class="input-radio danger">
          <input type="radio" id="finish" name="status" value="12" >
          <label for="finish"> Finalizar </label>
        </div>

        <div class="input-radio warning">
          <input type="radio" id="stop" name="status" value="12" >
          <label for="stop"> Suspender </label>
        </div>

      </div>
    </div>

    <div class="flex justify-center">
      <router-link to="/" class="btn-link link-primary text-center"> Ir a inicio </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsProject',
  methods: {
    inActive: function () {
      this.$emit('options-project', false);
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/OptionsProject.scss';  
</style>