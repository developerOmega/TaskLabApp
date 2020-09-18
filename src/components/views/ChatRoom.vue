<template>
  <div>
    
    <div class="main">
      <MessageTargetMy/>
      <MessageTargetOther/>
    </div>

    <form method="POST">
      <textarea name="content" id="content" placeholder="Escribir tarea" cols="30" rows="10"></textarea>
      <div class="options">            
        <button class="btn" > <i class="fas fa-share"></i> </button>
      </div>
    </form>

  </div>
</template>

<script>
import MessageTargetMy from '../MessageTargetMy';
import MessageTargetOther from '../MessageTargetOther';
export default {
  name: 'ChatRoom',
  components: {
    MessageTargetOther, MessageTargetMy
  }
}
</script>