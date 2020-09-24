<template>
  <div>
    
    <div class="main menu scroll scroll-max-51">
      <MessageCard
        v-for="message in messages"
        :key="message.id"
        v-bind:message="message"
      />
    </div>

    <div class="pd-lr-5">
      <form class="post" method="POST">
        <textarea name="content" class="post-content" id="content" placeholder="Escribir tarea" cols="30" rows="10"></textarea>
        <div class="post-options position-end">            
          <button class="btn-post" > <i class="fas fa-share"></i> </button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import MessageCard from '../MessageCard';

export default {
  name: 'ChatRoom',
  components: {
    MessageCard
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          name: 'Nayeli Lopez',
          email: 'nayeli@gmail.com',
          img: 'http://placeimg.com/640/480/people',
          type: 'fine',
          content: "Hola todo en mundo, ya publique los nuevos proyectos c:"
        },
        {
          id: 2,
          name: 'Nayeli Lopez',
          email: 'nayeli@gmail.com',
          type: 'fine',
          img: 'http://placeimg.com/640/480/people',
          content: "Hoy se entrega el avance"
        },
        {
          id: 3,
          name: 'Sofia',
          email: 'sofia@gmail.com',
          type: 'fine',
          img: 'http://placeimg.com/640/480/people',
          content: "a weno pa saver :v"
        },
        {
          id: 4,
          name: 'Sofia',
          email: 'sofia@gmail.com',
          type: 'fine',
          img: 'http://placeimg.com/640/480/people',
          content: "hora de mimir"
        }
      ]
    }
  },
}
</script>