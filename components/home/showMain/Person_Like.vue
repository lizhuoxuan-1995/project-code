<template>
  <div>
    <Title class="title">
      <template>
        <div class="_head">
          <ul>
            <li
              v-for="(ele, index) in title"
              :key="ele"
              :class="{active: index == curIndex}"
            >{{ele}}</li>
          </ul>
        </div>
      </template>
    </Title>
    <div class="like_contanier">
      <ul>
        <li v-for="ele in showList" :key="ele.index">
          <router-link to="/">
            <img :src="ele.url" alt="loading" @click="test(ele)" />
            <p class="name">{{ele.name}}</p>
            <div class="star">
              <i class="iconfont icon-one-star" v-if="ele.starLevel >= 1"></i>
              <i class="iconfont icon-one-star" v-if="ele.starLevel >= 2"></i>
              <i class="iconfont icon-one-star" v-if="ele.starLevel >= 3"></i>
              <i class="iconfont icon-one-star" v-if="ele.starLevel >= 4"></i>
              <i class="iconfont icon-one-star" v-if="ele.starLevel == 5"></i>
              <i class="iconfont icon-banxing1" v-if="ele.starLevel > 0 && ele.starLevel < 1"></i>
              <i class="iconfont icon-banxing1" v-if="ele.starLevel > 1 && ele.starLevel < 2"></i>
              <i class="iconfont icon-banxing1" v-if="ele.starLevel > 2 && ele.starLevel < 3"></i>
              <i class="iconfont icon-banxing1" v-if="ele.starLevel > 3 && ele.starLevel < 4"></i>
              <i class="iconfont icon-banxing1" v-if="ele.starLevel > 4 && ele.starLevel < 5"></i>
              <i class="iconfont icon-star-line" v-if="ele.starLevel < 4.5"></i>
              <i class="iconfont icon-star-line" v-if="ele.starLevel < 3.5"></i>
              <i class="iconfont icon-star-line" v-if="ele.starLevel < 2.5"></i>
              <i class="iconfont icon-star-line" v-if="ele.starLevel < 1.5"></i>
              <i class="iconfont icon-star-line" v-if="ele.starLevel < .5"></i>
              <span>{{ele.appriaseNum}}</span>
            </div>
            <span class="position">{{ele.position}}</span>
            <div class="price">
              <span>￥</span>
              <span>{{ele.price}}</span>
              <span>起</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  components: {
    Title,
  },
  methods: {
    test(ele) {
      console.log(ele.starLevel);
    },
  },
  data() {
    return {
      title: ["猜你喜欢", "为你甄选最合适"],
      curIndex: 1,
      showList: [
        {
          index: 1,
          url:
            "https://p0.meituan.net/bbia/d6d05e743de9a4a669186dd1ae8dfabb308781.jpg@267w_150h_1e_1c",
          name: "好利来（龙泉皇冠国际店）",
          starLevel: '4.5',
          appriaseNum: "340个评价",
          position: "北泉路",
          price: "6.0",
        },
        {
          index: 2,
          url:
            "https://p0.meituan.net/merchantpic/c6d68694e4eb40759915b4bac0c169d2253066.jpg@267w_150h_1e_1c",
          name: "Pinky.菲（凯德广场店）",
          starLevel: '5',
          appriaseNum: "2605个评价",
          position: "凯德广场",
          price: "1.0",
        },
        {
          index: 3,
          url:
            "https://p1.meituan.net/bbia/072cb04a1ce2a2e46cce4f724a73b5f7375349.jpg@267w_150h_1e_1c",
          name: "良木缘咖啡西餐（桐梓林店）",
          starLevel: '4',
          appriaseNum: "306个评价",
          position: "桐梓林",
          price: "85.0",
        },
        {
          index: 4,
          url:
            "https://p1.meituan.net/bbia/e215158445b9763943a3f9ba2c97d1a82128069.jpg@267w_150h_1e_1c",
          name: "蜀滋香鲜鱼坊（简阳店）",
          starLevel: 4.5,
          appriaseNum: "160个评价",
          position: "老城区",
          price: "89.9",
        },
        {
          index: 5,
          url:
            "https://p1.meituan.net/bbia/16171594ef2177484a6f18e3905a66011938845.png@267w_150h_1e_1c",
          name: "安德鲁森（交桂店）",
          starLevel: 4.5,
          appriaseNum: "84个评价",
          position: "西南交大",
          price: "8.8",
        },
        {
          index: 6,
          url:
            "https://p1.meituan.net/msmerchant/7fc1b20768eff80b857c83632c04fc1b65091.jpg@267w_150h_1e_1c",
          name: "行大田牛排海鲜自助（海滨城店）",
          starLevel: 4.5,
          appriaseNum: "6514个评价",
          position: "蛟龙港/海滨城",
          price: "78.0",
        },
        {
          index: 7,
          url:
            "https://p0.meituan.net/bbia/35fbe3f5bd0743d79d10e843c40615b6737238.png@267w_150h_1e_1c",
          name: "巴黎甜甜蛋糕连锁（大丰店）",
          starLevel: 5,
          appriaseNum: "232个评价",
          position: "大丰",
          price: "89.8",
        },
        {
          index: 8,
          url:
            "https://p0.meituan.net/msmerchant/48493995a17854bb5831cfef6baf18fb583829.jpg@267w_150h_1e_1c",
          name: "巴黎甜甜蛋糕连锁（大丰店）",
          starLevel: 3.5,
          appriaseNum: "6307个评价",
          position: "春熙路",
          price: "85.0",
        },
        {
          index: 9,
          url:
            "https://p1.meituan.net/msmerchant/af8eec866ed3abbc3ba3d19e1bd718e62231677.png@267w_150h_1e_1c",
          name: "盘古烤肉（春熙路旗舰店）",
          starLevel: 5,
          appriaseNum: "3163个评价",
          position: "春熙路",
          price: "16.8",
        },
        {
          index: 10,
          url:
            "https://p0.meituan.net/mogu/7306787fd12fa378a5b0d7ea2d254988231662.png@267w_150h_1e_1c",
          name: "鱼儿纸包鱼（蜀都万达直营店）",
          starLevel: 4.5,
          appriaseNum: "1871个评价",
          position: "蜀都万达",
          price: "16.8",
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
.title {
  background: linear-gradient(
    to right,
    rgb(88, 174, 221) 2%,
    rgb(66, 191, 205) 97%
  );
}
.like_contanier {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 0 0 4px 4px;
  box-sizing: content-box;
  ul {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    li {
      padding: 6px;
      width: 226px;
      img {
        width: 214px;
      }
      .name {
        margin: 10px 0 0 0;
        font-weight: 400;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        width: 180px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .star {
        height: 24px;
        i {
          font-size: 14px;
          color: orange;
        }
        .icon-banxing1 {
          font-size: 17px;
          vertical-align: text-bottom;
        }
        span {
          margin: 0 0 0 10px;
          font-size: 12px;
          color: #999;
        }
      }
      .position {
        margin: 4px 0 0 0;
        font-size: 12px;
        color: #999;
        height: 18px;
        line-height: 18px;
        display: block;
      }
      .price {
        color: #ff6600;
        height: 28px;
        font-weight: 700;
        span:nth-child(1) {
          font-size: 14px;
        }
        span:nth-child(2) {
          font-size: 22px;
        }
        span:nth-child(3) {
          margin: 0 0 0 4px;
          font-size: 12px;
        }
      }
    }
    li:hover {
      background-color: #f4f4f4;
    }
  }
}
</style>