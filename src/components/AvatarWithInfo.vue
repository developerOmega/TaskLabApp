<template>
  <button class="icon-avatar-with-info">
    <div class="img-avatar">
      <img :src="user.img" width="120px">
    </div>

    <div class="info">
      <div> {{ user.name }} </div>
      <div class="text-min color-fine"> {{ user.email }} </div>
    </div>  
  </button>
</template>

<script>
export default {
  name: 'AvatarWithInfo',
  props: {
    user: {
      type: Object
    }
  }
}
</script>