<template>
  <div class="login_box" v-document-click="documentClick">
    <div class="header">
      <router-link to="/"></router-link>
    </div>

    <div class="login_wrapper">
      <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />

      <div class="login_selction">
        <div class="login_normal" v-if="isShow">
          <div class="errorMsg" v-if="errorReminder">{{ errorReminder }}</div>
          <div class="top">
            <span>账号登录</span>
            <div class="login_way" @click="changeLoginWay">
              <span>手机动态码登录</span>
              <i class="iconfont icon-shouji54"></i>
            </div>
          </div>
          <div class="telphoneNum" :class="{focus: count == 1}">
            <span>+86</span>
            <i class="iconfont icon-arrow-l"></i>
            <input
              v-model="telphoneNumber"
              type="text"
              placeholder="手机号"
              @click="changeFirst"
              @blur="Reset"
              @keydown.enter="submit"
            />
          </div>
          <div class="password" :class="{focus: count == 2}">
            <i class="iconfont icon-suo"></i>
            <input
              v-model="password"
              type="password"
              placeholder="密码"
              @click="changeSecond"
              @blur="Reset"
              @keydown.enter="submit"
            />
          </div>
          <div class="reset">
            <router-link to="/">忘记密码？</router-link>
          </div>
          <button @click="submit">登录</button>
          <span class="reminderMsg">
            还没有账号?
            <router-link to="/Register">免费注册</router-link>
          </span>
        </div>

        <div class="login_tel" v-else>
          <div class="errorMsg" v-if="errorReminder">{{ errorReminder }}</div>
          <div class="top">
            <span>账号登录</span>
            <div class="login_way" @click="changeLoginWay">
              <span>普通方式登录</span>
              <i class="iconfont icon-portrait"></i>
            </div>
          </div>
          <div class="telphoneNum" :class="{focus: count == 3}">
            <span>+86</span>
            <i class="iconfont icon-arrow-l"></i>
            <input
              type="text"
              placeholder="手机号"
              @click="changeThird"
              @blur="Reset"
              @keydown.enter="submit"
            />
          </div>
          <div class="password" :class="{focus: count == 4}">
            <i class="iconfont icon-suo"></i>
            <input
              type="text"
              placeholder="动态码"
              @click="changeForth"
              @blur="Reset"
              @keydown.enter="submit"
            />
            <a>获取手机动态码</a>
          </div>
          <div class="reset">
            <a href>忘记密码</a>
          </div>
          <button @click="submit">登录</button>
          <span class="reminderMsg">
            提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
            <router-link to="/">《美团点评用户服务协议》</router-link>
            <router-link to="/">《美团点评隐私政策》</router-link>
          </span>
        </div>

        <div class="other_way">
          <span>用合作网站账号登录</span>
          <div class="icon">
            <router-link to="/">
              <i class="iconfont icon-qq"></i>
            </router-link>
            <router-link to="/">
              <i class="iconfont icon-weibo"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <ul>
        <li>
          <router-link to="/">关于美团</router-link>
        </li>
        <li>
          <router-link to="/">加入我们</router-link>
        </li>
        <li>
          <router-link to="/">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/">帮助中心</router-link>
        </li>
        <li>
          <router-link to="/">美团手机版</router-link>
        </li>
      </ul>
      <span>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      isShow: true,
      count: 0,
      telphoneNumber: "",
      password: "",
      errorReminder: "",
    };
  },
  methods: {
    submit(e) {
      e.stopPropagation();
      if (!this.telphoneNumber && !this.password) {
        this.errorReminder = "请输入手机号和密码";
      } else if (!this.telphoneNumber) {
        this.errorReminder = "请输入手机号";
      } else if (!this.password) {
        this.errorReminder = "请输入密码";
      } else {
        api.getLoginMsg().then(({ data }) => {
          if (this.telphoneNumber != data.telphoneNumber) {
            this.errorReminder = "该用户不存在";
          } else {
            this.$router.push({ name: "Home" });
            this.$store.commit("changeUserName", data.userName);
          }
        });
      }
    },
    documentClick() {
      this.errorReminder = "";
    },
    changeLoginWay() {
      this.isShow = !this.isShow;
    },
    changeFirst() {
      this.count = 1;
    },
    changeSecond() {
      this.count = 2;
    },
    changeThird() {
      this.count = 3;
    },
    changeForth() {
      this.count = 4;
    },
    Reset() {
      this.count = 0;
    },
  },
};
</script>

<style scoped lang='less'>
a {
  color: #fe8c00;
}

.login_box {
  margin: 0 270px;
  height: 640px;
  position: relative;
  .header {
    height: 54px;
    margin: 40px 0 30px 0;
    a {
      width: 82px;
      height: 54px;
      display: block;
      background: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png")
        no-repeat left -188px bottom -70px;
    }
  }
  .login_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      font-size: 0;
    }
    .login_selction {
      margin-left: 115px;
      height: 370px;
      width: 270px;
      .login_normal,
      .login_tel {
        margin-top: 50px;
        position: relative;
        color: #666;
        font-size: 14px;
        .errorMsg {
          position: absolute;
          top: -60px;
          left: 0;
          border: 1px solid #f5d8a7;
          background: #fff6db;
          font-size: 12px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          padding-left: 20px;
        }
        .login_way {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 12px;
          cursor: pointer;
          i {
            font-size: 12px;
          }
        }
        .telphoneNum,
        .password {
          margin: 10px 0 20px;
          height: 36px;
          line-height: 34px;
          border: 1px solid #aaa;
          box-sizing: border-box;
          color: #646464;
          font-weight: 600;
          input {
            border: none;
            outline: none;
            width: 200px;
            font-size: 14px;
            height: 30px;
          }
        }
        .focus {
          border: 1px solid #ffc300;
        }
        .password {
          position: relative;
          i {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin: 0 10px;
          }
          a {
            color: #666;
            position: absolute;
            top: 0;
            right: 0;
            font-weight: 400;
            font-size: 12px;
            padding: 0 5px;
          }
        }
        .reset {
          position: absolute;
          right: 0;
          top: 130px;
          font-size: 12px;
        }
        button {
          margin: 20px 0 10px 0;
          text-align: center;
          cursor: pointer;
          outline: none;
          width: 100%;
          height: 34px;
          font-weight: 700;
          border: none;
          color: #000;
          background: linear-gradient(135deg, #ffd000, #ffbd00);
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        }
        .reminderMsg {
          color: #999;
          font-size: 12px;
        }
      }
      .login_normal .reminderMsg {
        color: #333;
        font-size: 16px;
      }
      .other_way {
        display: block;
        margin-top: 25px;
        border-top: 1px solid #ccc;
        position: relative;
        span {
          display: block;
          background: #fff;
          position: absolute;
          top: -12px;
          left: 65px;
          color: #666;
        }
        .icon {
          margin-top: 30px;
          text-align: center;
          i {
            font-size: 18px;
          }
          .icon-qq {
            margin-right: 20px;
            color: #30d9ed;
          }
          .icon-weibo {
            color: #ff5c0e;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    margin-bottom: 30px;
    position: absolute;
    bottom: 0;
    ul {
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
      li {
        margin: 5px 10px;
        display: inline-block;
        border-right: 1px solid #eee;
        height: 14px;
        line-height: 14px;
        a {
          color: #999;
          font-size: 12px;
          margin-right: 15px;
        }
      }
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
}
</style>