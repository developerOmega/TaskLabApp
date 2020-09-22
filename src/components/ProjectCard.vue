<template>
  <div class="card not-padding width-resp-100 template">
    <div class="content pd-20">
      <div class="section-center">
        <router-link to="/" class="title-project fine"> {{ project.name }} </router-link>
      </div>
      <div class="section">
        <div class="color-text"> Descripcion: </div>
        <div class="color-text-second pd-tb-5">
          {{ project.description }}
        </div>
        <div class="section">
          <div class="head-section flex justify-between align-items-center">
            <div class="color-text"> Usuarios </div>
            <button class="btn btn-radio btn-primary">
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <div class="main-section grid col-3 background-gray">
            <div
              v-for="user in users"
              :key="user.id" 
              class="flex"
            >
              <IconAvatar
                :img="user.img"
                :type="user.type"
              />
              <button class="btn btn-radio btn-danger min"> 
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="pd-5 info fine">
      <button class="link-btn fs-15"> 
         <i class="fas fa-ellipsis-v"></i>
      </button>
      <div class="fw-600"> Vigencia </div>
    </div>
  </div>
</template>

<script>
import IconAvatar from './IconAvatar';

export default {
  name: 'ProjectBox',
  components: {
    IconAvatar
  },
  data() {
    return {
      users: [
        {
          id: 1,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 2,
          img: "http://placeimg.com/640/480/people",
          type: 'fine'
        },
        {
          id: 3,
          img: "http://placeimg.com/640/480/people",
          type: 'danger'
        }
      ]
    }
  },
  props: {
    project: {
      type: Object
    }
  },
  updated() {
    console.log(this.users);
  }, 
}
</script>

<style lang="scss">
  @import '../styles/variables.scss';

  .template {
  width: 100%;

    display: grid;
    grid-template-columns: auto 70px;
  }

  .section {
    .head-section {
      padding: 10px 0;
    }

    .main-section {
      padding: 5px;
      border-radius: 10px;
    }
  }

  .info {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    
    // width: 10vh;
    
    display: grid;
    align-content: space-between;

    &.fine {
      background: $primary;
      color: white;
      button {
        color: white;
      }
    }
  }

  .section-center {
    display: flex;
    justify-content: center;
    .title-project {
      font-size: 30px;
      font-weight: 500;
      text-decoration: none;
      &.fine {
        color: $primary;
        &:hover {
          color: $fine-second;
        }
      }
  
      &.warning {
        color: $warning;
        &:hover {
          color: $warning-second;
        }
      }
  
      &.danger {
        color: $danger;
        &:hover {
          color: $danger-second;
        }
      }
    }
  }

  @media screen and ( max-width: 700px ) {
    .card.not-padding.width-resp-100.template {
      border-radius: 0;
    }
    .info {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
}
</style>