<template>
  <form method="POST" class="form card width-resp-100">
    <IconAvatar
      img='http://placeimg.com/640/480/people'
      type='fine'
      size='max'
    />
    <div class="field">
      <div class="input-file">
        <label for="img" class="file">
          <i class="fas fa-file-upload"></i>
          <div class="placeholder"> /img/default.jpg </div>
        </label>
        <input type="file" id="img" name="img">
      </div>
    </div>

    <button type="submit" class="btn btn-primary"> Actualizar </button>
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