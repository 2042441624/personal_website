import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 用来存储数据
const state = {
    name: '杨金锐',
    webType: '1.0.0',
    websiteApprove: '',
    GlobalRouteArray: [{ path: "/home", routename: 'home', anotherName: '首页' }, { path: "/user/experience", name: 'experience', anotherName: '技术背景' }]
}
// 响应组件中的事件
const actions = {
    isAddroute(state, value) {
        // let name = value.path.split('/')[value.path.split('/').length - 1]
        let routeObj = { path: value.path, routename: name, anotherName: value.title }
        let index = -1;
        for (let i = 0; i < this.state.GlobalRouteArray.length; i++) {
            if (this.state.GlobalRouteArray[i]["path"] === value["path"]) {
                index = i
                console.log(index);
            }
        }
        state.commit("pushRoute", { index, routeObj })
    }
}
// 操作数据
const mutations = {
    pushRoute(state, routerDer) {
        if (routerDer["index"] < 0) {
            this.state.GlobalRouteArray.push(routerDer.routeObj)
        } else if (routerDer["index"] !== this.state.GlobalRouteArray.length - 1) {
            this.state.GlobalRouteArray.splice(routerDer["index"] + 1)
        }
    },
}
// 用来将state数据进行加工
const getters = {

}
// 新建并暴露store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
