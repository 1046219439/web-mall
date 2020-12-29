<template>
  <div class="gameCard">
    <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }"
                 class="card"
                 shadow="hover">
          <img :src="$store.state.game[gameId-1].gameImg"
               class="image">
          <div style="padding: 14px;">
            <span style="display:block;color:#fff">{{ $store.state.game[gameId-1].gameName }}</span>
            <span style="color:#acdbf5">¥&nbsp;&nbsp;&nbsp;{{ $store.state.game[gameId-1].gamePrice }}</span>
            <div class="bottom clearfix">
              <el-button type="success"
                         class="button">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  props: ['gameId'],
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameCard {
  float: left;
  margin: 16px;
  width: 324px;
  margin: 2px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0px;
  margin-top: -15px;
  float: right;
}

.image {
  width: 324px;
  height: 151px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card {
  width: 324px;
  height: 230px;
  background-color: rgb(11, 23, 33);
  border: none;
}
</style>
