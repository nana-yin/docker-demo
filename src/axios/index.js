// 引入axios，并且将通用的地址进行定义
import axios from 'axios'

// page请求的根路径
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
// 自动识别接口使用开发环境地址（开发环境地址做了 proxyTable 代理，故设置为空）或线上地址
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.API_ROOT : '';
// 开发环境直接打包测试
// axios.defaults.baseURL = '';

// axios拦截器——可以用于token刷新
// 拦截特定请求
axios.interceptors.request.use( (config) => {
    return config;
    
}, error => {
    return Promise.reject(error)
});
axios.interceptors.response.use((response) => {
    if(response){
        return response
    }else{
        return false;
    }
}, err => {

})
// 导出axios
export default axios