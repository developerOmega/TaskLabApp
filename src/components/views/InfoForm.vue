<template>
  <form class="box" action="POST">
    <div class="field">
      <div class="input">
        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre">
        <label for="name"> Nombre </label>
      </div>
    </div>

    <div class="field">
      <div class="input">
        <input type="email" id="email" name="email" placeholder="Ingresa tu email">
        <label for="email"> Nombre </label>
      </div>
    </div>

    <button type="submit" class="btn-primary"> Guardar </button>
  </form>
</template>

<script>
export default {
  name: 'InfoForm'
}
</script>