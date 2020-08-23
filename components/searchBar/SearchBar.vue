<template>
  <div class="search_box">
    <div class="middle">
      <div class="picture">
        <router-link to="/">
          <img src="/picture/logo.png" alt="loading" />
        </router-link>
      </div>
      <div class="search_right">
        <div class="search">
          <input
            type="text"
            v-model="inputVal"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <div class="nav" v-if="show">
            <dl v-if="Hot">
              <dt>
                <router-link to="/City">热门搜索</router-link>
              </dt>
            </dl>
            <dl v-else>
              <router-link
                :to="{name: 'goodList', params: {mark: ele}}"
                tag="dd"
                v-for="ele in searchWord"
                :key="ele"
                class="hov"
              >{{ele}}</router-link>
            </dl>
          </div>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      inputVal: "",
      isfocus: false,
      searchWord: [],
      timer: null,
      transfer: [],
    };
  },
  computed: {
    Hot() {
      return !this.inputVal;
    },
    show() {
      return this.isfocus;
    },
  },
  methods: {
    focus() {
      this.isfocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isfocus = false;
      }, 100);
    },
    getHandler() {
      api.getSearchWord().then(({ data }) => {
        this.transfer = data.searchWord.filter((ele) => {
          return ele.indexOf(this.inputVal) != -1;
        });
        this.searchWord = this.transfer;
      });
    },
    input() {
      clearTimeout(this.timer);
      this.searchWord = [];
      this.getHandler();
    },
  },
};
</script>

<style scoped lang='less'>
@mt: #ffc300;
.hov:hover {
  color: @mt;
  background: rgba(0, 0, 0, 0.1);
}

.search_box {
  background-color: white;
  height: 157px;
  padding-top: 30px;
  .middle {
    width: 1160px;
    margin: 0 auto;
    height: 50px;
    position: relative;
    text-align: center;
    .picture {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 126px;
        height: 46px;
      }
    }
    .search_right {
      display: inline-block;
      vertical-align: 18px;
      .search {
        width: 550px;
        height: 44px;
        line-height: 40px;
        position: relative;
        input {
          width: 470px;
          height: 40px;
          box-sizing: border-box;
          border: 1px solid #e5e5e5;
          outline: none;
          border-radius: 4px 0 0 4px;
          padding: 15px;
          font-size: 14px;
        }
        input::placeholder {
          color: #ccc;
        }
        input:focus + .nav {
          display: block;
        }
        .el-button {
          width: 80px;
          height: 40px;
          background-color: @mt;
          border-style: none;
          border-radius: 0 4px 4px 0;
        }
        .nav {
          width: 470px;
          box-sizing: border-box;
          min-height: 100px;
          position: absolute;
          z-index: 3;
          left: 0;
          top: 42px;
          border: 1px solid #e5e5e5;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          font-size: 12px;
          background-color: #fff;
          dl {
            margin: 0;
            dt {
              margin-bottom: 5px;
              text-align: left;
              line-height: 25px;
              font-weight: 700;
              color: #999;
              font-family: Arial, Helvetica, sans-serif;
              margin: 10px;
            }
            dd {
              padding: 0 10px;
              line-height: 25px;
              margin: 0;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>