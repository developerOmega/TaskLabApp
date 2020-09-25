<template>

  <div class="card-message-my" v-if="session.email === message.email">
    <IconAvatar
      :img="message.img"
      :type="message.type"
    />
    <div class="message">
      {{ message.content }}
    </div>
  </div>

  <div class="card-message-other" v-else>
    <div class="message">
      {{ message.content }}
    </div>
    <IconAvatar
      :img="message.img"
      :type="message.type"
    />
  </div>

</template>

<script>
import IconAvatar from './IconAvatar';
export default {
  name: 'MessageCard',
  components: {
    IconAvatar
  },
  props: {
    message: {
      type: Object
    }
  },
  data() {
    return {
      session: {
        id: 1,
        name: 'Nayeli Lopez',
        email: 'nayeli@gmail.com'
      }
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/MessageCard.scss';
</style>