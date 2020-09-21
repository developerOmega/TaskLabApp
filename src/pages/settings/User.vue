<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Datos de usuario </h2>
    </div>

    <div class="main">
      <ImgForm/>
      <InfoForm/>
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