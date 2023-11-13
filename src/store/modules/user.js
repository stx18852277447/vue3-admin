// 增加解构 removeAllItem
import { setItem, getItem, removeAllItem } from '@/utils/storage'
// 增加 导入路由
import router from '@/router'

import { TOKEN } from '@/constant'
import { login, getUserInfo } from '@/api/system'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    // 增加
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    // 增加
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then((data) => {
            console.log(data)
            this.commit('user/setToken', data.token)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    },
    // 增加
    async getUserInfo(context) {
      const res = await getUserInfo()
      console.log(res)
      this.commit('user/setUserInfo', res.data)
      return res
    }
  }
}
