<template>
  <div class="register_wrapper">
    <div class="head">
      <div class="yy">
        <router-link to="/">
          <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt />
        </router-link>
        <div class="login_block">
          <span>已有美团账号？</span>
          <button>
            <router-link to="/Login">登录</router-link>
          </button>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="telNum row">
        <span>手机号</span>
        <input
          :class="{warn: telNumWarn}"
          type="text"
          v-model="telNum"
          @click="telInit"
          @blur="telphone"
        />
        <div class="hidden" v-show="!telNum && !telNumBegin">
          <i class="iconfont el-icon-remove"></i>
          请输入您的手机号码
        </div>
        <div class="hidden" v-show="telNumWarn && telNum">
          <i class="iconfont el-icon-remove"></i>
          请输入正确的11位手机号码
        </div>
      </div>

      <div class="msg_verify">
        <button>免费获取短信动态码</button>
      </div>
      <div class="short_msg row">
        <span>短信动态码</span>
        <input
          :class="{warn: shortMsgWarn}"
          type="text"
          v-model="shortMsg"
          @blur="msg"
          @click="msgInit"
        />
        <div class="hidden" v-show="!shortMsg && !shortMsgBegin">
          <i class="iconfont el-icon-remove"></i>
          请输入短信动态码
        </div>
        <div class="hidden" v-show="shortMsg && shortMsgWarn">
          <i class="iconfont el-icon-remove"></i>
          输入错误，请重新输入！
        </div>
      </div>

      <div class="create_paasword row">
        <span>创建密码</span>
        <input
          :class="{warn: passwordWarn}"
          type="password"
          v-model="password"
          @click="passwordInit"
          @blur="passwordStrong"
        />
        <div class="hidden" v-show="!password && !passwordBegin">
          <i class="iconfont el-icon-remove"></i>
          请填写密码
        </div>
        <div class="hidden" v-show="password && passwordWarn">
          <i class="iconfont el-icon-remove"></i>
          密码过长
        </div>
      </div>
      <div class="row password_power">
        <div class="hidden" :class="[{level1: level1},{level2: level2},{level3: level3}]"></div>
        <div class="show">
          <div class="weak">弱</div>
          <div class="middle">中</div>
          <div class="strong">强</div>
        </div>
      </div>

      <div class="password_verify row">
        <span>确认密码</span>
        <input
          :class="{warn: passwordVerifyWarn}"
          type="password"
          v-model="passwordVerify"
          @blur="verify"
          @click="verifyInit"
        />
        <div class="hidden" v-show="!passwordVerify && !passwordVerifyBegin">
          <i class="iconfont el-icon-remove"></i>
          请再次输入密码
        </div>
        <div class="hidden" v-show="passwordVerify && passwordVerifyWarn">
          <i class="iconfont el-icon-remove"></i>
          两次输入的密码不一致,请重新输入！
        </div>
      </div>
      <div class="agreement">
        <button @click="submit">同意以下协议并注册</button>
      </div>
      <div class="last">
        <a href>《美团点评用户服务协议》</a>
        <a href>《美团点评隐私政策》</a>
      </div>
    </div>

    <footer>
      <p>©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telNum: "",
      shortMsg: "",
      password: "",
      passwordVerify: "",

      telNumWarn: false,
      shortMsgWarn: false,
      passwordWarn: false,
      passwordVerifyWarn: false,

      telNumBegin: true,
      shortMsgBegin: true,
      passwordBegin: true,
      passwordVerifyBegin: true,
    };
  },
  methods: {
    telphone() {
      this.telNumBegin = false;
      this.telNumWarn = this.telNum.length != 11;
    },
    telInit() {
      this.telNumWarn = false;
    },
    msg() {
      this.shortMsgBegin = false;
      this.shortMsgWarn = this.shortMsg.length != 4;
    },
    msgInit() {
      this.shortMsgWarn = false;
    },
    passwordStrong() {
      this.passwordBegin = false;
      if (this.password.length > 16 || this.password.length == 0) {
        this.passwordWarn = true;
      }
    },
    passwordInit() {
      this.passwordWarn = false;
    },
    verify() {
      this.passwordVerifyBegin = false;
      this.passwordVerifyWarn = this.passwordVerify != this.password;
    },
    verifyInit() {
      this.passwordWarn = false;
    },
    submit() {
      if (!this.telNum) {
        this.telphone();
      }
      if (!this.shortMsg) {
        this.msg();
      }
      if (!this.password) {
        this.passwordStrong();
      }
      if (this.passwordVerify != this.password) {
        this.verify();
      }
      if (
        !this.telNumWarn &&
        !this.telNumBegin &&
        !this.shortMsgWarn &&
        !this.shortMsgBegin &&
        !this.passwordWarn &&
        this.passwordVerify == this.password
      ) {
        this.$router.push({ name: "login" });
      }
    }
  },
  computed: {
    level1() {
      return this.password.length > 0 && this.password.length <= 6;
    },
    level2() {
      return this.password.length > 6 && this.password.length <= 10;
    },
    level3() {
      return this.password.length > 10 && this.password.length <= 16;
    }
  }
};
</script>

