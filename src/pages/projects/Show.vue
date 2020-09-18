<template>
  <div>
    
    <div class="sub-header">
      <button><i class="fas fa-arrow-left"></i></button>
      <h3> 12/07/2020 </h3>
      <button><i class="fas fa-arrow-right"></i></button>
    </div>

    <div class="container">
      <nav>
        <ChatRoom/>
        <Events v-if="eventActive"/>
      </nav>
      <div class="content">
        <form method="POST">
          <textarea name="content" id="content" placeholder="Escribir tarea" cols="30" rows="10"></textarea>
          <div class="options">
            <div>

              <div class="field-date">
                <div class="input">
                  <label for="time_end">
                    <i class="fas fa-calendar-alt"></i>
                  </label>
                  <input type="date" name="time_end" id="time_end">
                  <div class="text">
                    15/07/2020
                  </div>
                </div>
              </div>

              <div class="users">
                <button><i class="fas fa-user"></i></button>
                <div class="cont">
                  <div class="img-avatar">
                    <img src="http://placeimg.com/640/480/people" width="120px">
                  </div>
                </div>
                <div class="options">
                  <div class="img-avatar">
                    <img src="http://placeimg.com/640/480/people" width="120px">
                  </div>
                </div>
              </div>

            </div>
            
            <button class="btn" > <i class="fas fa-share"></i> </button>

          </div>


        </form>

        <div class="main">
          <TaskTarget/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskTarget from '../../components/TaskTarget';
import ChatRoom from '../../components/views/ChatRoom';
import Events from '../../components/views/Events';
export default {
  name: 'PageShowProject',
  components: {
    TaskTarget,
    ChatRoom,
    Events
  },
  data() {
    return {
      eventActive: false
    }
  },
}
</script>