<template>
  <div class="meituan">
    <Top class="top" />
    <Search class="search" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Top from "../components/topBar/TopBar";
import Search from "../components/searchBar/SearchBar";
import Footer from "../components/footer/Footer";

export default {
  name: "common",
  components: {
    Top,
    Search,
    Footer
  }
};
</script>

<style lang="less" scoped>
.meituan {
  min-width: 960px;
  font-family: "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue",
    "MIcrosoft YaHei", sans-serif !important;
  background-color: rgb(248, 248, 248);
  div:not(.search) {
    margin: 0 auto;
  }
  .top {
    z-index: 4;
  }
  .search {
    box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>