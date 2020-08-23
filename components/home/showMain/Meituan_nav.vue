<template>
  <div class="nav_contanier">
    <h2 class="title">美团导航</h2>
    <dl v-for="item in list" :key="item.title">
      <dt>{{item.title}}</dt>
      <div class="list">
        <dd v-for="ele in item.cityList" :key="ele">
          <router-link to="/">{{ele}}</router-link>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "热门城市",
          cityList: [
            "郑州",
            "济南",
            "石家庄",
            "温州",
            "福州",
            "沈阳",
            "南宁",
            "北京",
            "长春",
            "苏州",
            "上海",
            "深圳",
            "贵阳",
            "佛山",
            "西安",
            "杭州",
            "厦门",
            "无锡",
            "天津",
            "大连"
          ]
        },
        {
          title: "热门分类",
          cityList: [
            "酒店",
            "美食",
            "休闲娱乐",
            "运动健身",
            "生活服务",
            "上门服务",
            "购物",
            "时尚购",
            "本地购物",
            "结婚",
            "摄影写真",
            "宴会",
            "丽人",
            "母婴亲子",
            "学习培训",
            "家装",
            "汽车服务",
            "医疗",
            "宠物"
          ]
        },
        {
          title: "周边热门",
          cityList: [
            "彭州酒店",
            "新津县美食",
            "新津县休闲娱乐",
            "崇州运动健身",
            "崇州生活服务",
            "崇州上门服务",
            "新津县购物",
            "彭州时尚购",
            "新津县本地购物",
            "新津县结婚",
            "新津县摄影写真",
            "彭州宴会",
            "新津县丽人",
            "新津县母婴亲子",
            "彭州学习培训",
            "彭州家装",
            "彭州汽车服务",
            "崇州医疗",
            "新津县宠物"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang='less'>
.nav_contanier {
  margin: 40px 0 0 0;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 4px;
  padding: 6px 0 0 20px;
  .title {
    font-size: 16px;
    height: 44px;
    margin: 0;
    font-weight: 400;
    line-height: 44px;
  }
  dl {
    dt {
      font-size: 14px;
      color: #222;
      text-align: left;
      padding: 10px 0;
      display: inline-block;
      width: 84px;
    }
    .list {
      width: 1000px;
      vertical-align: text-top;
      display: inline-block;
      border-bottom: 1px solid #e5e5e5;
      dd {
        display: inline-block;
        width: 100px;
        font-size: 12px;
        margin: 0 0 13px 0;
      }
    }
    dd:hover {
      color: #fe8c00;
    }
  }
  dl:last-child .list {
    border-bottom: none;
  }
}
</style>