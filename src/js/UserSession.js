import Model from './Model';

export default class UserSession extends Model {

  constructor () {
    super();
  }

  async login (email, password) {
    const url = `${this.url}/api/v1/login/users`;
    const headers = {
      'Content-Type': 'application/json'
    };
    const data = { email, password };
    const options = { method: 'POST', headers, data, url };

    
    try {
      const session = await this.axios(options);
      delete session.data.user.password;
      
      localStorage.setItem('token',session.data.token);
      localStorage.setItem('user', JSON.stringify(session.data.user));
      return session.data;
      
    } catch (error) {
      console.error( error );      
      return error;
    }

  }

  logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
} 