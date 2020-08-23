<template>
  <div class="city_wrap">
    <Select />
    <Hot :showList="hotCityList" />
    <Hot :showList="recentChosenList" />
    <div class="alpNav">
      <span>按拼音首字母选择:</span>
      <a :href="'#city-' + item" v-for="item in Alphabet" :key="item">{{item}}</a>
    </div>
    <city-nav :showList="detailCityList" />
  </div>
</template>
  
<script>
import Select from "./Select";
import Hot from "./Hot";
import cityNav from "./CityNav";
export default {
  data() {
    return {
      hotCityList: {
        title: "热门城市",
        list: ["北京", "上海", "广州"]
      },
      recentChosenList: {
        title: "最近访问",
        list: ["成都", "宜宾", "泸州"]
      },
      Alphabet: "ABCDEFGHJKLMNPQRSTWXYZ".split(""),
      detailCityList: [
        {
          initial: "A",
          city: [
            "鞍山",
            "安庆",
            "安阳",
            "安顺",
            "安康",
            "安丘",
            "安岳",
            "安陆市",
            "阿克苏",
            "安州区",
            "阿图什市",
            "安吉",
            "阿拉善盟",
            "阿荣旗",
            "安平",
            "安溪",
            "安宁",
            "安化",
            "阿拉尔",
            "安福",
            "阿勒泰市",
            "阿城区",
            "澳门",
            "阿勒泰",
            "阿里",
            "阿坝"
          ]
        },
        {
          initial: "B",
          city: [
            "北京",
            "包头",
            "保定",
            "蚌埠",
            "亳州",
            "滨州",
            "宝鸡",
            "白城",
            "霸州",
            "巴彦淖尔",
            "北海",
            "百色",
            "巴中",
            "毕节",
            "保山",
            "本溪",
            "白银",
            "白山",
            "璧山",
            "拜泉县",
            "拜城县",
            "宝应",
            "北流",
            "博爱",
            "巴楚县",
            "宝丰",
            "博兴",
            "泌阳",
            "彬州市",
            "巴彦县",
            "博山",
            "宾阳",
            "泊头",
            "市博",
            "罗县",
            "博白县",
            "北镇市",
            "北安市",
            "滨海",
            "北碚",
            "博尔塔拉",
            "巴州"
          ]
        },
        {
          initial: "C"
        },
        {
          initial: "D"
        },
        {
          initial: "E"
        },
        {
          initial: "F"
        },
        {
          initial: "G"
        },
        {
          initial: "H"
        },
        {
          initial: "I"
        },
        {
          initial: "J"
        },
        {
          initial: "K"
        },
        {
          initial: "L"
        },
        {
          initial: "M"
        },
        {
          initial: "N"
        },
        {
          initial: "O"
        },
        {
          initial: "P"
        },
        {
          initial: "Q"
        },
        {
          initial: "R"
        },
        {
          initial: "S"
        },
        {
          initial: "T"
        },
        {
          initial: "W"
        },
        {
          initial: "X"
        },
        {
          initial: "Y"
        },
        {
          initial: "Z"
        }
      ]
    };
  },
  components: {
    Select,
    Hot,
    cityNav
  }
};
</script>

<style scoped lang='less'>
.city_wrap {
  border: 1px solid #e5e5e5;
  margin-top: 20px !important;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 1160px;
  .alpNav {
    padding: 30px 0;
    a {
      display: inline-block;
      width: 23px;
      margin: 0 10px;
      font-size: 15px;
      text-align: center;
    }
    a:nth-of-type(1) {
      margin-left: 23px;
    }
  }
}
</style>
