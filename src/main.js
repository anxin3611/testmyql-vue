import Vue from 'vue'
import App from './App.vue'

// 'vue' 是jar包
// './App.vue' 是我们自己编写的组件
// 该文件是App.vue和index.html的纽带
// Vue.config.productionTip = false 作用：阻止vue在启动时产生成产提示
Vue.config.productionTip = false

// 创建一个Vue对象（实例）
// .$mount('#app')挂载到页面上DOM元素
// h => h(App), 表示该对象包含的 Vue组件
new Vue({
  render: h => h(App),
}).$mount('#app')
