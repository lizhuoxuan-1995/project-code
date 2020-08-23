<template>
  <div class="home_wrapper">
      <Page />
      <Show />
  </div>
</template>

<script>
import Page from './Page'
import Show from '../showMain/Show'
export default {
    components: {
        Page,
        Show
    }
};
</script>

<style scoped lang='less'>
    .home_wrapper{
        width: 1160px;
    }
</style>