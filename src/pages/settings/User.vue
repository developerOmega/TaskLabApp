<template>
  <div class="content content-scroll">
    <DeleteAccountAlert 
      v-if="activeDeleteAccount"
      @alert-delete-account="alertDeleteAccount"
    />
    <div class="head">
      <h2 class="title"> Datos de usuario </h2>
    </div>

    <div id="user-settings" class="main pd-top-20 grid col-2-of-35-auto gap-15">
      <ImgForm/>
      <InfoForm/>
      <div></div>
      <DeleteAccountForm
        @alert-delete-account="alertDeleteAccount"
      />
    </div>
  </div>
</template>

<script>

import ImgForm from '../../components/views/ImgForm';
import InfoForm from '../../components/views/InfoForm';
import DeleteAccountForm from '../../components/views/DeleteAccountForm';
import DeleteAccountAlert from '../../components/views/DeleteAccountAlert';

// Template de edicion de infromacio nde usuario

export default {
  name: 'PageUserSettings',
  components: {
    ImgForm, InfoForm, DeleteAccountForm, DeleteAccountAlert
  },
  data() {
    return {
      activeDeleteAccount: false
    }
  },
  methods: {

    // Metodo que activa alert para eliminar cuenta
    // Recibe parametros -> activeAlert:boolean=true
    alertDeleteAccount: function (activeAlert) {
      this.activeDeleteAccount = activeAlert;
    }
  }
}
</script>