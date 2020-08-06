<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--      <span>{{ lunch }}</span>-->
    <!--  shape "circle", "circle-outline", "round"-->
    <a-button type="primary" shape="round" :ghost="true" :disabled="false" @click="chooseLunch">午 餐</a-button>
    <a-button type="primary" shape="round" :disabled="false" @click="clearLunch">clear</a-button>
    <div v-show="isShow">
      <br/>
      <h2>{{ lunch }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      lunch: ''
    }
  },
  name: 'ChooseLunch',
  props: {
    msg: String
  },
  methods: {
    // 选择午餐方法
    chooseLunch: function () {
      let personArr = ['重庆', '粉丝汤', '馄饨', '牛肉面'];
      let number = this.randomNum(0, personArr.length - 1);
      console.info(personArr[number])
      this.isShow = true
      this.lunch = personArr[number]
    },
    // 清除选择的午餐方法
    clearLunch: function () {
      this.lunch = ''
      this.isShow = false
    },
    // 生成随机数方法 minNum - maxNum
    randomNum: function (minNum, maxNum) {
      // console.info(arguments)
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
