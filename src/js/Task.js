import Model from '../js/Model';

// Clase que realiza peticiones a las rutas de tasks

export default class Task extends Model {

  // Contructor que ejecuta la herencia de la clase Model
  constructor() {
    super();
  }

  // Metodo asincrono que crea nueva tarea
  // Recibe parametros 
  //    -> name:object{description:string, status:[fine, error, warning, none], time_init:timestamp, time_end:timestamp, project_id:number}
  async post ( data ) {
    const url = `${this.url}/api/v1/tasks`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token
    }
    const options = { method: 'POST', headers, data, url };

    try {
      const task = await this.axios(options);
      return task.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono edita tarea
  // Recibe parametros -> taskId:number (id de tarea), data:object (nuevos datos de tarea)
  async update ( taskId, data ) {
    const url = `${this.url}/api/v1/tasks/${taskId}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token
    }
    const options = { method: 'PUT', headers, data, url };

    try {
      const task = await this.axios(options);
      return task.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que edtia estado de tarea
  // Recibe parametros -> taskId:number (id de tarea), status:[fine, error, warning] (estado de tarea)
  async udpateStatus (taskId, status) {
    const url = `${this.url}/api/v1/tasks/${taskId}/status`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }

    const options = { method: 'PUT', headers, url, data: { status } };

    try {
      const task = await this.axios(options);
      return task.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo que elimina tarea
  // Recine parametros -> taksId:number (id de tarea)
  async delete ( taskId ) {
    const url = `${this.url}/api/v1/tasks/${taskId}`;
    const config = {
      headers: {
        'Authorization': this.token
      }
    };


    try {
      const task = await this.axios.delete(url, config);
      return task.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Metodo asincrono que retorna tareas de proyectos
  // Recibe parametros -> projectId:number (id de proyecto)
  async indexByProject (projectId) {
    const url =  `${this.url}/api/v1/projects/${projectId}/tasks`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      let tasks = await this.axios.get(url, config);
      return tasks.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  // Metodo asincrono que retorna tareas con colimna time_end mayor a parametro timeEnd o status none de proyectos
  // Recibe parametros -> projectId:number (id de proyecto), timeEnd:datetime
  async indexByProjectMTEndAndStatus (projectId, timeEnd) {
    const url =  `${this.url}/api/v1/projects/${projectId}/tasks?time_end=${timeEnd}`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      let tasks = await this.axios.get(url, config);
      return tasks.data;
    } catch (error) {
      return error
    }
  }

  // Metodo asincrono que retorna tareas con columna time_end mayor a parametro timeEnd de proyectos
  // Recibe parametros -> projectId:number (id de proyecto), timeEnd:datetime
  async indexByProjectMajorTimeEnd (projectId, timeEnd) {
    const url =  `${this.url}/api/v1/projects/${projectId}/task-time-end?time_end="${timeEnd }"`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    try {
      let tasks = await this.axios.get(url, config);
      return tasks.data;
    } catch (error) {
      return error
    }
  }

  // Metodo asincrono que retorna tareas con columna time_end igual a parametro timeEnd y columna user_id igual a id de sesion de usuario
  // Recibe parametros -> projectId:number (id de proyecto), timeEnd:datetime  
  async indexByProjectEqualTimeEnd (projectId, timeEnd) {
    const url = `${this.url}/api/v1/projects/${projectId}/tasks?time_end='${timeEnd}'&status=equal&user_id=${this.user.id}`;
    const config = {
      headers: {
        Authorization: this.token
      }
    }

    let task = await this.axios.get(url, config);
    return task.data;
  }
}