<template>
  <div class="login">
    <div class="login_content">
      <div class="login_content_flex">
        <div class="login_content_left">
          <div class="loginbox">
            <div class="loginbox_content">
              <div class="login_title">登录</div>
              <div class="login_form">
                <el-form :rules="loginFormRules"
                         ref="loginForm"
                         :model="loginForm"
                         label-position="right"
                         label-width="auto"
                         show-message
                         hide-required-asterisk>
                  <el-form-item label="Steam账户名称"
                                prop="loginName">
                    <el-col :span="22">
                      <el-input type="text"
                                v-model="loginForm.loginName"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="密码"
                                prop="loginPassword">
                    <el-col :span="22">
                      <el-input type="password"
                                v-model="loginForm.loginPassword"
                                autocomplete="off"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item style="padding-left:10px">
                    <el-button type="primary"
                               @click="check">登录</el-button>
                    <el-button @click="resetForm('loginForm')">清空</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="login_btn_ctn">
                <a target="_top"
                   id="link_forgot_password">
                  忘记您的密码？ </a>
              </div>
            </div>
          </div>
        </div>
        <div class="login_content_right">
          <div class="login_join_desc subtext">加入 Steam，探索数千款精彩游戏。</div>
          <img alt="Join Steam"
               style="width: 320px;"
               src="../assets/img/join_img.png">
          <div class="login_btn_ctn">
            <div class="subtext">免费加入且简单易用。</div>
            <router-link to="/register">
              <el-button type="info">加入Steam</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var nowuser = ''
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        loginName: '',
        loginPassword: ''
      },
      loginFormRules: {
        loginName: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        loginPassword: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    check () {
      var storage = window.localStorage
      var json = storage.getItem('user')
      var jsonObj = JSON.parse(json)
      var len = jsonObj.length
      let i = 0
      let error = 1
      for (i = 0; i < len; i++) {
        if (jsonObj[i].name === this.loginForm.loginName && jsonObj[i].password === this.loginForm.loginPassword) {
          error = 0
          this.$store.state.nowuser = jsonObj[i]
          console.log(nowuser)
          this.switchTo('/home')
          break
        } else if (this.$store.state.nowuser === null && jsonObj[i].name !== this.loginForm.loginName && jsonObj[i].password !== this.loginForm.loginPassword) {
          error = 1
        }
      }
      if (!error) {
        alert('登陆成功')
      } else if (error) {
        alert('账号或密码错误，请重新输入')
      }
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
.login {
  background: url("../assets/img/loginbg.jpg");
  background-repeat: no-repeat;
  background-color: #212429;
}

.login_content {
  width: 940px;
  margin: 0 auto;
}

.login_content_flex {
  display: flex;
  justify-content: space-between;
  min-height: 800px;
}

.login_content_left {
  flex-grow: 1;
  background: radial-gradient(
    60.12% 60.12% at 104.83% -0.03%,
    rgb(74, 81, 92, 0.3) 0%,
    rgba(74, 81, 92, 0) 100%
  );
}

.loginbox {
  min-height: 352px;
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.loginbox_content {
  min-height: 264px;
  padding-bottom: 16px;
  max-width: 400px;
}

.login_title {
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 200;
  letter-spacing: 2px;
  text-align: center;
}

.login_form {
  width: 400px;
}

.login_content_right {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.login .login_join_desc {
  max-width: 60%;
  text-align: center;
  font-size: 14px;
}

.login .subtext {
  font-size: 14px;
  color: #b8b6b4;
}

.login_btn_ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.login_btn_ctn a {
  margin: 20px 0 0 0;
  display: block;
  text-align: center;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: #ffffff;
}
</style>
