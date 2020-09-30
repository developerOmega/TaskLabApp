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
    getUser: async function() {
      const user = await this.userReq.show( this.userReq.user.id );
      this.name = user.data.name;
      this.email = user.data.email;
    },
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