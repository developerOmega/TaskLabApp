// Clase validadora

export default class Validate {

  // Metodo que valida si el usuario es el administador un proyecto
  // Recibe parametros -> userSession:object(usuario en sesion), users:array (usuarios pertenecientes a proyecto)
  static admin( userSession, users ) {
    const userAdmin = users.filter(user => user.admin == true);
    const userValidate = userAdmin.filter( user => user.id === userSession.id);
    return !userValidate[0] ? false : true;
  }
}