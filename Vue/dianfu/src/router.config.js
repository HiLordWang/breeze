import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from './components/home'
// const news=()=>import('./components/news')
const news=()=>import(/* webpackChunkName: "news" */ './components/news')

const about=()=>import('./components/about')
const detail=()=>import('./components/detail')
const login=()=>import('./components/login')
const reg=()=>import('./components/reg')
const user=()=>import('./components/user')



const routes=[
    {path:'/home',component:home},
    {path:'/about',component:about},
    {path:'/news',component:news},
    {path:'/detail/:sid',component:detail},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect: '/home'},
];

export default new VueRouter({
    routes
})