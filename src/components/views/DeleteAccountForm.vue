<template>
  <form method="POST" v-on:submit.prevent="deleteAccount" class="form card width-resp-100">
    <div class="color-danger text-center fs-20"> ¿Deseas eliminar tu cuenta? </div>
    <button class="btn btn-danger"> Eliminar cuenta </button>
  </form>
</template>

<script>

// Template de tarjeta para eliminar cuenta

export default {
  name: 'DeleteAccountForm',
  methods: {

    // Metodo que manda informacion al $emit 'alert-delete-account' para activar template de Alerta
    deleteAccount: function () {
      this.$emit('alert-delete-account', true);
    }
  }
}
</script>