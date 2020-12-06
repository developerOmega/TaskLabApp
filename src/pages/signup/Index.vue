<template>
  <div class="container-login">
    <form method="POST" v-on:submit.prevent="createAccount" class="card mg-auto form max-width-600">
      <h2 class="title text-center"> Registrarte </h2>

     <div class="field">
        <div class="input">
          <input v-if="flagName" type="text" id="name" class="fs-18" name="name" placeholder="Ingresar nombre" v-model="name">
          <input v-else type="text" id="name" class="fs-18 danger" name="name" placeholder="*Ingresar nombre" v-model="name">
          <label for="name" class="fs-18"> Nombre </label>
        </div>
      </div>

      <div class="field">
        <div class="input">
          <input v-if="flagEmail" type="email" class="fs-18" id="email" name="email" placeholder="Ingresar email" v-model="email">
          <input v-else type="email" class="fs-18 danger" id="email" name="email" placeholder="*Ingresar email" v-model="email">
          <label for="email" class="fs-18"> Email </label>
        </div>
      </div>

      <div class="field field-double">
        <div class="input">
          <input v-if="flagPassword" type="password" class="fs-18" id="password" name="password" placeholder="Ingresar contraseña" v-model="password">
          <input v-else type="password" class="fs-18 danger" id="password" name="password" placeholder="*Ingresar contraseña" v-model="password">
          <label for="password" class="fs-18"> Contraseña </label>
        </div>
        <div class="input">
          <input v-if="flagPassword" type="password" class="fs-18" id="repeat-password" name="repeat_password" placeholder="Confirmar contraseña" v-model="repeatPassword">
          <input v-else type="password" class="fs-18 danger" id="repeat-password" name="repeat_password" placeholder="*Confirmar contraseña" v-model="repeatPassword">
          <label for="password" class="fs-18"> Confirmar </label>
        </div>
      </div>

      <router-link to="/login" class="link"> Ingresar a mi cuenta </router-link>

      <button type="submit" class="btn btn-primary mg-top-20"> Crear </button>
    </form>
  </div>
</template>

<script>
import UserSession from '../../js/UserSession';

// Template de signup

export default {
  name: 'PageIndexSignup',
  data() {
    return {
      data: {},
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      userSession: new UserSession,
      flagName: true,
      flagEmail: true,
      flagPassword: true,
    }
  },
  methods: {

    // Metodo para validar y crear usuarios
    createAccount: async function() {
      // Valida name
      if(this.name == '') {
        this.flagName = false;
      }
      else {
        this.flagName = true;
      }

      // Valida email
      if(this.email == '') {
        this.flagEmail = false;
      }
      else {
        this.flagEmail = true;
      }

      // Valida password
      if (this.password == '') {
        this.flagPassword = false;
      }
      else {
        this.flagPassword = true;
      }

      // Valida confirmacion de password
      if(this.password != this.repeatPassword) {
        this.flagPassword = false;
        this.password = '';
        this.repeatPassword = '';
      }
      else {
        this.flagPassword = true;
      }

      // Si todas las banderas son true, crear nuevo usuario
      if(this.flagName && this.flagEmail && this.flagPassword) {
      
        try {
          this.data = await this.userSession.singup({
            name: this.name, 
            email: this.email, 
            password: this.password, 
            repeat_password: this.repeatPassword, 
            verify: true
          }); 
          console.log(this.data);
          window.location.href = "/";
        } catch (error) {
          console.error(error);  
        }
        
      }
      else {
        this.data = {
          err: "Hay errores"
        }
      }
      return this.data;
      // window.location.href = "/";    

    }
  }
}
</script>