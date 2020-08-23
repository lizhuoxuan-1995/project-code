<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    change(index) {
      if (index == 0) {
        return;
      } else {
        this.curIndex = index;
      }
    }
  },
  data () {
      return {
          curIndex: 1,
      }
  }
};
</script>

<style scoped lang='less'>
._head {
  margin-top: 40px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  position: relative;
  .all {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 12px;
  }
  li {
    display: inline-block;
    padding: 0 5px;
    font-size: 14px;
  }
  li:nth-child(1) {
    font-family: "MFShangHei-Regular" !important;
    font-size: 18px;
    margin: 0 10px 0 13px;
  }
}

.active {
  position: relative;
}
.active::after {
  content: "";
  width: 4px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 6px);
  border: 6px solid transparent;
  border-bottom: 9px solid #fff;
}
</style>