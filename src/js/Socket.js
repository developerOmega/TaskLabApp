import io from 'socket.io-client';
import Model from './Model';
const model = new Model;
export let Socket = io(model.url);