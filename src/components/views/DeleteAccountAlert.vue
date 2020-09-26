<template>
  <div class="screen">
    <form method="POST" class="form card background-white screen-content">
      <div class="flex justify-end">
        <button type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>

      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> ¿Estás seguro de eliminar esta cuenta? </h2>
        </div>
        <div class="color-text-second"> Ingrese su email para confirmar </div>
        <div class="field">
          <div class="input">
            <input type="email" name="email" class="border-danger fs-15" placeholder="Ingresa email">
          </div>
        </div>

        <button class="btn btn-danger"> Confirmar </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DeleteAccountAlert'
}
</script>