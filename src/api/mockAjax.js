// 二次封装axios
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条的样式
import "nprogress/nprogress.css";

// 1.利用axios的对象方法create,去创建一个axios实例
// 2. request就是axios,只不过需要配置
const mockRequests = axios.create({
  // 配置对象
  // 基础路径,发送请求的时候,路径中会出现的基础api
  baseURL: "/mock",
  // 请求超时,超过请求超时时间就是响应失败
  timeout: 5000,
});

// 请求拦截器: 在发送请求之前,进行一些业务逻辑处理
mockRequests.interceptors.request.use(function (config) {
  nprogress.start();
  // config 为配置对象,其中有个headers属性很重要
  return config;
});

// 添加响应拦截器
mockRequests.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nprogress.done();
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default mockRequests;
