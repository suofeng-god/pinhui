// 二次封装axios
import axios from "axios";

// 1.利用axios的对象方法create,去创建一个axios实例
// 2. request就是axios,只不过需要配置
const requests = axios.create({
  // 配置对象
  // 基础路径,发送请求的时候,路径中会出现的基础api
  baseURL: "/api",
  // 请求超时,超过请求超时时间就是响应失败
  timeout: 5000,
});

// 请求拦截器: 在发送请求之前,进行一些业务逻辑处理
requests.interceptors.request.use(function (config) {
  // config 为配置对象,其中有个headers属性很重要
  return config;
});

// 响应拦截器
requests.interceptors.response.use(function (response) {
  return response.data;
});

export default requests;
