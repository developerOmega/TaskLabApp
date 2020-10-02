<template>
  <div class="avatar-card card not-padding">
    <IconAvatar
      v-bind:img="user.img"
      v-bind:type="user.type"
    />
    <div class="info">
      <div class="section">
        <div> {{ user.name }} </div>
        <div v-if="user.id !== userSession.id" class="input-checkbox">
          <input 
            type="checkbox" 
            :id="'admin' + user.id" name="admin" 
            value="1"
            :checked="user.id === userSession.id" 
            v-on:change="userAdmin"
          >
          <label :for="'admin' + user.id"> Admin </label>
        </div>
      </div>
      <button type="button" v-on:click="dropUser" v-if="user.id !== userSession.id" class="btn btn-radio min btn-danger"> 
        <i class="fas fa-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';
import Model from '../js/Model';
export default {
  name: 'AvatarCard',
  components: {
    IconAvatar
  },
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      userSession: []
    }
  },
  methods: {
    userAdmin: function(e) {      
      this.$emit('admin-user', {user: this.user, check: e.target.checked });
    },
    dropUser: function() {
      this.$emit('drop-user', this.user);
    }
  },
  async created () {
    const model = new Model;
    const user = model.user;
    this.userSession = user; 
  }
}
</script>

<style lang="scss">
  @import '../styles/vueComponents/AvatarCard.scss';
</style>