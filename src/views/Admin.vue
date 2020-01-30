<template>
  <div class="admin container">
    <div class="contents" :class="$mq">

      <div v-for="(index, item) in boardData" :key="index">
        {{item}}
      </div>
      
    </div>

    <main-footer />
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      boardData : []
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    this.$http
      .get("/boards")
      .then(response => {
        console.log(response.data);
        this.boardData = response.data;
      })
      .catch(error => {
        alert("데이터 불러오기 실패");
      });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.contents {
  width: 70%;
  min-height: 100vh;
  margin: 10rem auto;
  background-color: #ddd;
  &.mobile {
    width: 90%;
    margin: 3rem auto;
  }
  &.tablet {
    width: 90%;
  }
}
</style>
