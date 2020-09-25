<template>
  <div class="content content-scroll">
    <div class="head">
      <h2 class="title"> Datos de usuario </h2>
    </div>

    <div id="user-settings" class="main pd-top-20 grid col-2-of-35-auto gap-15">
      <ImgForm/>
      <InfoForm/>
      <div></div>
      <DeleteAccountForm/>
    </div>
  </div>
</template>

<script>

import ImgForm from '../../components/views/ImgForm';
import InfoForm from '../../components/views/InfoForm';
import DeleteAccountForm from '../../components/views/DeleteAccountForm';

export default {
  name: 'PageUserSettings',
  components: {
    ImgForm, InfoForm, DeleteAccountForm
  }
}
</script>