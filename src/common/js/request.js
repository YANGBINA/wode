import axios from 'axios'
import Vue from 'vue'

const api = {
  async GET(url, data) {
    try {
      let res = await Vue.axios.get(url, { params: data })
      res = res.data
      return new Promise((resolve) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      // alert('服务器出错')
      console.error(err)
    }
  },
  async POST(url, params) {
    try {
      // let res = await Vue.axios.post(url, data)
      let res = await Vue.axios({
        method: 'post',
        url,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        params
      })

      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      // alert('服务器出错')
      console.error(err)
    }
  },
}
export { api }
