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
      <form class="post" method="POST" v-on:submit.prevent="sendMessage">
        <textarea name="content" v-model="content" class="post-content" id="content" placeholder="Escribir tarea" cols="30" rows="10"></textarea>
        <div class="post-options position-end">            
          <button class="btn-post" > <i class="fas fa-share"></i> </button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import MessageCard from '../MessageCard';
import { Socket } from '../../js/Socket';
import User from '../../js/User';

// Template de Sala de chat

export default {
  name: 'ChatRoom',
  components: {
    MessageCard
  },
  data() {
    return {
      userReq: new User,
      content: '',
      user: {},
      message: {},
      messages: []
    }
  },
  methods: {

    // Metodo que envia contenido de mensaje por medio de un socket
    sendMessage: function () {

      const data = {
        message: this.content,
        room: this.$route.params.id,
        token: this.userReq.token
      }

      // Metodo Socket que manda informacion al servidor con el contenido del mensaje
      // Envia parametros -> data:object (datos del mensaje), callback:function (funcion que mustra datos de mensaje creado) 
      Socket.emit('sendMessage', data, (resp) => {
        if(resp.ok == true) {
          console.log(resp);
          this.message = resp.message;
          this.messages.push(this.message);
        }
        else {
          console.error(resp)
        }
      });

      this.content = '';

    },

    // Metodo que busca usuario por los datos de secion
    getUserSession: async function () {
      const user = await this.userReq.show(this.userReq.user.id);
      this.user = user.data;
    }
  },
  async created () {
    await this.getUserSession();

    // Metodo Socket que emvia informacion al servidor para renderizar los mensajes del proyecto
    // Envia parametros 
    //    -> data:object{ projectId:number (id de proyecto), token:string (token de secion) }
    //       callback:function (Funcion que muestra la data de todos los mensajes)
    Socket.emit('renderMessages', { projectId: this.$route.params.id, token: await this.userReq.token }, (data) => {
      if(data.ok == true) {
        this.messages = data.messages;
      }
      else {
        console.error(data.err);
      }
    });

    // Metodo Socket que recibe informacion de un mensaje creado
    // Obtiene los parametros -> resp:object (datos del nuevo mensaje)
    Socket.on('sendMessage', (resp) => {
      console.log(resp);
      this.messages.push(resp.message);
    });
    
  }
}
</script>