<template>
  <div>
    <ul>
      <li class="menu">
        <router-link class="hov" to="/">我的美团</router-link>
        <dl class="hidden">
          <dd v-for="ele in myMt" :key="ele.id">
            <router-link class="hov" to="/">{{ ele.title }}</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link class="hov" to="/">手机APP</router-link>
      </li>
      <li class="menu">
        <router-link class="hov" to="/">商家中心</router-link>
        <dl class="hidden shop">
          <dd v-for="ele in shopCenter" :key="ele.id">
            <router-link class="hov" to="/">{{ ele.title }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="menu">
        <router-link class="hov" to="/">美团规则</router-link>
        <dl class="hidden">
          <dd v-for="ele in ruleArr" :key="ele.id">
            <router-link class="hov" to="/">{{ ele.name }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="menu">
        <router-link class="hov" to="/">网站导航</router-link>
        <dl class="hidden webNav">
          <div class="hotal nav">
            <dt>酒店旅游</dt>
            <dd v-for="ele in webNav.hotal" :key="ele.id">
              <router-link class="hov" to="/City">{{ele.title}}</router-link>
            </dd>
          </div>
          <div class="eating nav">
            <dt>吃美食</dt>
            <dd v-for="ele in webNav.eating" :key="ele.id">
              <router-link class="hov" to="/">{{ele.title}}</router-link>
            </dd>
          </div>
          <div class="movies nav">
            <dt>看电影</dt>
            <dd v-for="ele in webNav.movies" :key="ele.id">
              <router-link class="hov" to="/">{{ele.title}}</router-link>
            </dd>
          </div>
          <div class="mobileApp nav">
            <dt>手机应用</dt>
            <dd v-for="ele in webNav.mobileApp" :key="ele.id">
              <router-link class="hov" to="/">
                <img :src="ele.url" alt="x" />
              </router-link>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      myMt: [],
      shopCenter: [],
      ruleArr: [],
      webNav: {}
    };
  },
  created() {
    api.getTop_nav().then(({ data }) => {
      this.myMt = data.myMt;
      this.shopCenter = data.shopCenter;
      this.ruleArr = data.ruleArr;
      this.webNav = data.webNav;
    });
  }
};
</script>

<style scoped lang='less'>
div {
  text-align: right;
  li {
    display: inline-block;
    width: 80px;
    text-align: center;
    position: relative;
    border-bottom: none;
    dl {
      position: absolute;
      right: 0;
      top: 39px;
      flex-direction: column;
      width: 80px;
      background-color: #fff;
      margin: 0;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      dd {
        height: 40px;
        line-height: 40px;
        margin: 0;
      }
    }
    dl.shop {
      width: 120px;
    }
    dl.webNav {
      width: 1160px;
      flex-direction: row;
      padding: 30px 30px 30px 50px;
      box-sizing: border-box;
      div {
        margin-right: 50px;
        text-align: center;
        line-height: 20px;
        dt {
          font-size: 14px;
          color: #000;
          font-weight: 500;
          margin-bottom: 30px;
        }
        dd {
          display: inline-block;
          height: 30px;
          line-height: 30px;
        }
      }
      .hotal {
        width: 235px;
        dd {
          width: 33%;
        }
      }
      .eating {
        width: 125px;
        dd {
          width: 50%;
        }
      }
      .movies {
        width: 90px;
      }
      .mobileApp {
        dd {
          height: 60px;
          margin: 50px 5px 0 10px;
          img {
            width: 60px;
            height: 60px;
          }
        }
        dd:nth-of-type(1) {
          margin-left: 50px;
        }
      }
    }
  }
  .menu:hover {
    background-color: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
  li:hover > dl {
    display: flex;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
}

.hov:hover {
  background-color: #fff;
  color: orange;
}

.hidden {
  display: none;
}
</style>