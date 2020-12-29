<template>
  <div class="app">
    <!-- 走马灯 -->
    <div class="banner">
      <h2>精选和推荐</h2>
      <el-carousel indicator-position="outside"
                   height="330px">
        <el-carousel-item v-for="item in carouseData"
                          :key="item.url">
          <img v-bind:src='item.url'>
          <div class="carouse-text">
            <div class="carouse-text-name">{{item.title}}</div>
            <div class="carouse-text-name">{{item.state}}</div>
            <div class="carouse-text-price">{{item.price}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      carouseData: [
        { url: require('../assets/img/bannerbg-1.jpg'), title: 'Resident Evil 3', state: '免费开玩！离截止时间还剩： 2 天', price: '¥ 191' },
        { url: require('../assets/img/bannerbg-2.jpg'), title: 'PLAYERUNKNOWN BATTLEGROUNDS', state: '现已推出', price: '¥ 98' },
        { url: require('../assets/img/bannerbg-3.jpg'), title: 'DOTA 2', state: '现已推出', price: '免费游玩' },
        { url: require('../assets/img/bannerbg-4.jpg'), title: '赛博朋克 2077', state: '现已推出', price: '¥ 298' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  background-color: rgb(26, 57, 77);
}

.banner h2 {
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  margin-left: -900px;
  color: #fff;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
  margin-bottom: 3px;
}

.banner {
  width: 980px;
  text-align: center;
  margin: 0 auto;
}

.carouse-text {
  float: right;
  height: 353px;
  width: 362px;
  background-color: rgb(11, 23, 33);
}

.carouse-text-name {
  padding-right: 60px;
  padding-top: 30px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
}

.carouse-text-price {
  padding-right: 60px;
  padding-top: 140px;
  font-size: 15px;
  color: #acdbf5;
}
</style>
