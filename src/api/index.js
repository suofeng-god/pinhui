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

export const reqGetBannerList = () => {
  return mockRequests.get("/banner");
};

export const reqGetFloorList = () => {
  return mockRequests.get("/floor");
};
