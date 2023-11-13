import { login, getUserInfo } from '@/api/system'

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
    // 增加
    async getUserInfo(context) {
      const res = await getUserInfo()
      console.log(res)
      this.commit('user/setUserInfo', res.data)
      return res
    }
  }
}
