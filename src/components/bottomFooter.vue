<template>
  <div class="app">
    <div class="footer">
      <div class="footer-content">
        <div class="rule"></div>
        <div id="footer_logo_steam">
          <img src="../assets/img/logo_steam_footer.png"
               alt="Valve Software"
               border="0">
        </div>
        <div id="footer_logo"><a href="#"
             target="_blank"><img src="../assets/img/footerLogo_valve_new.png"
                 alt="Valve Software"
                 border="0"></a></div>
        <div class="footer_text">
          <div>©2020 Valve Corporation。保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。</div>
          <div>所有的价格均已包含增值税（如适用）。&nbsp;&nbsp;

            <a target="_blank">隐私政策</a>
            &nbsp; | &nbsp;
            <a target="_blank">法律信息</a>
            &nbsp; | &nbsp;
            <a target="_blank">Steam 订户协议</a>
            &nbsp; | &nbsp;
            <a target="_blank">退款</a>

          </div>
          <div class="responsive_optin_link">
            <div class="btn_medium btnv6_grey_black"
                 onclick="Responsive_RequestMobileView()">
              <span>查看移动版网站</span>
            </div>

          </div>

          <div style="clear: left;"></div>
          <br>

          <div class="rule"></div>

          <div class="valve_links">
            <a target="_blank">关于 Valve</a>
            &nbsp; | &nbsp;<a target="_blank">Steamworks</a>
            &nbsp; | &nbsp;<a target="_blank">工作</a>
            &nbsp; | &nbsp;<a target="_blank">Steam 分销</a>
            &nbsp; | &nbsp;<a target="_blank">礼物卡</a>
            &nbsp; | &nbsp;<a target="_blank"><img src="../assets/img/ico_facebook.gif"> Steam</a>
            &nbsp; | &nbsp;<a target="_blank"><img src="../assets/img/ico_twitter.gif"> @steam</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomFooter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding: 16px 0 0px 0;
  position: relative;
  height: 150px;
  margin: 0;
}

.footer-content {
  width: 940px;
  margin: 0px auto;
  padding-top: 16px;
}

.rule {
  height: 8px;
  border-top: 1px solid #363c44;
}

#footer_logo_steam {
  float: right;
  padding-top: 2px;
}

#footer_logo {
  float: left;
  padding-top: 2px;
}

#footer_logo img {
  height: 25px;
  width: auto;
}

.footer_text {
  float: left;
  margin-left: 12px;
  color: #8f98a0;
  font-size: 12px;
  line-height: 16px;
}

.responsive_optin_link {
  display: none;
}

.valve_links {
  margin-top: 8px;
  float: left;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 13px;
  color: #61686d;
}

a {
  text-decoration: none;
  color: #c6d4df;
}
</style>
