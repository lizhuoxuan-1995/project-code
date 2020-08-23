<template>
  <div class="select_wrap" v-document-click="documentClick">
    <span>按省份选择:</span>
    <div class="province select" @click="showProvince">
      <span>{{ province }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div v-show="showPro" @click="hidden">
        <HiddenNav :ListArr="provinceList" value="省份">
          <template #default="{ index, item }">
            <dd @click="changePro(index, item)" :class="{active: proNum == index}">{{item}}</dd>
          </template>
        </HiddenNav>
      </div>
    </div>

    <div class="select" @click="showCity" :class="{ ban: flag }">
      <span>{{city}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div v-show="showCit" @click="hidden">
        <HiddenNav :ListArr="cityList" value="城市">
          <template #default="{ item }">
            <dd @click="changeCity(item)">
              <router-link to="/">{{item}}</router-link>
            </dd>
          </template>
        </HiddenNav>
      </div>
    </div>

    <span class="direct">直接搜索 :</span>
    <div class="select">
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :loading="loading"
      >
        <el-option
          v-for="item in states"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import HiddenNav from "./HiddenNav";
export default {
  components: {
    HiddenNav
  },
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      cityList: [
        "成都",
        "自贡",
        "攀枝花",
        "泸州",
        "德阳",
        "绵阳",
        "广元",
        "遂宁",
        "内江",
        "乐山",
        "南充",
        "眉山"
      ],
      province: "省份",
      city: "城市",
      isShowPro: false,
      isShowCit: false,
      flag: true,
      proNum: -1,
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "成都",
        "自贡",
        "攀枝花",
        "泸州",
        "德阳",
        "绵阳",
        "广元",
        "遂宁",
        "内江",
        "乐山",
        "南充",
        "眉山"
      ]
    };
  },
  methods: {
    changePro(index, province) {
      this.proNum = index;
      this.province = province;
      this.flag = false;
    },
    changeCity(city) {
      this.city = city;
      this.$store.commit("changeLocation", { city });
    },
    hidden(e) {
      e.stopPropagation();
      this.isShowPro = false;
      this.isShowCit = false;
    },
    documentClick() {
      this.isShowPro = false;
      this.isShowCit = false;
    },
    showProvince(e) {
      e.stopPropagation();
      this.isShowPro = true;
      this.isShowCit = false;
    },
    showCity(e) {
      if (!this.flag) {
        e.stopPropagation();
        this.isShowCit = true;
        this.isShowPro = false;
      }
    }
  },
  computed: {
    showPro() {
      return this.isShowPro;
    },
    showCit() {
      return this.isShowCit;
    }
  }
};
</script>

<style scoped lang='less'>
.select_wrap {
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  .ban {
    cursor: not-allowed;
  }
  .direct {
    margin-left: 60px;
  }
  .select {
    width: 150px;
    height: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    margin: 0 10px 0 20px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #666;
    position: relative;
    span {
      position: absolute;
      left: 8px;
      top: 9px;
    }
    i {
      position: absolute;
      right: 10px;
      top: 11px;
    }
    input {
      width: 220px;
      height: 40px;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding-left: 10px;
      outline: none;
    }
    input::placeholder {
      color: #666;
    }
  }
  .select:last-child {
    width: 200px;
    height: 40px;
  }
  .province {
    cursor: pointer;
    .hidden {
      position: relative;
    }
  }
  .city {
    cursor: not-allowed;
  }
}
</style>