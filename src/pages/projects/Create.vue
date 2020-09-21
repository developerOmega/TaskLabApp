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
              <AvatarWithInfo
                v-for="user in users"
                :key="user.id"
                v-bind:user="user"
              />
            </div>

          </div>

          <div class="input-container">
            <AvatarTarget
              v-for="user in usersSelects"
              :key="user.id"
              v-bind:user="user"
            />
          </div>
        </div>
        
        <button type="submit" class="btn-primary" > Crear </button>

      </form>
    </div>

  </div>
</template>

<script>

import AvatarWithInfo from '../../components/AvatarWithInfo';
import AvatarTarget from '../../components/AvatarTarget';

export default {
  name: 'PageCreateProject',
  components: {
    AvatarWithInfo, AvatarTarget
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Nayeli Lopez',
          email: 'naye@mgail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        },
        {
          id: 1,
          name: 'Tyler Durden',
          email: 'tyler@gmail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'danger'
        },
        {
          id: 1,
          name: 'Sofia Velazquez',
          email: 'sofia@mail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ],
      usersSelects: [
        {
          id: 1,
          name: 'Nayeli Lopez',
          email: 'naye@mgail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ]
    }
  },
}
</script>