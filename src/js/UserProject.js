import Model from './Model';

export default class UserProject extends Model {
  constructor() {
    super();
  }

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