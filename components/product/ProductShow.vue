<template>
  <div>
    <div class="productShow_title">
      <span
        v-for="(item, index) in showList"
        :key="index"
        :class="{focus: index == count}"
        @click="changeFocus(index)"
      >{{item.title}}</span>
    </div>
    <div class="productShow_main">
      <div>
        <ul>
          <li v-for="(item, index) in showList[count].list" :key="index">
            <router-link to="/">
              <div class="img">
                <div class="index">{{index + 1}}</div>
                <img :src="item.url" alt="点击重新加载" />
              </div>
              <div class="detail">
                <span class="name">{{item.name}}</span>
                <div class="grade">
                  <el-rate
                    v-model="item.grade"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  ></el-rate>
                  <span class="discusses">{{item.discusses}}条评论</span>
                </div>
                <div class="position">{{item.position}}</div>
                <div class="price">人均￥{{item.averagePrice}}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: [
        {
          title: "默认",
          list: [
            {
              name: "铜人李火锅（人民公园店）",
              grade: 4.8,
              discusses: 7497,
              position: "青羊区横小南街2号（地铁2号线人民公园站A出口）",
              averagePrice: 80,
              url:
                "https://p1.meituan.net/180.180/deal/__27765916__3756537.jpg@220w_125h_1e_1c"
            },
            {
              name: "蜀兄妹民间川菜（人民公园店）",
              grade: 3.9,
              discusses: 61,
              position: "青羊区东城根南街21号1层",
              averagePrice: 60,
              url:
                "https://img.meituan.net/600.600/msmerchant/f60f4bccffd0e5ee913d540f7d47bc21147939.jpg@220w_125h_1e_1c"
            },
            {
              name: "丁太婆半节巷名小吃",
              grade: 5,
              discusses: 4280,
              position: "青羊区东城根南街17号附5-6号（近人民西路口）",
              url:
                "https://p0.meituan.net/600.600/mogu/fa0c06593e2932cce5e6b1c8b0663a05151453.jpg@220w_125h_1e_1c"
            }
          ]
        },
        {
          title: "销量",
          list: [
            {
              name: "爱客得海鲜自助烤肉·涮涮锅（春熙路店）",
              grade: 4.7,
              discusses: 65552,
              position: "锦江区春熙路北段35号（三益公商厦3楼）",
              averagePrice: 59,
              url:
                "https://img.meituan.net/600.600/msmerchant/9ed47269bd60cafa43d37fa1e06325ca578361.jpg@220w_125h_1e_1c"
            },
            {
              name: "汉丽轩韩式自助烤肉（SM广场店）",
              grade: 3.9,
              discusses: 46317,
              position: "成华区建设南路SM广场4楼（海乐迪KTV旁）",
              averagePrice: 54,
              url:
                "https://p1.meituan.net/600.600/deal/023f3344e4025ac8225f5d412dcbc15930177.jpg@220w_125h_1e_1c"
            },
            {
              name: "芭菲盛宴·环球美食（奥克斯广场店）",
              grade: 3.9,
              discusses: 34200,
              position: "武侯区锦城大道666号奥克斯广场西区3层",
              url:
                "https://img.meituan.net/600.600/msmerchant/a713ce7ecaaf96a19c0052984cfd1b71449482.png@220w_125h_1e_1c"
            }
          ]
        },
        {
          title: "价格",
          list: [
            {
              name: "爱客得海鲜自助烤肉·涮涮锅（春熙路店）",
              grade: 4.7,
              discusses: 65552,
              position: "锦江区春熙路北段35号（三益公商厦3楼）",
              averagePrice: 59,
              url:
                "https://img.meituan.net/600.600/msmerchant/9ed47269bd60cafa43d37fa1e06325ca578361.jpg@220w_125h_1e_1c"
            },
            {
              name: "汉丽轩韩式自助烤肉（SM广场店）",
              grade: 3.9,
              discusses: 46317,
              position: "成华区建设南路SM广场4楼（海乐迪KTV旁）",
              averagePrice: 54,
              url:
                "https://p1.meituan.net/600.600/deal/023f3344e4025ac8225f5d412dcbc15930177.jpg@220w_125h_1e_1c"
            },
            {
              name: "芭菲盛宴·环球美食（奥克斯广场店）",
              grade: 3.9,
              discusses: 34200,
              position: "武侯区锦城大道666号奥克斯广场西区3层",
              url:
                "https://img.meituan.net/600.600/msmerchant/a713ce7ecaaf96a19c0052984cfd1b71449482.png@220w_125h_1e_1c"
            }
          ]
        },
        {
          title: "好评最多",
          list: [
            {
              name: "爱客得海鲜自助烤肉·涮涮锅（春熙路店）",
              grade: 4.7,
              discusses: 65552,
              position: "锦江区春熙路北段35号（三益公商厦3楼）",
              averagePrice: 59,
              url:
                "https://img.meituan.net/600.600/msmerchant/9ed47269bd60cafa43d37fa1e06325ca578361.jpg@220w_125h_1e_1c"
            },
            {
              name: "汉丽轩韩式自助烤肉（SM广场店）",
              grade: 3.9,
              discusses: 46317,
              position: "成华区建设南路SM广场4楼（海乐迪KTV旁）",
              averagePrice: 54,
              url:
                "https://p1.meituan.net/600.600/deal/023f3344e4025ac8225f5d412dcbc15930177.jpg@220w_125h_1e_1c"
            },
            {
              name: "芭菲盛宴·环球美食（奥克斯广场店）",
              grade: 3.9,
              discusses: 34200,
              position: "武侯区锦城大道666号奥克斯广场西区3层",
              url:
                "https://img.meituan.net/600.600/msmerchant/a713ce7ecaaf96a19c0052984cfd1b71449482.png@220w_125h_1e_1c"
            }
          ]
        }
      ],
      count: 0
    };
  },
  methods: {
    changeFocus(index) {
      this.count = index;
    }
  }
};
</script>

<style scoped lang='less'>
.productShow_title {
  padding-bottom: 14px;
  span {
    display: inline-block;
    padding: 0 10px;
    width: 96px;
    line-height: 20px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }
  .focus {
    color: #13d1be;
  }
}
.productShow_main {
  li {
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
    .img {
      position: relative;
      display: inline-block;
      .index {
        position: absolute;
        top: 5px;
        left: -3px;
        font-size: 12px;
        background: #fb6433;
        border-radius: 2px;
        color: #fff;
        z-index: 2;
        width: 20px;
        text-align: center;
      }
      img {
        width: 220px;
        border-radius: 4px;
      }
    }
    .detail {
      display: inline-block;
      vertical-align: top;
      margin-left: 20px;
      font-size: 12px;
      color: #666;
      .name {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #222;
        display: inline-block;
      }
      .grade {
        * {
          display: inline-block;
        }
        .discusses {
          height: 20px;
          line-height: 20px;
          padding-left: 10px;
          vertical-align: middle;
          color: #f60;
        }
      }
      .position {
        margin: 8px 0;
      }
    }
  }
}
</style>