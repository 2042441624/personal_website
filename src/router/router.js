import vue from 'vue';
import vueRouter from 'vue-router';

const router = new vueRouter({
    mode: 'hash',

    routes: [
        {
            path: "/", redirect: '/user'
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
        }



    ]
})
vue.use(vueRouter)
export default router