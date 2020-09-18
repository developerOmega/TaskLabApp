<template>
  <div class="container-login">
    <header>
      <h2> Logo </h2>
      <img src="imagen" width="120px">
    </header>

    <form method="POST" class="box">
      <h2 class="title"> Login </h2>
      <div class="field">
        <div class="input">
          <input type="email" id="email" name="email" placeholder="Ingresa tu email">
          <label for="email"> Email </label>
        </div>
      </div>

      <div class="field">
        <div class="input">
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
          <label for="password"> Contraseña </label>
        </div>
      </div>

      <button type="submit" class="btn bc-primary"> Ingresar </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PageIndexLogin'
}
</script>