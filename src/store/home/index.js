// home 数据仓库

// 引入发请求api
import { reqCategoryList } from "@/api";

const state = {
  // state中的数据默认初始值不能乱写,根据接口的返回值初始化
  categoryList: [],
};
const getters = {};
const actions = {
  async categoryList(context) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      context.commit("CATEGORY_LIST", result.data);
    }
  },
};
const mutations = {
  CATEGORY_LIST(state, value) {
    state.categoryList = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
