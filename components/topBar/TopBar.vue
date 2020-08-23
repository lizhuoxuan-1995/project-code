<template>
  <el-row>
    <el-col :span="12" class="col">
      <div>
        <i class="el-icon-location-outline"></i>
        <span>{{ city }}</span>
        <router-link to="/City" class="change hov">切换城市</router-link>
        <span>
          [
          <a class="hov" href>新津县</a>
          <a class="hov" href>崇州</a>
          <a class="hov" href>彭州</a>
          ]
        </span>
        <div class="login" v-if="!userName">
          <router-link class="log" to="/Login">立即登录</router-link>
          <router-link class="register hov" to="/Register">注册</router-link>
        </div>
        <div class="login" v-else>
          <span class="log" style="marginRight: 10px">{{ userName }}</span>
          <span class="hov" @click="submit">退出</span>
        </div>
      </div>
    </el-col>
    <el-col :span="12" class="col">
      <Nav></Nav>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import Nav from "./Nav";

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: true
    };
  },
  computed: {
    ...mapState(["city", "userName"])
  },
  methods: {
    submit() {
      this.$store.commit("resetLogin");
      this.$router.push({name: 'Home'})
    }
  }
};
</script>

<style scoped lang='less'>
.el-row {
  font-size: 12px;
  color: #999;
  width: 1160px;
  .col {
    line-height: 40px;
    .change {
      border: 1px solid #e5e5e5;
      border-radius: 4px;
    }
  }
  .login {
    display: inline-block;
  }
  .col:nth-of-type(1) {
    text-align: left;
    div {
      *:not(:first-child) {
        margin-right: 10px;
      }
      a {
        margin-right: 10px;
      }
      a:last-child {
        margin-right: 0;
      }
      .log {
        color: orange;
      }
    }
  }
}
.hov:hover {
  color: orange;
  cursor: pointer;
}
</style>