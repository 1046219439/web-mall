<template>
  <div class="shoppingcart">
    <div class="cart">
      <el-table :data="tableData"
                border
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55"
                         align="center"></el-table-column>
        <el-table-column type="index"
                         label="序号"
                         width="180"
                         align="center"></el-table-column>
        <el-table-column prop="name"
                         label="游戏名"
                         width="180"
                         align="center"></el-table-column>
        <el-table-column prop="price"
                         label="价格"
                         align="center"></el-table-column>
        <el-table-column label="数量"
                         align="center">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.number"
                             :min="1"
                             :max="10"
                             label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="total_warpper">
        <h3>总价：¥{{totalPrice}}</h3>
        <h3>数量：{{totalNumber}}</h3>
      </div>
      <div class="group_btn">
        <el-button type="success"
                   @click="addDialog">购买</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      multipleSelection: [],
      formLabelWidth: '200',
      tableData: [
        {
          name: 'Desperados III',
          price: 310,
          number: 1
        },
        {
          name: 'Lords Of The Fallen',
          price: 9,
          number: 1
        },
        {
          name: '赛博朋克 2077',
          price: 298,
          number: 1
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    }
  },
  computed: {
    totalPrice () {
      var pricetotal = 0
      for (var i = 0; i < this.multipleSelection.length; i++) {
        pricetotal +=
          this.multipleSelection[i].price * this.multipleSelection[i].number
      }
      return pricetotal
    },
    totalNumber () {
      var numbertotal = 0
      for (var i = 0; i < this.multipleSelection.length; i++) {
        numbertotal += this.multipleSelection[i].number
      }
      return numbertotal
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  margin: 50px auto;
  width: 1000px;
}
.group_btn {
  margin-bottom: 30px;
  text-align: right;
}
.total_warpper {
  text-align: right;
  margin-top: 30px;
  color: #ffffff;
}
h3 {
  margin-top: 10px;
}
</style>
