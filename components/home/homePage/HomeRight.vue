<template>
  <div class="r-container">
    <ul>
      <li>
        <router-link :to="{name: 'goodList', params: {mark: '外卖'}}">美团外卖</router-link>
      </li>
      <li>
        <router-link to="/">猫眼电影</router-link>
      </li>
      <li>
        <router-link to="/">美团酒店</router-link>
      </li>
      <li>
        <router-link to="/">民宿/公寓</router-link>
      </li>
      <li>
        <router-link to="/">商家入驻</router-link>
      </li>
      <li>
        <router-link to="/">美团公益</router-link>
      </li>
    </ul>

    <div class="top second">
      <div class="slideshow">
        <Slider />
      </div>
      <div class="picture">
        <router-link to="/">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
        </router-link>
      </div>

      <div class="login">
        <div class="headPortrait">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
        </div>
        <p v-if="!userName">Hi! 你好</p>
        <p v-else>Hi! {{userName}}</p>
        <el-button round>
          <router-link to="/Register">注册</router-link>
        </el-button>
        <el-button round>
          <router-link to="/Login">立即登录</router-link>
        </el-button>
      </div>
    </div>

    <div class="bot second">
      <div class="picture-w">
        <router-link to="/">
          <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt />
        </router-link>
      </div>
      <div class="picture-w">
        <router-link to="/">
          <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
        </router-link>
      </div>
      <div class="picture">
        <router-link to="/">
          <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
        </router-link>
      </div>

      <div class="load">
        <div class="qrcode">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
        </div>
        <p>美团APP手机版</p>
        <p class="small">
          <span class="red">一元起</span>
          <span>吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import { mapState } from "vuex";
export default {
  components: {
    Slider
  },
  computed: {
    ...mapState(["userName"])
  }
};
</script>

<style scoped lang='less'>
@oRed: #ed1326;
@mt: #ffc300;
.r-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 412px;
  position: relative;
  ul {
    position: absolute;
    top: -50px;
    left: 10px;
    li {
      display: inline-block;
      margin: 0 20px;
      font-weight: 700;
    }
    li:hover {
      color: @oRed;
    }
    li:nth-child(2n + 1):hover {
      color: @mt;
    }
  }
  .second {
    display: flex;
    justify-content: space-between;
  }

  .top {
    height: 240px;
    .slideshow {
      width: 550px;
    }
    img {
      height: 100%;
    }
  }

  .bot {
    height: 165px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .picture {
    width: 150px;
    overflow: hidden;
  }
  .picture-w {
    width: 272px;
    background: red;
  }

  .login {
    width: 200px;
    border: 1px solid #e5e5e5;
    font-weight: 500;
    background-color: #fff;
    text-align: center;
    .headPortrait {
      margin: 30px 0 4px 0;
      img {
        width: 55px;
        height: 55px;
        border: 4px solid #e5e5e5;
        border-radius: 50%;
      }
    }
    p {
      margin: 0;
    }
    .el-button {
      display: block;
      width: 120px;
      height: 38px;
      margin: 15px auto;
    }
  }

  .load {
    width: 200px;
    border: 1px solid #e5e5e5;
    font-weight: 500;
    background-color: #fff;
    .qrcode {
      margin-top: 10px;
      img {
        display: block;
        width: 95px;
        height: 95px;
        margin: 0 auto;
      }
    }
    p:not(.small) {
      font-size: 16px;
      color: #222;
      text-align: center;
      margin: 0;
    }
    .small {
      font-size: 12px;
      text-align: center;
      margin: 3px 0 0 0;
      span {
        margin-right: 3px;
      }
      .red {
        color: @oRed;
      }
    }
  }
}
</style>