// 统一接口管理

import requests from "./request";
import mockRequests from "./mockAjax";

// 三级联动接口
// /api/product/getBaseCategoryList   GET  无参数

export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};

// 获取三级联动数据
export const reqGetBannerList = () => {
  return mockRequests.get("/banner");
};

// 获取楼层数据
export const reqGetFloorList = () => {
  return mockRequests.get("/floor");
};

//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
