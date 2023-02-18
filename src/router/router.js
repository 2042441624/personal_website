import vue from 'vue';
import vueRouter from 'vue-router';

const router = new vueRouter({
    mode: 'hash',

    routes: [
        {
            path: "/", redirect: '/user',name:'user'
        },
        {
            path: "/home", name: 'home',  component: () => import('@/page/HomePage.vue'),
        },
        {
            path: "/user", name: 'user', component: () => import('@/page/UserPage.vue'),
        }



    ]
})
vue.use(vueRouter)
export default router