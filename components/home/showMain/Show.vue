<template>
  <div>
    <maoyan />
    <minsu />
    <like />
    <meituan-nav />
  </div>
</template>

<script>
import maoyan from "./Maoyan"
import minsu from "./Minsu"
import like from "./Person_Like"
import meituanNav from "./Meituan_nav"

export default {
  components: {
    maoyan,
    minsu,
    like,
    meituanNav
  }
};
</script>

<style scoped lang='less'>
</style>