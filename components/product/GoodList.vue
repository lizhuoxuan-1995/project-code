<template>
  <div class="product_wrapper">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{city}}{{$route.params.mark}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="productNav">
      <div class="productNav_left">
        <div class="productNav_left_head">
          <div class="filter" v-show="filterShow">
            <span>已选条件</span>
            <div class="variety_filter" v-show="varietySelected != 'default'" @click="varietyClear">
              {{varietySelected}}
              <i class="iconfont icon-ziyuan" />
            </div>
            <div class="area_filter" v-show="areaSelected != 'default'" @click="areaClear">
              {{areaSelected}}
              <i class="iconfont icon-ziyuan" />
            </div>
            <span class="clear" @click="bothClear">· 清除全部</span>
          </div>

          <FilterNav :showList="variety">
            <template #all>
              <span :class="{active: varietyNum == -1}" class="all" @click="varietyReset">全部</span>
            </template>
            <template #default="{ item, index }">
              <li @click="changeVariety(item, index)">
                <router-link
                  :to="{name: 'goodList'}"
                  :class="{active: varietyNum == index}"
                >{{item}}</router-link>
              </li>
            </template>
          </FilterNav>

          <FilterNav class="area" :showList="area">
            <template #all>
              <span :class="{active: areaNum == -1}" class="all" @click="areaReset">全部</span>
            </template>
            <template #default="{ item, index }">
              <li @click="changeArea(item, index)">
                <router-link :to="{name: 'goodList'}" :class="{active: areaNum == index}">
                  {{item}}
                  <i class="iconfont icon-arrow_down_full"></i>
                </router-link>
              </li>
            </template>
          </FilterNav>

          <FilterNav class="peoples" :showList="peoples">
            <template #all>
              <span :class="{active: peoplesNum == -1}" class="all" @click="peoplesReset">全部</span>
            </template>
            <template #default="{ item, index }">
              <li @click="changePeopleNum(index)">
                <router-link to="/GoodList/2" :class="{active: peoplesNum == index}">{{item}}</router-link>
              </li>
            </template>
          </FilterNav>
        </div>

        <div class="showArea">
          <router-view></router-view>
        </div>
      </div>
      <div class="productNav_right">2</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FilterNav from "./FilterNav";
import api from "@/api/index";

export default {
  data() {
    return {
      variety: {
        title: "分类",
        list: [
          "代金券",
          "蛋糕",
          "甜点",
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
          "粤菜",
          "中式烧烤/烤串",
          "西北菜",
          "咖啡酒吧",
          "京菜鲁菜",
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
      },
      area: {
        title: "区域",
        list: []
      },
      peoples: {
        title: "用餐人数",
        list: [
          "单人餐",
          "双人餐",
          "3-4人",
          "5-6人",
          "7-8人",
          "9-10人",
          "10人以上",
          "其他"
        ]
      },
      varietySelected: "default",
      areaSelected: "default",
      varietyNum: -1,
      areaNum: -1,
      peoplesNum: -1,
      flag: true
    };
  },

  created() {
    this.getCityList();
  },

  computed: {
    ...mapState(["city"]),
    filterShow() {
      return (
        this.varietySelected != "default" || this.areaSelected != "default"
      );
    }
  },

  methods: {
    getCityList() {
      api.getCity_list().then(({ data }) => {
        this.area.list = data.city_list;
      });
    },

    changeVariety(item, index) {
      this.varietySelected = item;
      this.varietyNum = index;
    },

    varietyReset() {
      this.varietyNum = -1;
    },

    changeArea(item, index) {
      this.areaSelected = item;
      this.areaNum = index;
    },

    areaReset() {
      this.areaNum = -1;
    },

    changePeopleNum(index) {
      this.peoplesNum = index;
    },

    peoplesReset() {
      this.peoplesNum = -1;
    },

    varietyClear() {
      this.varietySelected = "default";
      this.varietyNum = -1;
    },

    areaClear() {
      this.areaSelected = "default";
      this.areaNum = -1;
    },

    bothClear() {
      this.varietySelected = "default";
      this.areaSelected = "default";
      this.varietyNum = -1;
      this.areaNum = -1;
      this.peoplesNum = -1;
    }
  },

  components: {
    FilterNav
  }
};
</script>

<style scoped lang='less'>
.product_wrapper {
  width: 1160px;
  .crumbs {
    padding: 20px 0;
    font-weight: 400;
    .el-breadcrumb {
      font-size: 12px;
    }
  }

  .productNav {
    display: flex;
    width: 100%;
    .productNav_left {
      .productNav_left_head {
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        margin-right: 10px;
        padding-left: 15px;
        background: #fff;

        .filter {
          box-sizing: border-box;
          padding: 10px 0;
          border-bottom: 1px solid #e5e5e5;
          .iconfont {
            font-size: 8px;
            vertical-align: 1px;
          }
          span,
          div {
            display: inline-block;
            margin-right: 20px;
            font-size: 14px;
            color: #666;
            line-height: 20px;
            height: 20px;
            cursor: pointer;
          }
          div {
            text-align: center;
            color: #13d1be;
            border: 1px solid #13d1be;
            border-radius: 10px;
            padding: 0 10px;
          }
          .clear {
            color: #999;
            font-size: 12px;
          }
        }

        li {
          width: 120px;
          height: 25px;
          display: inline-block;
          color: #666;
          font-size: 14px;
          cursor: pointer;
          a {
            text-align: center;
            padding: 0 5px;
          }
        }

        .active {
          background: #13d1be;
          border-radius: 10px;
          color: #fff;
        }

        .all {
          width: 50px;
          height: 20px;
          margin: 0 15px 0 10px;
          text-align: center;
          cursor: pointer;
          display: inline-block;
          line-height: 20px;
        }
      }

      .showArea {
        margin-top: 15px;
        padding: 20px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        margin-right: 10px;
        background: #fff;
      }
    }

    .productNav_right {
      flex: 0 0 230px;
      border: 1px solid #e5e5e5;
      padding: 20px;
      border-radius: 5px;
    }

    .iconfont {
      font-size: 8px;
      margin-left: 5px;
      vertical-align: 1px;
    }
  }
}
</style>