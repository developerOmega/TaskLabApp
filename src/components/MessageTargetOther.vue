<template>
  <div class="card-message-other">
    
    <div class="message">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident velit fuga deserunt minus fugit dolorum ducimus asperiores? Eaque delectus odit id quos modi reprehenderit quaerat tempore voluptatum voluptates cumque?
    </div>
    
    <IconAvatar
      img="http://placeimg.com/640/480/people"
      type='fine'
    />

  </div>
</template>

<script>
import IconAvatar from './IconAvatar';
export default {
  name: 'MessageTargetOther',
  components: {
    IconAvatar
  }
}
</script>

<style lang="scss">
  @import '../styles/variables.scss';
  
  .card-message-other {
    display: flex;
    margin-bottom: 20px;
    
    .img-avatar {
      padding-left: 25px;
    }
    .message {
      background: white;
      padding: 10px;
      font-size: 15px;
      color: $text-primary;
      position: relative;
      border-radius: 5px;
      border-top-right-radius: 0;
      -webkit-box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);
      -moz-box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);
      box-shadow: -1px 3px 16px -1px rgba(79,79,79,1);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: -15px;
        border-left: 15px solid white;
        border-bottom: 25px solid transparent;
        -webkit-filter: drop-shadow(1px 1px 1px rgba(79,79,79,1));
        filter: drop-shadow(.5px 1px .5px rgba(79,79,79,1));

      }
    }
  }
  </style>