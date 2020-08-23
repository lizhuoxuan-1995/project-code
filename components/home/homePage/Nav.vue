<template>
  <div class="nav-container">
    <dl>
      <dt>全部分类</dt>
      <dd v-for="ele in classify" :key="ele.name" @mouseenter="show(ele)" @mouseleave="hidden">
        <i class="iconfont" :class="ele.firstIconfont"></i>
        <router-link :to="{name: 'goodList', params: {mark: ele.name}}">{{ele.name}}</router-link>
        <i class="iconfont icon-arrow-l right"></i>
      </dd>
    </dl>
    <div class="hidden" v-show="ishow" @mouseenter="keep" @mouseleave="detHidden">
      <div class="detail" v-for="ele in transfer" :key="ele.name">
        <h4>{{ele.name}}</h4>
        <div class="more">
          <router-link to="/">更多</router-link>
          <i class="iconfont icon-arrow-l"></i>
        </div>
        <router-link :to="{name: 'goodList', params: {mark: item}}" v-for="item in ele.detail" :key="item">{{item}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classify: [
        {
          name: "美食",
          firstIconfont: "icon-fenzu",
          children: [
            {
              name: "美食",
              detail: [
                "代金券",
                "甜点饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食"
              ]
            }
          ]
        },
        {
          name: "外卖",
          firstIconfont: "icon-meituan",
          children: [
            {
              name: "外卖",
              detail: ["美团外卖"]
            }
          ]
        },
        {
          name: "酒店",
          firstIconfont: "icon-jiudian",
          children: [
            {
              name: "酒店星级",
              detail: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        },
        {
          name: "民宿",
          firstIconfont: "icon-jiudian1",
          children: [
            {
              name: "热门城市",
              detail: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津",
                "苏州"
              ]
            },
            {
              name: "热门房源",
              detail: ["复式Loft", "别墅"]
            }
          ]
        },
        {
          name: "猫眼电影",
          firstIconfont: "icon-maoyandianying",
          children: [
            {
              name: "热门影院",
              detail: [
                "太平洋电影城",
                "万达影城",
                "星美国际影城",
                "CGV影城",
                "横店电影城",
                "橙天嘉禾影城",
                "卢米埃影城",
                "金逸影城",
                "大地影院",
                "SFC上影影城"
              ]
            }
          ]
        },
        {
          name: "休闲娱乐 / KTV",
          firstIconfont: "icon-ktv",
          children: [
            {
              name: "休闲娱乐",
              detail: [
                "足疗按摩",
                "洗浴/汗蒸",
                "酒吧",
                "密室逃脱",
                "轰趴馆",
                "茶馆",
                "私人影院",
                "DIY手工坊",
                "采摘/农家乐",
                "网吧网咖",
                "游乐游艺",
                "VR",
                "桌面游戏",
                "真人CS",
                "棋牌室",
                "其他玩乐"
              ]
            },
            {
              name: "KTV",
              detail: ["KTV"]
            }
          ]
        },
        {
          name: "生活服务",
          firstIconfont: "icon-fangzi"
        },
        {
          name: "丽人 / 美发 / 医学美容",
          firstIconfont: "icon-liren"
        },
        {
          name: "结婚 / 婚纱摄影 / 婚宴",
          firstIconfont: "icon-zuanshi"
        },
        {
          name: "亲子 / 儿童乐园 / 幼教",
          firstIconfont: "icon-qinzi"
        },
        {
          name: "运动健身 / 健身中心",
          firstIconfont: "icon-yaling"
        },
        {
          name: "家装 / 建材 / 家居",
          firstIconfont: "icon-zhuangxiu"
        },
        {
          name: "学习培训 / 音乐培训",
          firstIconfont: "icon-peixun"
        },
        {
          name: "医疗健康 / 宠物 / 爱车",
          firstIconfont: "icon-yiliao"
        },
        {
          name: "酒吧 / 密室逃脱",
          firstIconfont: "icon-jiuba"
        }
      ],
      transfer: null
    };
  },
  methods: {
    show(ele) {
      clearTimeout(this.timer);
      this.transfer = ele.children;
    },
    hidden() {
      this.timer = setTimeout(() => {
        this.transfer = null;
      }, 100);
    },
    keep() {
      clearTimeout(this.timer);
    },
    detHidden() {
      this.transfer = null;
    }
  },
  computed: {
    ishow() {
      return this.transfer != null;
    }
  }
};
</script>

<style scoped lang='less'>
.nav-container {
  position: relative;
  .hidden {
    position: absolute;
    bottom: 0;
    left: 230px;
    background-color: #fff;
    width: 400px;
    height: 420px;
    border-radius: 4px;
    border: 1px solid #ccc;
    .detail {
      width: 100%;
      padding: 0 30px;
      position: relative;
      h4 {
        border-bottom: 1px solid #e5e5e5;
        line-height: 40px;
        margin: 10px 0;
        font-weight: 500;
      }
      .more {
        position: absolute;
        top: 18px;
        right: 30px;
        font-size: 12px;
        a {
          margin: 0;
        }
        i {
          font-size: 12px;
        }
      }
      a {
        font-size: 12px;
        display: inline-block;
        cursor: pointer;
        margin: 10px 15px 0 0;
        color: #999;
      }
      a:hover {
        color: #ffc300;
      }
    }
  }
}
dl {
  position: relative;
  width: 230px;
  height: 475px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  dt {
    height: 50px;
    padding: 15px 0 0 25px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 700;
    box-sizing: border-box;
    color: #222;
    margin-bottom: 10px;
  }
  dd {
    color: #646464;
    padding: 0 25px;
    line-height: 26px;
    font-size: 13px;
    position: relative;
    i {
      font-size: 16px;
      margin-right: 10px;
      color: orange;
    }
    .right {
      position: absolute;
      bottom: 0;
      right: 0;
      color: #666666;
    }
  }
  dd:hover {
    background-color: rgba(255, 150, 0, 0.08);
    color: #222;
    font-weight: 700;
  }
}
</style>