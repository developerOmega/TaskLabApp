import Model from '../js/Model';

// Clase que realiza peticiones a las rutas de user_tasks

export default class UserTask extends Model {
  // Clase que realiza peticiones de rutas de user_projects
  constructor() {
    super();
  }

  // Metodo asincrono que crea relacion entre usuario y tarea
  // Recibe parametros -> userId:number (id de usuario), taskId:number (id de tarea)
  async post(userId, taskId) {
    const url = `${this.url}/api/v1/user-tasks`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }
    const data = { user_id: userId, task_id: taskId};
    const options = { method: 'POST', headers, data, url };

    try {
      const userTask = await this.axios(options);
      return userTask.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que elimina relacion entre usuario y tarea
  // Recibe parametros -> userId:number (id de usuario), taskId:number (id de tarea)
  async delete(userId, taskId) {
    const url = `${this.url}/api/v1/user-tasks/${userId}/${taskId}`;
    const config = {
      headers: {
        'Authorization': this.token,        
      }
    };
    
    try {
      const userTask = await this.axios.delete(url, config);
      return userTask.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}