<style scoped lang='less'>
a {
  color: #fe8c00;
}

.warn {
  border: 1px solid red !important;
}

.register_wrapper {
  color: #666;
  .head {
    box-shadow: 0 1px 3px 1px #ddd;
    .yy {
      margin: 0 270px;
      height: 60px;
      padding: 10px 0;
      position: relative;
      img {
        height: 36px;
      }
      .login_block {
        position: absolute;
        top: calc(50% - 10px);
        right: 0;
        font-size: 14px;
      }
    }
  }

  .body {
    margin: 30px 270px 0 270px;
    .row {
      padding: 8px 0 8px 110px;
      height: 36px;
      box-sizing: content-box;
      position: relative;
      span {
        position: absolute;
        width: 100px;
        height: 100%;
        line-height: 52px;
        top: 0;
        left: 0;
        text-align: right;
      }
      input {
        width: 260px;
        height: 100%;
        font-size: 14px;
        padding-left: 5px;
      }
      input:focus {
        border: 1px solid #ffc300;
        outline: 0;
      }
      .hidden {
        display: inline-block;
        font-size: 12px;
        i {
          margin: 0 5px;
          color: orange;
        }
      }
    }

    .password_power {
      height: 20px;
      padding: 0;
      margin-left: 110px;
      position: relative;
      background: #ddd;
      width: 260px;
      .hidden {
        height: 100%;
        width: 0;
      }
      .level1 {
        width: 86px;
        background: red;
        transition: all 0.5s ease-in-out;
      }
      .level2 {
        width: 170px;
        background: orange;
        transition: all 0.5s ease-in-out;
      }
      .level3 {
        width: 260px;
        background: green;
        transition: all 0.5s ease-in-out;
      }
      .show {
        width: 260px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .show * {
        width: 86px;
        display: inline-block;
        color: #fff;
        text-align: center;
      }
      .middle {
        border-left: 4px solid #fff;
        border-right: 4px solid #fff;
      }
    }

    .msg_verify,
    .agreement,
    .last {
      margin-left: 110px;
      a {
        color: #000;
      }
    }

    .msg_verify button {
      padding: 2px 8px;
      font-size: 12px;
      color: #333;
      background: #eee;
      border: 1px solid #e3e3e3;
      border-bottom: 1px solid #aaa;
      border-radius: 4px;
    }
    .msg_verify button:hover {
      background: #fff;
      cursor: pointer;
    }
    .msg_verify button:focus {
      outline: 0;
    }

    .agreement button {
      outline: none;
      border: none;
      cursor: pointer;
      height: 34px;
      width: 180px;
      line-height: 34px;
      text-align: center;
      color: #000;
      font-weight: 700;
      background: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      display: block;
      margin: 10px 0;
    }
    .last a {
      font-size: 12px;
    }
  }

  footer {
    text-align: center;
    border-top: 1px solid #eee;
    padding-top: 20px;
    margin-top: 30px;
    font-size: 14px;
    color: #999;
  }
}
</style>