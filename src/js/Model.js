import Axios from 'axios';

export default class Model {
  constructor () {
    this.url = 'http://localhost:3000';
    this.axios = Axios;
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  modifyImgBySession (img) {
    this.user.img =  img;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  modifyNameAndEmailBySession (name, email) {
    this.user.name = name;
    this.user.email = email;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}