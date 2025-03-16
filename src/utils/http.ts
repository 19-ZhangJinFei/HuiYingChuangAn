import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'
 
const baseURL = 'http://m4fhwc.natappfree.cc'
 
const instance = axios.create({
  // 基础地址，超时时间
  baseURL,
  timeout: 10000
})
 
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // console.log("发送的请求为",config)
    // 携带token，将token存入本地浏览器中，防止刷新后过期
    // 要注意接口文档中的请求头的名称
    if (localStorage.getItem('USER_KEY')) {
      console.log("携带了令牌")
      config.headers.Authorization = localStorage.getItem('USER_KEY')
    }
    return config
  },
  (err) => Promise.reject(err)
)
 
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 要注意接口文档中，表示响应成功的数值
    if (res.data.code === 200) {
          return res
    }
    // 业务失败，给错误提示，抛出错误
    ElMessage.error(res.data.msg || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token过期 => 拦截到登陆
    if (err.response?.status === 401) {
      router.push('/login')
    }
 
    // 错误的默认情况 => 只要给提示
    ElMessage.error(err.response.data.msg || '服务异常')
    return Promise.reject(err)
  }
)
 
export default instance
export { baseURL }