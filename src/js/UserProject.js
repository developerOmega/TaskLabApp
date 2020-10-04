import Model from './Model';

// Clase que realiza peticiones de rutas de user_projects

export default class UserProject extends Model {

  // Contructor que ejecuta la herencia de la clase Model
  constructor() {
    super();
  }

  // Metodo asincrono que crea una relacion entre usuario y proyecto
  // Recibe parametros -> userId:number (id de usuario), projectId:number (id de proyecto), admin:boolean (administrador)
  async post ( userId, projectId, admin ) {
    const url = `${this.url}/api/v1/user-products`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }
    const data = { user_id: userId, project_id: projectId, admin };
    const options = { method: 'POST', headers, url, data };

    try {
      const userProject = await this.axios(options);
      return userProject.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que elimina relacion de proyecto y usuario
  // Recibe parametros -> userId:number (id de usuario), projectId:number (id de proyecto)
  async delete ( userId, projectId ) {
    const url = `${this.url}/api/v1/user-products/${userId}/${projectId}`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const userProject = await this.axios.delete(url, config);
      return userProject.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}