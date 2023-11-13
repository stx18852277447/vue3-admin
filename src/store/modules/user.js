import { login, getUserInfo } from '@/api/system'
// 增加解构 removeAllItem
import { setItem, getItem, removeAllItem } from '@/utils/storage'
// 增加 导入路由
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    // 增加
    userInfo: {}
  }),
  mutations: {
    // 增加
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
