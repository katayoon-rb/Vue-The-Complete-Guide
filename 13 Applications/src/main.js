import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersList from './components/users/UsersList.vue'
import UsersFooter from './components/users/UsersFooter.vue'
import NotFound from './components/nav/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { name: 'teams', path: '/teams',
          components: { default: TeamsList, footer: TeamsFooter },
          children: [
            { name: 'team-members', path: ':teamId',
              component: TeamMembers, props: true }
          ]
        },
        { path: '/users',
          components: { default: UsersList, footer: UsersFooter }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, pos) {
      if (pos) { return pos }
      return { left: 0, top: 0 }
    }
})

router.beforeEach((to, from, next) => {
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
