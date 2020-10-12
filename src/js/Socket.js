// Exportacion de variable que inicializa Socket
// Envia parametro -> link de aplicacion backend 

import io from 'socket.io-client';
import Model from './Model';
const model = new Model;
export let Socket = io(model.url);