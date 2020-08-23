<template>
  <div>
    <dl>
      <dt>{{showList.title}}:</dt>
      <dd v-for="item in showList.list" :key="item" @click="changeCity(item)">
        <router-link to="/">{{item}}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["showList"],
  methods: {
    changeCity(city) {
      this.$store.commit("changeLocation", { city });
      console.log(this.$store)
    },
  },
};
</script>

<style scoped lang='less'>
div {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #e5e5e5;
  dl {
    font-weight: 500;
    dt {
      color: #333;
      font-size: 16px;
      display: inline-block;
    }
    dd {
      color: #222;
      font-size: 14px;
      display: inline-block;
      margin: 0 20px;
    }
  }
}
</style>