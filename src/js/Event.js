import Model from './Model';

// Clase que realiza peticiones a las rutas de events 

export default class Event extends Model {

  // Contructor que ejecuta la herencia de la clase Model
  constructor() {
    super();
  }

  // Metodo asincrono que retorna usuario por projecto
  // Recibe parametros -> projectId:number (id de proyecto)
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

  // Metodo asincrono que crea un nuevo evento
  // Recibe parametros -> 
  //    data:object{name:string, description:string, time_init:timestamp, time_end:timestamp, project_id:number}
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

  // Metodo que elimina evento
  // Recibe parametros -> eventId:number (id de evento)
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