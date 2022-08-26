import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import NotificationPage from '../views/NotificationPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ContactPage from '../views/ContactPage.vue'
import LastOrders from '../views/LastOrders.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/HomePage'
      },
      {
        path: 'HomePage',
        component: HomePage
      },      {
        path: '/tabs/NotificationPage',
        component: NotificationPage
      },
      {
        path: '/tabs/ProfilePage',
        component: ProfilePage
      },
      {
        path: '/tabs/ContactPage',
        component: ContactPage
      },
      {
        path: '/tabs/LastOrders',
        component: LastOrders
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
