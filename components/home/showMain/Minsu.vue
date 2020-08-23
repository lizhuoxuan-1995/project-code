<template>
  <div>
    <Title class="title">
      <template>
        <div class="_head">
          <ul>
            <li
              v-for="(ele, index) in showList.title"
              :key="ele"
              :class="{active: index == curIndex}"
              @mouseover="change(index)"
            >{{ele}}</li>
          </ul>
          <div class="all">
            <router-link to="/">全部</router-link>
            <i class="iconfont icon-arrow-l"></i>
          </div>
        </div>
      </template>
    </Title>
    <div class="minsu_body">
      <ul>
        <li v-for="item in showList.content" :key="item.name">
          <img :src="item.img_large" alt />
          <div>
            <p class="name">{{item.name}}</p>
            <span class="msg">{{item.msg}}</span>
            <span class="price">￥{{item.price}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import api from "@/api/index";
export default {
  components: {
    Title
  },
  methods: {
    change(index) {
      if (index == 0) {
        return;
      } else {
        this.curIndex = index;
        api.getMinsuMsg().then(({ data }) => {
          this.showList.content = data.content[this.curIndex - 1];
        });
      }
    }
  },
  created() {
    api.getMinsuMsg().then( ({data}) => {
      this.showList.content = data.content[0]
    })
  },
  data() {
    return {
      curIndex: 1,
      showList: {
        title: [
          "推荐民宿",
          "重庆",
          "绵阳",
          "乐山",
          "凉山彝族自治州",
          "遵义",
          "自贡",
          "雅安",
          "宜宾",
          "内江",
          "泸州"
        ],
        content: []
      }
    };
  }
};
</script>

<style scoped lang='less'>
.title {
  background: linear-gradient(
    to right bottom,
    rgb(243, 182, 74) 2%,
    rgb(242, 197, 69) 97%
  );
}
.minsu_body ul {
  background-color: #fff;
  height: 690px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  border: 1px solid #e5e5e5;
  border-radius: 0 0 4px 4px;
  li {
    width: 370px;
    img {
      width: 100%;
      height: 208px;
      border-radius: 5px;
    }
    .name {
      font-size: 16px;
      font-weight: 500;
      color: #222;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 300px;
      overflow: hidden;
    }
    .msg {
      font-size: 12px;
      color: #999;
      display: block;
      overflow: hidden;
    }
    .price {
      font-weight: 500;
      color: #ff6600;
      font-size: 22px;
      margin: 5px 0;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>