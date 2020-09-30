import Model from './Model';

export default class User extends Model{
  constructor() {
    super();
  }

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
}