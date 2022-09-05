// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
// 需要使用插件
Vue.use(VueRouter);
// 配置路由

// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default new VueRouter({
  mode: "history",
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
    // 重定向,在项目跑起来的时候,访问 / ,立马重定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
