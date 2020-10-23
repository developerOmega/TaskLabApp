import moment from 'moment';
import Project from '../js/Project';
import User from '../js/User';
const userReq = new User; 
const projectReq = new Project; 

// Middleware pa autenticar sesion de usuario; si el usuario no esta autenticado retornar a login
async function authSession( to, from, next ) {
  try {
    let user = await userReq.show(userReq.user.id);
    if(!user.data) {
      next( '/login' );
    }
    else {
      next();
    }
  } catch (error) {
    next( '/login' );
  }
}

// Middleware pa autenticar login; si el usuario esta autenticado retornar a pagina raiz
async function authLogin( to, from, next ) {
  try {
    let user = await userReq.show(userReq.user.id);
    if(!user.data) {
      next();
    }
    else {
      next('/');        
    }
  } catch (error) {
    next();
  }
}

// Metodo que modifica la variable local notification_by_projects para que todos los proyectos esten inicializados en true
// Recibe parametros -> callback:function( err, projects )
function addStatusNotificationToStorage(callback) {
  // Inicializar promesa de propiedad indexByUser (buscara los proyectos pertenecientes al usuario en sesion)
  projectReq.indexByUser().then( projects => {
    let notifications = [];

    // Todos los id de proyectos se almacentara en la variable notificaciones junto con el valor boleano, que sera equivalente a true
    projects.data.forEach( project => notifications.push({ id: project.id, notification: true }) );

    // Almacentar nuevo valor en la la variable local notification_by_projects
    Project.setIndexNotificationStorage(JSON.stringify(notifications));
    
    // Retornar callback
    return callback(null, projects);
  } ).catch( err => callback(err));

}

// Middleware que inicializa los nuevos los parametros de la variable local en caso que la constante dataStorage sea menos a la fecha actual
async function initNotifications ( to, from, next ) {
  const dateStorage = moment(parseInt(Project.dateNow)).format('YYYY-MM-DD');
  const dateNow = moment(Date.now()).format('YYYY-MM-DD');
  
  if((!Project.dateNow || dateStorage < dateNow) || !Project.notificationsStorage){

    Project.setDateNow(Date.now());
    addStatusNotificationToStorage((err, projects) => {
      if(err) { return console.error(err) }
      projects;
      next();
    });
  }
  else {
    next();
  }
}

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/home/Index.vue'),
        beforeEnter: initNotifications 
      },
      {
        path: 'projects/create',
        component: () => import('../pages/projects/Create.vue')
      },
      {
        path: 'settings',
        component: () => import('../pages/settings/Main.vue'),
        children: [
          {
            path: 'password',
            component: () => import('../pages/settings/Password.vue')
          },
          {
            path: 'user',
            component: () => import('../pages/settings/User.vue')
          }
        ],
      }
    ],
    beforeEnter: (to, from, next) => authSession(to, from, next),
  },
  {
    path: '/login',
    component: () => import('../pages/login/Index.vue'),
    beforeEnter: (to, from, next) => authLogin(to, from, next)
  },
  {
    path: '/projects/:id',
    component: () => import('../layouts/ProjectLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/projects/Show.vue')
      }
    ],
    beforeEnter: (to, from, next) => authSession(to, from, next),
  },
  {
    path: '*',
    component: () => import('../pages/errors/404.vue') 
  }
]

export default routes;
