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
} 