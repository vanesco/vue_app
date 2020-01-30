<template>
  <div class="modalPopup">
    <div class="pop_content" :class="$mq">
      <slot>슬롯 기본 내용</slot>
      <span class="pop_close" @click="closeModal">close</span>
    </div>
  </div>
</template>

<script>
import { modalPopMixin } from "@/mixins/mixin";

export default {
  name: "modalPopup",
  mixins: [modalPopMixin]
};
</script>

<style lang="scss" scoped>
.modalPopup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  .pop_content {
    position: relative;
    width: 720px;
    margin: 7% auto 0 auto;
    padding: 5rem 3em;
    color: #222;
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in;
    &.mobile {
      width: 100%;
      min-height: 100%;
      margin: 0;
      padding: 5rem 1rem 1rem 1rem;
    }
  }
  .pop_close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 4rem;
    height: 4rem;
    text-indent: -9999px;
    background-image: url("../assets/img/close_icon.png");
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
}
</style>