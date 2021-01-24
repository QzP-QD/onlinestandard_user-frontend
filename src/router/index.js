//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import Standard from "../view/Standard"
import StandardDemo from "../view/StandardDemo"
import MergeStandard from "../view/MergeStandard"

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Standard,
        },
        {
            path:'/1',
            component: StandardDemo,
        },
        {
            name:"MergePage",
            path:'/merge',
            component:MergeStandard
        }
    ]
})