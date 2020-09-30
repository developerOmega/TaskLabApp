import Model from './Model';

export default class File extends Model {
  constructor() {
    super();
  }

  async upload (userId, img) {
    let imgData = new FormData();
    imgData.append('img', img);

    const url = `${this.url}/api/v1/files/users/${userId}`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'multipart/form-data'
    }

    try {
      const file = await this.axios.post( url, imgData, { headers } );
      return file.data;
    } catch (error) {
      console.error(error);
      return error;
    }

  }

  async update (userId, img) {
    console.log("%c Estamos en update", 'color: orange');
    let imgData = new FormData();
    imgData.append('img', img);

    const url = `${this.url}/api/v1/files/users/${userId}`;
    const headers = {
      'Authorization': this.token,
      'Content-Type': 'multipart/form-data'
    }

    try {
      const file = await this.axios.put( url, imgData, { headers } );
      return file.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete (userId) {
    const url = `${this.url}/api/v1/files/users/${userId}`;
    const config = {
      headers: {
        Authorization: this.token,
      }
    }

    try {
      const file = await this.axios.delete(url, config);
      return file.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}