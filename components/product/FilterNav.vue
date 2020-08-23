<template>
  <div class="filterBox">
    <div class="title">{{showList.title}}</div>
    <slot name="all"></slot>
    <div class="content">
      <ul>
        <slot v-for="(item, index) in showList.list" :item="item" :index="index" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    Focus() {
      this.flag = true;
    }
  },
  props: ["showList"]
};
</script>

<style scoped lang='less'>
.filterBox {
  padding-top: 10px;
  .title,
  .content {
    display: inline-block;
    line-height: 20px;
  }
  .title {
    width: 65px;
    font-size: 14px;
    color: #666;
  }
  .content {
    width: 760px;
    vertical-align: top;
    border-bottom: 1px solid #e5e5e5;
  }
  .active {
    background: #13d1be;
    border-radius: 10px;
    color: #fff;
  }
}
</style>