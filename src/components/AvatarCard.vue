<template>
  <div class="avatar-card card not-padding">
    <IconAvatar
      v-bind:img="user.img"
      v-bind:type="user.type"
    />
    <div class="info">
      <div class="section">
        <div> {{ user.name }} </div>
        <div class="input-checkbox">
          <input type="checkbox" :id="'admin' + user.id" name="admin" value="12" >
          <label :for="'admin' + user.id"> Admin </label>
        </div>
      </div>
      <button type="button" class="btn btn-radio min btn-danger"> 
        <i class="fas fa-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';
export default {
  name: 'AvatarCard',
  components: {
    IconAvatar
  },
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/AvatarCard.scss';
</style>