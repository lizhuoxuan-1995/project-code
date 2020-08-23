<template>
  <div>
    <ul>
      <li
        v-for="item in showList"
        :key="item.initial"
        class="cityNav_wrapper"
        :id="'city-' + item.initial"
      >
        <div class="alp">{{item.initial}}</div>
        <ul class="cityList">
          <li v-for="ele in item.city" :key="ele" class="detailCity" @click="changeCity(ele)">
            <router-link to="/">{{ele}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeCity(city) {
      this.$store.commit("changeLocation", { city });
    }
  },
  props: ["showList"]
};
</script>

<style scoped lang='less'>
.cityNav_wrapper {
  padding: 10px;
  padding-right: 30px;
  .alp {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #ffd000;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
  }
  .cityList {
    display: inline-block;
    width: 1030px;
    vertical-align: top;
    .detailCity {
      display: inline-block;
      margin: 10px 15px;
    }
  }
}
.cityNav_wrapper:hover {
  background: #f8f8f8;
  border-radius: 10px;
}
</style>