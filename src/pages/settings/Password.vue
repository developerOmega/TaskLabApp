<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Actualizar contraseña </h2>
    </div>
    <div class="main">
      <form method="POST" class="box">
        <div class="field">
          <div class="input">
            <input type="password" id="password" name="password">
            <label for="password"> Ingresa tu contraseña anterior </label>
          </div>
        </div>

        <div class="field-double">
          <div class="input">
            <input type="password" id="password" name="password">
            <label for="password"> Ingresa tu nueva contraseña  </label>
          </div>

          <div class="input">
            <input type="password" id="password" name="password">
            <label for="password"> Confirma tu contraseña </label>
          </div>
        </div>

        <button class="btn-primary"> Actualizar </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePasswordSettings'
}
</script>