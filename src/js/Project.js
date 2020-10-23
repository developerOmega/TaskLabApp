import Model from './Model';

// Clase que realiza peticiones a las rutas de projects

export default class Project extends Model {

  // Contructor que ejecuta la herencia de la clase Model  
  constructor () {
    super();
  }

  // Propiedad estatica que almacena la variable local de notification_by_projects
  static notificationsStorage = JSON.parse(localStorage.getItem('notification_by_projects'));

  // Metodo estatico que busca el elemento de la propiedad notificationsStorage por el id de proyecto
  // Recibe parametro -> projectId:integer ( id de proyecto, el id es encuentra en el la variable LocalStorage: notification_by_projects ) 
  static getIndexNotificationStorage ( projectId ) {
    return this.notificationsStorage.map( data => data.id ).indexOf(projectId);
  }

  // Metodo estatico que modifica/agrega nuevos valores a la variable local notification_by_projects y lo almacena el la propiedad notificationStorage
  // Recibe parametro -> data:array[ object{id:string (id de proyecto), notification:bool (numero booleano que valida la existencia de notificaciones) }] 
  // (Array de objetos que almacenan los nuevo valores booleanos de notificaciones) 
  static setIndexNotificationStorage ( data ) {
    localStorage.setItem('notification_by_projects', data);
    this.notificationsStorage = JSON.parse(localStorage.getItem('notification_by_projects'));
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

  // Metodo que retorna proyectos por id de la sesion del usuario 
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