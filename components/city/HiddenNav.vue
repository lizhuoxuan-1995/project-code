<template>
  <div class="hidden-nav">
    <span class="province">{{ value }}</span>
    <dl :style="{width: len * 60 + 20 + 'px'}">
      <slot v-for="(item, index) in ListArr" :index="index" :item="item"></slot>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: -1,
      len: Math.ceil(this.ListArr.length / 10)
    };
  },
  props: ["ListArr", "value"]
};
</script>

<style scoped lang='less'>
.hidden-nav::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 26px;
  border: 6px solid transparent;
  border-bottom: 6px solid #e5e5e5;
  border-top: 0;
}
.hidden-nav {
  background-color: #fff;
  position: absolute;
  top: 45px;
  left: 0;
  border: 1px solid #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: default;
  .province {
    font-size: 16px;
    color: #ccc;
    margin-left: 5px;
  }
  dl {
    margin-top: 11px;
    display: flex;
    height: 320px;
    // width: 400px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    dd {
      min-width: 40px;
      height: 20px;
      color: #222;
      font-size: 12px;
      margin: 6px 30px 6px 0;
      cursor: pointer;
      text-align: center;
      line-height: 20px;
    }
    .active {
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      border-radius: 10px;
    }
    dd:hover {
      background-color: #f4f4f4;
      border-radius: 10px;
    }
  }
}
</style>