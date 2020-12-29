<template>
  <div class="register">
    <div class="register_page">
      <div class="register_content">
        <div class="register_box">
          <div class="register_title">创建您的账户</div>
          <div class="register_form">
            <el-form :rules="registerFormRules"
                     ref="registerForm"
                     :model="registerForm"
                     label-position="right"
                     label-width="auto"
                     show-message
                     hide-required-asterisk>
              <el-form-item label="Steam账户名称"
                            prop="registerName">
                <el-col :span="12">
                  <el-input type="text"
                            v-model="registerForm.registerName"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="密码"
                            prop="registerPassword">
                <el-col :span="12">
                  <el-input type="password"
                            v-model="registerForm.registerPassword"
                            autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="确认密码"
                            prop="checkPassword">
                <el-col :span="12">
                  <el-input type="password"
                            v-model="registerForm.checkPassword"
                            autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item style="padding-left:50px">
                <el-button type="primary"
                           @click="check">注册</el-button>
                <el-button @click="resetForm('registerForm')">清空</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var storage = window.localStorage
var x = [{
  name: '',
  password: ''
}]
var data = JSON.stringify(x)
storage.setItem('user', data)
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        registerName: '',
        registerPassword: '',
        checkPassword: ''
      },
      registerFormRules: {
        registerName: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        registerPassword: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    check () {
      if (this.registerForm.registerPassword !== this.registerForm.checkPassword) {
        alert('您输入的两次密码不一致')
      } else {
        alert('注册成功')
        this.submit()
      }
    },
    submit () {
      var storage = window.localStorage
      var x = storage.getItem('user')
      var user = JSON.parse(x)
      var registeruser = {
        name: this.registerForm.registerName,
        password: this.registerForm.registerPassword
      }
      user.push(registeruser)
      console.log(user)
      var data = JSON.stringify(user)
      storage.setItem('user', data)
      this.switchTo('/home')
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  background: url("../assets/img/loginbg.jpg");
  background-repeat: no-repeat;
  background-color: #212429;
}

.register_page {
  width: 940px;
  margin: 0 auto;
}

.register_content {
  padding: 50px;
  min-height: 600px;
  max-width: 700px;
}

.register_box {
  padding: 20px 16px;
  position: relative;
}

.register_title {
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 200;
  letter-spacing: 2px;
}
</style>
