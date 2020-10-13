import axios from 'axios'
import base from './base'
import axioshttp from './http'
//console.log('基本链接axioshttp--', axioshttp)

const api={
  getdata(params) {
      return axios.get(base.baseUrl+base.list)
  },
  getLogin(params){
      return axios.post(base.baseUrl+base.login,params)
  },
  getMusic(params){
      return axios.get(base.baseUrl+base.music,{params:params})
  },
  // 登录
  getLogin(params){
      return axios.post(base.baseUrl+base.login,params)
  },
  getList(){
      return axios.get(base.baseUrl+base.list)
  },
  getnav(){
      return axios.get(base.baseUrl+base.navlist)
  }
}
 
export default api