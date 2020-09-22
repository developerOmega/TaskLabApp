<template>
  <div class="content">
    <div class="head">
      <h2 class="title"> Nuevo proyecto </h2>
      <router-link to="/" class="btn btn-radio max btn-primary">
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    
    <div class="main pd-tb-25">
      <form method="POST" class="form card max-width-900">

        <div class="field">
          <div class="input">
            <input type="text" class="fs-15" id="name" name="name" placeholder="Ingresa tu nombre">
            <label for="name"> Nombre </label>
          </div>
        </div>

        <div class="field">
          <div class="input">
            <textarea name="description"  id="description" class="fs-15" placeholder="Ingresa descripcion"></textarea>
            <label for="description"> Descripcion </label>
          </div>
        </div>

        <div class="field">
          
          <div class="input">

            <input type="search" name="users" class="fs-15" id="user" placeholder="Buscar usuario">
            <label for="user"> Usuario </label>

            <div class="search-container" v-if="searchUserActive">
              <AvatarWithInfo
                v-for="user in users"
                :key="user.id"
                v-bind:user="user"
              />
            </div>

          </div>

          <div class="input-container">
            <AvatarCard
              v-for="user in usersSelects"
              :key="user.id"
              v-bind:user="user"
            />
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary" > Crear </button>

      </form>
    </div>

  </div>
</template>

<script>

import AvatarWithInfo from '../../components/AvatarWithInfo';
import AvatarCard from '../../components/AvatarCard';

export default {
  name: 'PageCreateProject',
  components: {
    AvatarWithInfo, AvatarCard
  },
  data() {
    return {
      searchUserActive: false,
      users: [
        {
          id: 1,
          name: 'Nayeli Lopez',
          email: 'naye@mgail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        },
        {
          id: 2,
          name: 'Tyler Durden',
          email: 'tyler@gmail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'danger'
        },
        {
          id: 3,
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
        },
        {
          id: 3,
          name: 'Sofia Velazquez',
          email: 'sofia@mail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine'
        }
      ]
    }
  },
}
</script>