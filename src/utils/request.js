import axios from "axios";
import qs from "qs";

/**
 * 创建 HTTP 请求实例
 */
const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  paramsSerializer: (params) => qs.stringify(params),
});

/**
 * 请求拦截器 - 添加 Authorization 头
 */
httpRequest.interceptors.request.use(
  (config) => {
    const accessToken = 'no-auth';

    // 如果 Authorization 设置为 no-auth，则不携带 Token
    if (config.headers.Authorization !== "no-auth" && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器 - 统一处理响应和错误
 */
httpRequest.interceptors.response.use(
  (response) => {
    // 如果响应是二进制流，则直接返回（用于文件下载、Excel 导出等）
    if (response.config.responseType === "blob") {
      return response;
    }

    const { code, data, msg } = response.data;

    // 请求成功
    if (code === 200) {
      return data;
    }

    // 业务错误
    // ElMessage.error(msg || "系统出错");
    return Promise.reject(new Error(msg || "Business Error"));
  },
  async (error) => {
    console.error("Response interceptor error:", error);

    const { response } = error;

    // 网络错误或服务器无响应
    if (!response) {
    //   ElMessage.error("网络连接失败，请检查网络设置");
      return Promise.reject(error);
    }

    const { code, msg } = response.data;

    switch (code) {
      
      default:
        // ElMessage.error(msg || "请求失败");
        return Promise.reject(new Error(msg || "Request Error"));
    }
  }
);
export default httpRequest;