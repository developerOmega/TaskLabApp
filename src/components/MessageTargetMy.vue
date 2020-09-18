<template>
  <div class="box-message">
    <IconAvatar
      img="http://placeimg.com/640/480/people"
      type='fine'
    />
    <div class="message">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident velit fuga deserunt minus fugit dolorum ducimus asperiores? Eaque delectus odit id quos modi reprehenderit quaerat tempore voluptatum voluptates cumque?
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';
export default {
  name: 'MessageTargetMy',
  components: {
    IconAvatar
  }
}
</script>