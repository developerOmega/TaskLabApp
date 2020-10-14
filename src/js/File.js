import Model from './Model';

// Clase que realiza peticiones de las rutas users para subir archivos

export default class File extends Model {

  // Contructor que ejecuta la herencia de la clase Model
  constructor() {
    super();
  }

  // Metodo asincrono que sube imagen a Dropbox
  // Recibe parametros -> userId:number (id de usuario), img:file (data de imagen)
  async upload (userId, img) {
    let imgData = new FormData();
    imgData.append('img', img);

    const url = `${this.url}/api/v1/files/users/${userId}`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'multipart/form-data'
    }

    try {
      const file = await this.axios.post( url, imgData, { headers } );
      return file.data;
    } catch (error) {
      return error;
    }

  }

  // Metodo que actualiza imagen de usario en aplicacion de Dropbox
  // Recibe parametros -> userId:number (id de usuario), img:file (data de imagen)
  async update (userId, img) {
    console.log("%c Estamos en update", 'color: orange');
    let imgData = new FormData();
    imgData.append('img', img);

    const url = `${this.url}/api/v1/files/users/${userId}`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'multipart/form-data'
    }

    try {
      const file = await this.axios.put( url, imgData, { headers } );
      return file.data;
    } catch (error) {
      return error;
    }
  }

  // Metodo asincrono que elimina imagen de usuarion de aplicacion Dropbox
  // Recibe parametros -> userId:number (id de usuario)
  async delete (userId) {
    const url = `${this.url}/api/v1/files/users/${userId}`;
    const config = {
      headers: {
        Authorization: this.token,
      }
    }

    try {
      const file = await this.axios.delete(url, config);
      return file.data;
    } catch (error) {
      return error;
    }
  }
}