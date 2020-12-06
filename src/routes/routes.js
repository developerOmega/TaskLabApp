import moment from 'moment';
import Project from '../js/Project';
import User from '../js/User';
const userReq = new User; 
const projectReq = new Project; 

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

function addStatusNotificationToStorage(callback) {
  projectReq.indexByUser().then( projects => {
    let notifications = [];

    projects.data.forEach( project => notifications.push({ id: project.id, notification: true }) );
    Project.setIndexNotificationStorage(JSON.stringify(notifications));
    
    return callback(null, projects);
  } ).catch( err => callback(err, []));

}

async function initNotifications ( to, from, next ) {
  const dateStorage = moment(parseInt(Project.dateNow)).format('YYYY-MM-DD');
  const dateNow = moment(Date.now()).format('YYYY-MM-DD');
  
  if((!Project.dateNow || dateStorage < dateNow) || !Project.notificationsStorage){

    Project.setDateNow(Date.now());
    addStatusNotificationToStorage((err, projects) => {
      console.log("Project: ", projects)
      // if(err) { return console.error(err) } // Borrar si no genera errores o si no recuerdas para que servia :v
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
    path: '/',
    component: () => import('../layouts/SignLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../pages/login/Index.vue'),
        beforeEnter: (to, from, next) => authLogin(to, from, next)
      },
      {
        path: 'signup',
        component: () => import('../pages/signup/Index.vue'),
        beforeEnter: (to, from, next) => authLogin(to, from, next)
      },
    ]
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
