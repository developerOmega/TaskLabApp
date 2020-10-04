import Model from './Model';

// Clase que realiza peticiones a las rutas users

export default class User extends Model{

  // Contructor que ejecuta la herencia de la clase Model
  constructor() {
    super();
  }

  // Metodo asincrono que retorna los usuario buscado por email
  // Recibe parametro -> email:string (email de usuario)
  async search (email) {
    const url = `${this.url}/api/v1/users/search/${email}`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const user = await this.axios.get( url, config );
      return user.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna todos los usuarios por paginacion
  // Recibe parametro -> init:number (id de inicio), end:number (id de cierre)
  async index (init = 0, end = 0) {
    const link = `${ this.url }/api/v1/users?init=${init}&end=${end}`;
    const config = {
      headers: {
        Authorization: this.token 
      }
    }
    
    try {
      return await this.axios.get(link, config);
    } catch (err) {
      return err;
    }
  }

  // Metodo asincrono que retorna usuarios de proyectos
  // Recibe parametros -> projectId:number (id de proyecto)
  async indexByProject ( projectId ) {
    const url = `${this.url}/api/v1/projects/${projectId}/users`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const users = await this.axios.get(url, config);
      return users.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna usuarios de tareas
  // Recibe parametros -> taskId:string (id de tareas)
  async indexByTask ( taskId ) {
    const url = `${this.url}/api/v1/tasks/${taskId}/users`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const users = await this.axios.get(url, config);
      return users.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna usuario por parametro id
  // Recibe parametros -> userId:number (id de usuario)
  async show (userId) {
    const url = `${this.url}/api/v1/users/${userId}`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const user = await this.axios.get(url, config);
      return user.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna usuario de proyecto
  // Recibe parametros -> userId:number (id de usuario)
  async showByProject ( userId ) {
    const url = `${this.url}/api/v1/projects/${userId}/user`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const user = await this.axios.get( url, config );
      return user.data;
    } catch (error) {
      console.error(error);
      return error;
    }

  }

  // Metodo asincrono que actualiza usuario
  // Recbe parametros -> userId:number (id de usuario), data:object (nuevos datos de usuarios)
  async update ( userId, data ) {
    const url = `${this.url}/api/v1/users/${userId}`;
    const headers = { 
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }
    const options = { method: 'PUT', headers, url, data };
    
    try {
      const user = await this.axios(options);
      return user.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que actualiza password de usuario
  // Recibe parametros -> data:object{old_password:string, new_password:string}
  async updatePassword ( data ) {
    const url = `${this.url}/api/v1/user/${this.user.id}/password`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }

    const options = { method: 'PUT', headers, url, data };

    try {
      const users = await this.axios(options);
      return users.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
