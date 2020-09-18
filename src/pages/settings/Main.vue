<template>
  <div class="container">
    <nav> 

      <h2 class="title"> Configuracion </h2>

      <router-link to="/settings/user" class="btn"> Datos de usuario </router-link>
      <router-link to="/settings/password" class="btn"> Datos de contraseña </router-link>

      <router-link to="/" class="link position-end"> Ir a inicio </router-link>

    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PageMainSettings'
}
</script>