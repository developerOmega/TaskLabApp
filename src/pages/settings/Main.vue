<template>
  <div class="grid col-2-of-20-80 justify-between">
    <nav> 

      <div class="menu">
        <div class="options">
          <h2 class="title text-center"> Configuracion </h2>

          <router-link to="/settings/user" class="link link-primary fs-20"> Datos de usuario </router-link>
          <router-link to="/settings/password" class="link link-primary fs-20"> Datos de contraseña </router-link>
        </div>

        <router-link to="/" class="link position-end"> Ir a inicio </router-link>
      </div>

    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PageMainSettings'
}
</script>