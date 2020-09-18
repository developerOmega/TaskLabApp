<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Datos de usuario </h2>
    </div>

    <div class="main">
      <form method="POST" class="box">
        <IconAvatar
          img='http://placeimg.com/640/480/people'
          type='fine'
        />
        <div class="field">
          <label for="img" class="input-file">
            <i class="fas fa-file-upload"></i>
            <div> /img/default.jpg </div>
          </label>
          <input type="file" id="img" name="img">
        </div>

        <button type="submit" class="btn-primary"> Actualizar </button>
      </form>

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
      
      <div class="box">
        <div class="title-danger fs-20"> ¿Deseas eliminar tu cuenta? </div>
        <button class="btn-danger"> Eliminar cuenta </button>
      </div>

    </div>
  </div>
</template>

<script>
import IconAvatar from '../../components/IconAvatar';

export default {
  name: 'PageUserSettings',
  components: {
    IconAvatar
  }
}
</script>