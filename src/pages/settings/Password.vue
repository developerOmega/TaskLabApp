<template>
  <div class="content content-scroll">
    <div class="head">
      <h2 class="title"> Actualizar contraseña </h2>
    </div>
    <div class="main pd-top-20">
      <form method="POST" class="form card">
        <div class="field">
          <div class="input">
            <input type="password" id="password" name="password" placeholder="**************">
            <label for="password"> Ingresa tu contraseña anterior </label>
          </div>
        </div>

        <div class="field field-double">
          <div class="input">
            <input type="password" id="password" name="password" placeholder="**************">
            <label for="password"> Ingresa tu nueva contraseña  </label>
          </div>

          <div class="input">
            <input type="password" id="password" name="password" placeholder="**************">
            <label for="password"> Confirma tu nueva contraseña </label>
          </div>
        </div>

        <button class="btn btn-primary"> Actualizar </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePasswordSettings'
}
</script>