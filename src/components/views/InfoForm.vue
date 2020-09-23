<template>
  <form class="form card width-resp-100" action="POST">
    <div class="field">
      <div class="input">
        <input type="text" class="fs-15" id="name" name="name" placeholder="Ingresa tu nombre">
        <label for="name"> Nombre </label>
      </div>
    </div>

    <div class="field">
      <div class="input">
        <input type="email" class="fs-15" id="email" name="email" placeholder="Ingresa tu email">
        <label for="email"> Nombre </label>
      </div>
    </div>

    <button type="submit" class="btn btn-primary"> Guardar </button>
  </form>
</template>

<script>
export default {
  name: 'InfoForm'
}
</script>