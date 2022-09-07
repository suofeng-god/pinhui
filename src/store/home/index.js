// home 数据仓库

// 引入发请求api
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
  // state中的数据默认初始值不能乱写,根据接口的返回值初始化
  // 三级联动数据
  categoryList: [],
  // banner轮播图数据
  bannerList: [],
  // floor数据
  floorList: [],
};
const getters = {};
const actions = {
  // 获取三级联动数据
  async categoryList(context) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      context.commit("CATEGORY_LIST", result.data);
    }
  },
  // 获取首页banner轮播图数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      commit("GET_BANNER_LIST", result.data);
    }
  },
  // 获取首页Floor组件数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code === 200) {
      commit("GET_FLOOR_LIST", result.data);
    }
  },
};
const mutations = {
  // 存贮三级联动数据
  CATEGORY_LIST(state, value) {
    state.categoryList = value;
  },
  // 存贮banner轮播图数据
  GET_BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  // 存贮floor数据
  GET_FLOOR_LIST(state, floorList) {
    state.floorList = floorList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
