export default class Validate {
  static admin( userSession, users ) {
    const userAdmin = users.filter( user => user.admin == true );
    const userValidate = userAdmin.filter( user => user.id === userSession.id);
    return !userValidate[0] ? false : true;
  }
}