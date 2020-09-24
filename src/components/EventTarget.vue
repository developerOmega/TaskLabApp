<template>
  
  <div class="event">
    <div class="section">
      <button class="btn btn-radio min btn-danger">
        <i class="fas fa-minus"></i>
      </button>
    </div>

    <div class="head">
      <div class="title"> Evento #1 </div>
      <div class="second"> 10:00 - 12:00 </div>
    </div>

    <div class="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, obcaecati excepturi facere optio sit ipsum soluta nisi et! Quia modi dolor accusamus necessitatibus reprehenderit, esse perferendis id accusantium quam rem?
    </div>
  </div>

</template>

<script>
export default {
  name: 'EventTarget'
}
</script>

<style lang="scss">
  @import '../styles/variables.scss';
  .event {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-bottom: 3px solid $primary;
    &:nth-child(1) {
      margin-top: 20px;
    }
    .section {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 25px;
        font-weight: 500;
      }
      .second {
        color: $text-second;
        font-size: 20px;
      }
    }
    .btn-dange {
      text-align: end;
    }
  }
</style>