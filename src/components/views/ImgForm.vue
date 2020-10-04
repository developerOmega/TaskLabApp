<template>
  <form method="POST" v-on:submit.prevent="updateImg" class="form card width-resp-100" enctype="multipart/form-data">
    <IconAvatar
      :img='user.img'
      type='fine'
      size='max'
    />
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
import File from '../../js/File';
import User from '../../js/User';

// Template de tarjeta para modificar imagen de usuario

export default {
  name: "ImgForm",
  components: {
    IconAvatar
  },
  data() {
    return {
      fileReq: new File,
      userReq: new User,
      user: {},
      img: '',
      imgData: {}
    }
  },
  methods: {

    // Metodo que reliza una peticion POST/PUT para subir/actuzar una nueva imagen 
    updateImg: async function () {
      let user = null;

      if (this.user.img === '/images/default.png') {
        user = await this.fileReq.upload(this.user.id, this.imgData);
        this.user = user.data;
      }
      else {
        user = await this.fileReq.update(this.user.id, this.imgData);
        this.user = user.user;
      }
      
      this.userReq.modifyImgBySession(this.user.img);
    },

    // Metodo que agrega una informacion de imagen a propiedades img e imgData
    // Recibe parametros -> e:objectForm (datos de formulario)
    setImg: function (e) {
      this.img = e.target.value;
      this.imgData = e.target.files[0];
    },

    // Metodo busca img del usuario
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