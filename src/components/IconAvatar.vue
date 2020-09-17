<template>
  <div class="img-avatar">
    <img :src="img" width="120px">
  </div>
</template>

<script>
export default {
  name: 'IconAvatar',
  props: {
    img: {
      type: String,
      default: ''
    },
    type: {
      validator: (value) => [ 'fine', 'warning', 'danger' ].indexOf(value) !== -1
    }
  }
}
</script>