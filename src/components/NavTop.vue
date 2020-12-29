<template>
  <div>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#171a21"
             text-color="#B8B6B4"
             active-text-color="#ffffff">
      <el-menu-item index="1">
        <router-link to="/home"><i class="El-icon-s-home"></i>&nbsp;首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user-solid"></i>&nbsp;个人中心
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/login"><i class="el-icon-s-promotion"></i>&nbsp;登录</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/shoppingCart"><i class="el-icon-shopping-cart-2"></i>&nbsp;购物车</router-link>
      </el-menu-item>
      <el-menu-item style="float:right">
        <el-input v-model="input"
                  placeholder="请输入商品">
          <el-button type="primary"
                     slot="append"
                     icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data () {
    return {
      activeIndex: '1',
      input: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
