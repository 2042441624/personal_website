import vue from 'vue';
import vueRouter from 'vue-router';

const router = new vueRouter({
    mode: 'hash',

    routes: [
        {
            path: "/", redirect: '/home'
        },
        {
            path: "/home", name: 'home', component: () => import('@/page/HomePage.vue'),
        },
        {
            path: "/user", name: 'user', component: () => import('@/page/UserPage.vue'),
            children: [{
                path: "/user/technology", name: 'technology', component: () => import('@/view/technologyView.vue'),

            }, {
                path: "/user/project", name: 'project', component: () => import('@/view/projectView.vue'),

            }, {
                path: "/user/experience", name: 'experience', component: () => import('@/view/experienceView.vue'),

            }]
        },
        {
            path: "/mybio", name: 'mybio', component: () => import('@/page/mybioPage.vue'),
        },
        {
            path: "/resume", name: 'resume', component: () => import('@/page/resumePage.vue'),
        },
        {
            path: "/app", name: 'app', component: () => import('@/page/appPage.vue'),
        },


    ]
})
vue.use(vueRouter)
export default router