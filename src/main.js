import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 导入全局样式
import './styles/index.scss'

// 导入svgIcon
import intallIcons from '@/icons'

// 导入权限控制模块
import './permission'

const app = createApp(App)
installElementPlus(app)
intallIcons(app)
app.use(store).use(router).mount('#app')
