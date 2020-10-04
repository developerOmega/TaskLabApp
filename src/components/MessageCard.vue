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
import Model from '../js/Model';

// Template de tarjeta de mensaje

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
      session: {}
    }
  },
  methods: {
    // Metodo que busca la secion del usuario
    getUserSession: async function () {
      const model = new Model;
      this.session = model.user;
    }
  },
  async created () {
    await this.getUserSession();
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/MessageCard.scss';
</style>