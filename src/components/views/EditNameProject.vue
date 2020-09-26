<template>
  <div class="screen">
    <form action="POST" class="form card background-white screen-content">
      
      <div class="flex justify-end">
        <button type="button" class="link-btn fs-20"><i class="fas fa-times"></i></button>
      </div>


      <div class="pd-lr-50">
        <div class="head-form">
          <h2 class="title fs-25"> Editar nombre </h2>
        </div>

        <div class="field">
          <div class="input">
            <input type="text" id="name" class="fs-15" name="name" placeholder="Ingresa nuevo nombre">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary"> Guardar </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'EditNameProject'
}
</script>