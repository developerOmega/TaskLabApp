import Model from '../js/Model';

export default class Task extends Model {
  constructor() {
    super();
  }

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
}