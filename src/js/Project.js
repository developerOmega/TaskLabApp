import Model from './Model';

// Clase que realiza peticiones a las rutas de projects

export default class Project extends Model {

  // Contructor que ejecuta la herencia de la clase Model  
  constructor () {
    super();
  }

  // Metodo asincrono que crea un nuevo proyecto
  // Recibe parametros -> 
  // data:object{ name:string (nombre de proyecto), description:string (descripcion de proyecto), status:[active, finish, stop]  }
  async post ( data ) {
    const url = `${this.url}/api/v1/projects`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token
    }
    
    const options = { method: 'POST', headers, url, data };

    try {
      const project = await this.axios(options);
      return project.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que edita proyecto
  // Recibe parametros -> projectId:string (id de proyecto), data:object (nuevos datos de proyecto)
  async update(projectId, data) {
    const url = `${this.url}/api/v1/projects/${projectId}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token
    }
    
    const options = { method: 'PUT', headers, data, url };

    try {
      const project = await this.axios(options);
      return project.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna una el proyecto obtenido por el parametro id
  // Recibe parametros -> projectId:number (id de proyecto) 
  async show (projectId) {
    const url = `${this.url}/api/v1/projects/${projectId}`;
    const config = {
      headers: {
        'Authorization': this.token
      }
    }

    try {
      const project = await this.axios.get(url, config);
      return project.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo que retorna proyectos por id de la secion del usuario 
  async indexByUser () {
    const url = `${this.url}/api/v1/users/${this.user.id}/projects`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      const projects = await this.axios.get(url, config);
      return projects.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

}