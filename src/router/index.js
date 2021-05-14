const packageName = require('../../package.json').name;

// 判断是 qiankun 环境则增加路由前缀
let prefix = ''
if(window.__POWERED_BY_QIANKUN__){
    prefix = '/'+packageName
}

const routes = [
    {
        path:prefix + "/",
        name:"Map",
        component:() => import('@/pages/map.vue')
    },
    {
        path:prefix + "/three",
        name:"Three",
        component:() => import('@/pages/three.vue')
    }
]

export default routes