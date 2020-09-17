<template>
  <div class="menu open">
    <div class="info">
      <div class="name-user"> {{name}} </div>
      <IconAvatar
        :img="img"
        :type="type"
      />
    </div>
    <div class="options">
      <button><i class="fas fa-cog"></i></button>
      <button><i class="fas fa-sign-out-alt"></i></button>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

export default {
  name: 'OptionsHeader',
  components: {
    IconAvatar
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'fine'
    }
  }
}
</script>