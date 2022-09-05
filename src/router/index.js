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

// 重写VueRouter的push和replace方法,解决编程式导航重复触发的时候出现警告的报错问题
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

export default new VueRouter({
  mode: "history",
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { showFooter: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { showFooter: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { showFooter: false },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { showFooter: true },
      // param参数传参的时候,通过对象形式传递参数的时候需要给路由起一个名字
      name: "search",

      // 通过路由传递参数方法一: 不常用
      /*       props: {
        keyword: "通过路由来的",
      }, */

      // 通过路由传递参数方法二:
      /* props: true, */

      // 通过路由传递参数方法三:
      props($route) {
        return {
          // keyword: $route.params.keyword,
          keyword: $route.query.k,
        };
      },
    },
    // 重定向,在项目跑起来的时候,访问 / ,立马重定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
