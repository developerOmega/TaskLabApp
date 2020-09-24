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
  name: 'MessageTargetMy',
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
        email: 'naye@gmail.com'
      }
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/variables.scss';

  .card-message-other, .card-message-my {    
    display: flex;
    margin-bottom: 20px;
    .message {
      padding: 10px;
      font-size: 15px;
      color: $text-primary;
      position: relative;
      border-radius: 5px;
      -webkit-box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);
      -moz-box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);
      box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);
    }
  } 
  
  .card-message-my {
    .img-avatar {
      padding-right: 25px;
    }
    .message {
      background: $primary;
      border-top-left-radius: 0;
      

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        border-left: 15px solid transparent;
        border-top: 25px solid $primary;
      }
    }
  }
</style>