<template>
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
</template>

<script>
import IconAvatar from '../IconAvatar';
export default {
  name: "ImgForm",
  components: {
    IconAvatar
  }
}
</script>