<template>
  <div class="app">
    <div class="nav-top"></div>
    <banner></banner>
    <div class="gameList">
      <h2>商品列表</h2>
      <el-tabs v-model="activeName"
               type="border-card"
               @tab-click="handleClick">
        <el-tab-pane label="热销商品"
                     name="first">
          <gameList v-for="item in 18"
                    :gameId=item
                    :key="item"></gameList>
        </el-tab-pane>
        <el-tab-pane label="新品上市"
                     name="second">
          <gameList v-for="item in 17"
                    :gameId=item+18
                    :key="item"></gameList>
        </el-tab-pane>
        <el-tab-pane label="优惠商品"
                     name="third">
          <gameList v-for="item in 16"
                    :gameId=item+35
                    :key="item"></gameList>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
import banner from './banner.vue'
import gameList from './gameList.vue'
export default {
  props: ['gameId'],
  components: { banner, gameList },
  name: 'Home',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-top {
  width: 1850px;
  height: 450px;
  background-image: url("../assets/img/nav_background.png");
}

.gameList h2 {
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
}

.gameList {
  margin: 0 auto;
  width: 1020px;
  height: 1520px;
}

.el-tabs--border-card {
  background: rgb(26, 57, 77);
  border: 1px solid rgb(26, 57, 77);
}
</style>
