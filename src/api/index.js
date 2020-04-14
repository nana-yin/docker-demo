// 请求地址的封装
import axios from '@/axios/index.js'
import qs from 'qs'

const API = { // 定义接口地址
  list: '/posts', // 新闻列表
}

export default {
  list () { // API.list表示接口地址
    return axios.get(API.list, {})
  },
  // fetchBlog (reqData) {
  //   return axios.get(API.list, { params: reqData })
  // },
  // addBlog (reqData) {
  //   return Ax.post(API.list, qs.stringify(reqData));
  // },
}