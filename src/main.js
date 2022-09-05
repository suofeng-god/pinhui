import Vue from "vue";
import App from "./App.vue";

// 注册全局组件
// 三级联动组件
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);

// 引入vuex仓库
import store from "@/store";

// 引入路由
import router from "@/router";

// 测试
import { reqCategoryList } from "@/api/index";
reqCategoryList();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由: KV写法
  router,
  // 注册仓库
  store,
}).$mount("#app");
