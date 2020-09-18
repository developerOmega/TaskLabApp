<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Nuevo proyecto </h2>
      <router-link to="/" class="btn bor-50">
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    
    <div class="main">
      <form method="POST" class="box">

        <div class="field">
          <div class="input">
            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description" id="description" class="bg-gray" placeholder="Ingresa descripcion" cols="30" rows="10"></textarea>
            <label for="name"> Descripcion </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <input type="search" name="users" id="user" placeholder="Buscar usuario">
            <label for="user"> Usuario </label>

            <div class="search">
              <div class="icon-avatar-with-info">
                <div class="img-avatar">
                  <img src="http://placeimg.com/640/480/people" width="120px">
                </div>

                <div class="info">
                  <div> Nayeli Lopez </div>
                  <div class="text-min color-fine"> nayeli@main.com </div>
                </div>  
              </div>
            </div>
          </div>

          <div class="input-container">
            <div class="tag-option">
              
              <div class="img-avatar">
                <img src="http://placeimg.com/640/480/people" width="120px">
              </div>

              <div class="info">
                <div> Yo </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="admin" name="admin" value="12" >
                  <label for="admin"> Admin </label>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <button type="submit" class="btn-primary" > Crear </button>

      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PageCreateProject'
}
</script>