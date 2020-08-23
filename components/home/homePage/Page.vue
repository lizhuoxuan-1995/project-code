<template>
  <div class="page-container">
    <div class="left">
      <oNav class="nav" />
    </div>
    <div class="right">
      <oRight />
    </div>
  </div>
</template>

<script>
import oNav from "./Nav";
import oRight from "./HomeRight";

export default {
  components: {
    oNav,
    oRight
  }
};
</script>

<style scoped lang='less'>
.page-container {
  height: 427px;
  position: relative;
  .left {
    .nav {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
  .right {
    position: absolute;
    right: 0;
    top: 15px;
    width: 915px;
    height: 412px;
    z-index: 1;
  }
}
</style>