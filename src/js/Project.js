import Model from './Model';

export default class Project extends Model {
  constructor () {
    super();
  }

  async update(projectId, data) {
    const url = `${this.url}/api/v1/projects/${projectId}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token
    }
    
    const options = { method: 'PUT', headers, data, url };

    try {
      const project = this.axios(options);
      return project.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

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