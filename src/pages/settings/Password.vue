<template>
  <div class="content content-scroll">
    <div class="head">
      <h2 class="title"> Actualizar contraseña </h2>
    </div>
    <div class="main pd-top-20">
      <form method="POST" v-on:submit.prevent="updatePassword" class="form card">
        <div class="field">
          <div class="input">
            <input type="password" id="old_password" name="old_password" v-model="oldPassword" placeholder="**************">
            <label for="old_password"> Ingresa tu contraseña anterior </label>
          </div>
        </div>

        <div class="field field-double">
          <div class="input">
            <input type="password" id="password" name="password" v-model="password" placeholder="**************">
            <label for="password"> Ingresa tu nueva contraseña  </label>
          </div>

          <div class="input">
            <input type="password" id="confirm_password" name="confirm_password" v-model="confirmPassword" placeholder="**************">
            <label for="confirm_password"> Confirma tu nueva contraseña </label>
          </div>
        </div>

        <button class="btn btn-primary"> Actualizar </button>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../../js/User';
export default {
  name: 'PagePasswordSettings',
  data() {
    return {
      userReq: new User,
      oldPassword: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    updatePassword: async function () {

      if ( this.password !== this.confirmPassword ) {
        let data = {
          message: "El password no coincide con con la confirmacion"
        }
        console.log(data);
        return;
      }

      const user = await this.userReq.updatePassword({
        old_password: this.oldPassword,
        new_password: this.password,
      });

      console.log(user);

    }
  }
  
}
</script>