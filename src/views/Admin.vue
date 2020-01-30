<template>
  <div class="admin container">
    <div class="contents" :class="$mq">
      <ul>
        <li v-for="(index, item) in boardData" :key="index">
          <span>
            <em>id</em>
            {{item.id}}
          </span>
          <span>
            <em>email</em>
            {{item.email}}
          </span>
          <span>
            <em>title</em>
            {{item.title}}
          </span>
          <span>
            <em>message</em>
            {{item.message}}
          </span>
          <span>
            <em>createdAt</em>
            {{item.createdAt}}
          </span>
        </li>
      </ul>
    </div>

    <main-footer />
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      boardData: []
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
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.contents {
  width: 70%;
  min-height: 100vh;
  margin: 13rem auto;
  &.mobile {
    width: 90%;
    margin: 3rem auto;
  }
  &.tablet {
    width: 90%;
  }
  ul {
    li {
      padding: 1rem 0;
      &:first-child {
        border-top: none;
      }
      span {
        padding: 0.5rem 0;
        border-bottom: 1px dashed #d6d6d6;
        display: block;
        em {
          width: 8rem;
          margin: 0 0.5rem 0 0;
          color: #7d7d7d;
          border-right: 1px solid #d6d6d6;
          display: inline-block;
        }
      }
    }
  }
}
</style>
