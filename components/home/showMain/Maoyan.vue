<template>
  <div>
    <Title class="title">
      <template>
        <div class="_head">
          <ul>
            <li
              v-for="(ele, index) in title"
              :key="ele"
              :class="{active: index == curIndex}"
            >{{ele}}</li>
          </ul>
          <div class="all">
            <router-link to="/">全部</router-link>
            <i class="iconfont icon-arrow-l"></i>
          </div>
        </div>
      </template>
    </Title>

    <div class="maoyan-show">
      <el-carousel height="300px" indicator-position="none">
        <el-carousel-item v-for="ele in sliderList" :key="ele.index" class="img_container">
          <router-link to="/City" v-for="child in ele.content" :key="child.index">
            <img :src="child.src" alt="loading" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  components: {
    Title
  },
  data() {
    return {
      curIndex: 1,
      title: ["猫眼电影", "即将上映"],
      sliderList: [
        {
          content: [
            {
              src:
                "//p1.meituan.net/moviemachine/f31b925aa6febc11140adbba4b966b3f8269247.jpg@267w_371h_1e_1c",
              index: 1
            },
            {
              src:
                "//p1.meituan.net/moviemachine/e10ceb90d2c06d3524d01d573ccf88fb7514998.jpg@267w_371h_1e_1c",
              index: 2
            },
            {
              src:
                "//p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@267w_371h_1e_1c",
              index: 3
            },
            {
              src:
                "//p0.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@267w_371h_1e_1c",
              index: 4
            },
            {
              src:
                "//p0.meituan.net/movie/0af34ec7025796b7fdac56d6f2ad3554265477.jpg@267w_371h_1e_1c",
              index: 5
            }
          ],
          index: 1
        },
        {
          content: [
            {
              src:
                "https://p0.meituan.net/movie/f52ccebd4f91402b6532f44a494713855261102.jpg@267w_371h_1e_1c",
              index: 1
            },
            {
              src:
                "https://p0.meituan.net/movie/afcf5837b6f1955a2c136542c0ed9d32392283.jpg@267w_371h_1e_1c",
              index: 2
            },
            {
              src:
                "https://p0.meituan.net/movie/582d57e86924b47279c001dca5a12adb5773823.png@267w_371h_1e_1c",
              index: 3
            },
            {
              src:
                "https://p0.meituan.net/movie/07e0ee6c6f30700e6d4ab6774d95fc4f108727.jpg@267w_371h_1e_1c",
              index: 4
            },
            {
              src:
                "https://p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@267w_371h_1e_1c",
              index: 5
            }
          ],
          index: 2
        }
      ]
    };
  }
};
</script>

<style scoped lang='less'>
.title {
  background-color: rgb(250, 60, 104);
}
.maoyan-show {
  .img_container {
    width: 1160px;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  img {
    width: 216px;
    height: 100%;
    border-radius: 4px;
    margin: 2px 0;
  }
}
</style>