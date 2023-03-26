<template>
  <div id="app">
    <div class="wrap">
      <main-header />
      <router-view />
      <button v-if="topBtnSeen" type="button" class="go-top" @click="scrollTop()">top</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topBtnSeen: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScrollTop);
    this.handleScrollTop();
  },
  methods: {
    scrollTop() {
      $(window, document).scrollTop(0);
    },
    handleScrollTop() {
      if (window.pageYOffset > 1024) {
        this.topBtnSeen = true;
      } else {
        this.topBtnSeen = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.go-top {
  position: fixed;
  bottom: 60px;
  right: 30px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-image: url(assets/img/top_arr.png);
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #000;
  border-radius: 10px;
  opacity: 0.3;
  z-index: 100;
  transition: all 0.5s;
  text-indent: -9999px;

  &:hover {
    opacity: 1;
  }
}
</style>
