<template>
  <div class="tag-option">
    <div class="img-avatar">
      <img :src="user.img" width="120px">
    </div>

    <div class="info">
      <div> {{ user.name }} </div>
      <div class="input-checkbox">
        <input type="checkbox" id="admin" name="admin" value="12" >
        <label for="admin"> Admin </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarTarget',
  props: {
    user: {
      type: Object
    }
  }
}
</script>