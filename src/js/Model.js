import Axios from 'axios';

// Clase padre de peticiones

export default class Model {
  // Constructor que inicializa propiedaes
  constructor () {
    // Propiedad que almacena url de API
    this.url = 'http://localhost:3000';
<<<<<<< HEAD

    // Propiedad que inicializa Axios
=======
    // this.url = 'https://task-lab-backend.herokuapp.com';
>>>>>>> 790100fc8abe514143aa14b1e7b41cc7407a461a
    this.axios = Axios;

    // Propiedad que llama la variable de localStorage token
    this.token = localStorage.getItem('token');

    // Propiedad que llama la variable de localStorage user
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  

  // Metodo que modifica la imagen de la variable LocalStorage user
  // Recibe parametros -> img:string ( link de nueva imagen )
  modifyImgBySession (img) {
    this.user.img =  img;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  // Metodo que modifica nombre e email de la variable LocalStorage user
  // Recibe parametros -> name:string (nuevo nombre), email:string (nuevo email)
  modifyNameAndEmailBySession (name, email) {
    this.user.name = name;
    this.user.email = email;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}