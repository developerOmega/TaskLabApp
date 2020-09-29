import Model from '../js/Model';

export default class UserTask extends Model {
  constructor() {
    super();
  }

  post(userId, taskId) {
    const url = `${this.url}/api/v1/user-tasks`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'application/json'
    }
    const data = { user_id: userId, task_id: taskId};
    const options = { method: 'POST', headers, data, url };

    try {
      const userTask = this.axios(options);
      return userTask.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

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