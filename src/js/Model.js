import Axios from 'axios';

export default class Model {
  constructor () {
    this.url = 'http://localhost:3000';
    this.axios = Axios;
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}