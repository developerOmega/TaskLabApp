<template>
  <form method="POST" v-on:submit.prevent="updateImg" class="form card width-resp-100" enctype="multipart/form-data">
    <div :class="classLoading">
      <LoadingIcon v-if="activeLoading" />
      <IconAvatar
        :img='user.img'
        type='fine'
        size='max'
      />
    </div>
    <div class="field">
      <div class="input-file">
        <label for="img" class="file">
          <i class="fas fa-file-upload"></i>
          <div class="placeholder"> /img </div>
        </label>
        <input type="file" id="img" name="img" multiple ref="img" v-on:change="setImg" >
      </div>
    </div>

    <button type="submit" class="btn btn-primary"> Actualizar </button>
  </form>
</template>

<script>
import IconAvatar from '../IconAvatar';
import LoadingIcon from '../Loading';
import File from '../../js/File';
import User from '../../js/User';
export default {
  name: "ImgForm",
  components: {
    IconAvatar, LoadingIcon
  },
  data() {
    return {
      fileReq: new File,
      userReq: new User,
      user: {},
      img: '',
      imgData: {},
      activeLoading: false,
      classLoading: "" //img-locket
    }
  },
  methods: {
    actLoading: function () {
      this.activeLoading = this.activeLoading ? false : true;
      this.classLoading = this.activeLoading ? "img-locket" : "" 
    },
    updateImg: async function () {
      let user = null;
      this.actLoading()

      try {
        if (this.user.img === '/images/default.png') {
          user = await this.fileReq.upload(this.user.id, this.imgData);
          this.user = user.data;
        }
        else {
          user = await this.fileReq.update(this.user.id, this.imgData);
          this.user = user.user;
        }
        this.userReq.modifyImgBySession(this.user.img);
        this.actLoading();  
      } catch (error) {
        console.error(error);
        this.actLoading();
      }
      
    },
    setImg: function (e) {
      this.img = e.target.value;
      this.imgData = e.target.files[0];
    },
    getUserSession: function () {
      this.user = this.userReq.user;
      this.img = this.user.img;
    }
  },
  created () {
    this.getUserSession();
  }
}
</script>