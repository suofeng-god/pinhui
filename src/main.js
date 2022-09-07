import Vue from "vue";
import App from "./App.vue";

// 注册全局组件
// 三级联动组件
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);
// 注册轮播图组件为全局组件
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name, Carousel);

// 引入vuex仓库
import store from "@/store";

// 引入路由
import router from "@/router";

// 引入mock数据
import "@/mock/mockServe";

// 引入Swiper样式
import "swiper/css/swiper.css";

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
