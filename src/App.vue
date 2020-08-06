<!--App.vue是根组件，表示其他的组件被这个组件包含-->
<!-- .vue的文件，结构上类似html，一个.vue文件就是一个vue组件-->
<template>
<!--  这里的id="app" 只和下面的样式对应，与index.html文件中的id="app"不同 -->
  <div id="app">
    <HelloWorld msg="Choose Lunch"/>
    <img alt="Vue logo" src="./assets/lunch.jpg">
    <!--src/components/ChooseLunch.vue 组件-->
  </div>
</template>

<script>
import HelloWorld from './components/ChooseLunch.vue';

// export default 是ES6语法。意思是将这个组件整体导出，之后就可以使用import导入组件，{} 中的内容是这个组件相关属性
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
