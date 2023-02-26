import axios from "axios";
// console.log(process.env.VUE_APP_BASE_URL);

const instance = axios.create({
  // baseURL: 'http://testapi.xuexiluxian.cn/api',
  // baseURL: "http://localhost:3000",
  baseURL: "",
  // process.env.NODE_ENV == "production" ? process.env.VUE_APP_BASE_URL : "",
  timeout: 1000,
});

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 一般这个时候做的是登录判断,如果已登录那么执行xxx,如果未登录执行xxx
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 后端传给前端数据的时候会有code码,对应一些响应
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default instance;
