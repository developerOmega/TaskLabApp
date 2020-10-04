<template>
  <form class="form card width-resp-100" method="POST" v-on:submit.prevent="updateUser" >
    <div class="field">
      <div class="input">
        <input type="text" class="fs-15" id="name" name="name" v-model="name" placeholder="Ingresa tu nombre">
        <label for="name"> Nombre </label>
      </div>
    </div>

    <div class="field">
      <div class="input">
        <input type="email" class="fs-15" id="email" name="email" v-model="email" placeholder="Ingresa tu email">
        <label for="email"> Nombre </label>
      </div>
    </div>

    <button type="submit" class="btn btn-primary"> Guardar </button>
  </form>
</template>

<script>
import User from '../../js/User';

// Template de tarjeta para modificar nombre e email de usuario

export default {
  name: 'InfoForm',
  data() {
    return {
      userReq: new User,
      name: '',
      email: ''
    }
  },
  methods: {

    // Metodo que relaiza peticion GET para buscar la secion del usuario en la DB
    getUser: async function() {
      const user = await this.userReq.show( this.userReq.user.id );
      this.name = user.data.name;
      this.email = user.data.email;
    },

    // Metodo que actualiza peticion PUT para actualiza nombre y email de usuario
    updateUser: async function() {
      const body = { name: this.name, email: this.email };
      const user = await this.userReq.update( this.userReq.user.id, body );
      // console.log(user);
      this.userReq.modifyNameAndEmailBySession(user.data.name, user.data.email);
    }
  },
  async created () {
    await this.getUser();
  }
}
</script>