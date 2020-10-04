import User from '../js/User';
const userReq = new User; 

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


const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/home/Index.vue')
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
