// Exportacion de variable que inicializa Socket
// Envia parametro -> link de aplicacion backend 

import io from 'socket.io-client';
export let Socket = io('http://localhost:3000/');