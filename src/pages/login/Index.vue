<template>
  <div class="container-login">
    <header>
      <img class="logo" src="/images/logo.png">
    </header>

    <form method="POST" class="card form max-width-600">
      <h2 class="title text-center"> Login </h2>
      <div class="field">
        <div class="input">
          <input type="email" class="fs-18" id="email" name="email" placeholder="Ingresa tu email">
          <label for="email" class="fs-18"> Email </label>
        </div>
      </div>



      <div class="field pd-top-20">
        <div class="input">
          <input type="password" class="fs-18" id="password" name="password" placeholder="Ingresa tu contraseña">
          <label for="password" class="fs-18"> Contraseña </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mg-top-20"> Ingresar </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PageIndexLogin'
}
</script>

<style lang="scss">
  
</style>