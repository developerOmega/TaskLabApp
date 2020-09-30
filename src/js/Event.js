import Model from './Model';

export default class Event extends Model {
  constructor() {
    super();
  }

  async indexPerProject ( projectId ) {
    const url = `${this.url}/api/v1/projects/${projectId}/events`;
    const config = {
      headers: {
        Authorization: this.token
      }
    };
    
    try {
      const events = await this.axios.get( url, config );
      return events.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async post ( data ) {
    const url = `${this.url}/api/v1/events`;
    const headers= {
      "Authorization": this.token,
      "Content-Type": 'application/json'
    };
    
    const options = { method: 'POST', headers, data, url };

    try {
      const event = await this.axios(options);
      return event.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete (eventId) {
    const url = `${this.url}/api/v1/events/${eventId}`;
    const config = {
      headers: {
        "Authorization": this.token
      }
    }

    try {
      const event = await this.axios.delete(url, config);
      return event.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

}