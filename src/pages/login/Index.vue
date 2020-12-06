<template>
  <div class="container-login">
    <header>
      <img class="logo" src="/images/logo.png">
    </header>

    <form method="POST" v-on:submit.prevent="sessionInit" class="card mg-auto form max-width-600">
      <h2 class="title text-center"> Login </h2>
      <div class="field">
        <div class="input">
          <input type="email" class="fs-18" id="email" name="email" placeholder="Ingresa tu email" v-model="email">
          <label for="email" class="fs-18"> Email </label>
        </div>
      </div>

      <div class="field pd-top-20">
        <div class="input">
          <input type="password" class="fs-18" id="password" name="password" placeholder="Ingresa tu contraseña" v-model="password">
          <label for="password" class="fs-18"> Contraseña </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mg-top-20"> Ingresar </button>
    </form>
  </div>
</template>

<script>
import UserSession from '../../js/UserSession';

export default {
  name: 'PageIndexLogin',
  data() {
    return {
      data: {},
      email: '',
      password: '',
      userSession: new UserSession
    }
  },
  methods: {
    sessionInit: async function () {
      this.data = await this.userSession.login(this.email, this.password);
      console.log(this.data);
      // this.$router.push('/');
      window.location.href = "/";    
      return this.data;
    }
  }
}
</script>

<style lang="scss">
  
</style>