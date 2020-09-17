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
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../pages/login/Index.vue'),
  },
  {
    path: '/projects/:id',
    component: () => import('../pages/projects/Show.vue')
  }
]

export default routes;
