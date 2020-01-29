<template>
  <div class="contact container">
    <transition name="slide-fade" appear>
      <div
        class="title"
        :style="{backgroundImage: 'url(' + require('../assets/img/' + 'contact_icon.png') + ')' }"
      >
        <p :class="$mq">작은 기회로 부터 종종 위대한 업적이 시작된다.</p>

        <div class="button_base glitch pop_Btn" @click="openModal">
          <div></div>
          <div>
            WRITE
            <img src="../assets/img/home_arr_w.png" alt />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <modal-popup v-if="isShow">
        <form id="send-form">
          <h3>Please contact me</h3>
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="보내는이 이메일"
            @blur="CheckEmail()"
          />
          <input type="text" name="title" v-model="title" placeholder="제목" @blur="CheckTitle()" />
          <textarea name="message" v-model="message" placeholder="내용" @blur="CheckMessage()"></textarea>
          <input type="submit" value="보내기" @click.prevent="formSubmit()" />
        </form>
      </modal-popup>
    </transition>

    <div class="contents" :class="$mq">
      <div class="info" :class="$mq">
        <h3>Contact</h3>
        <div class="info_list" :class="$mq">
          <ul>
            <li :class="$mq">
              <h4>기본정보</h4>
              <dl>
                <dt>이름</dt>
                <dd>이효준</dd>
              </dl>
              <dl>
                <dt>생년월일</dt>
                <dd>1980.01.26</dd>
              </dl>
              <dl>
                <dt>분야</dt>
                <dd>웹퍼블리싱, 프론트엔드, 기획디자인</dd>
              </dl>
            </li>

            <li :class="$mq">
              <h4>연락처</h4>
              <dl>
                <dt>휴대전화</dt>
                <dd>
                  <a href="tel:01036050325">010-3605-0325</a>
                </dd>
              </dl>
              <dl>
                <dt>이메일</dt>
                <dd>
                  <a href="mailto:vanesco@naver.com">vanesco@naver.com</a>
                </dd>
              </dl>
              <dl>
                <dt>주소</dt>
                <dd>경기도 남양주시</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <main-footer />
  </div>
</template>

<script>
import { modalPopMixin } from "@/mixins/mixin";
import { EventBus } from "../main";

export default {
  name: "contact",
  mixins: [modalPopMixin],
  data() {
    return {
      email: "",
      title: "",
      message: ""
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    CheckEmail() {
      let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

      if (!reg_email.test(this.email)) {
        this.email = "";
        $(event.target)
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "이메일 주소를 확인하세요");
      } else {
        $(event.target).css({
          border: "1px solid #ddd"
        });
      }
    },
    CheckTitle() {
      if (this.title == "") {
        $(event.target)
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "제목을 입력하세요");
      } else {
        $(event.target).css({
          border: "1px solid #ddd"
        });
      }
    },
    CheckMessage() {
      if (this.message == "") {
        $(event.target)
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "내용을 입력하세요");
      } else {
        $(event.target).css({
          border: "1px solid #ddd"
        });
      }
    },
    formSubmit() {
      if (this.email == "") {
        $("input[name=email]")
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "이메일을 입력하세요");
      } else if (this.title == "") {
        $("input[name=title]")
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "제목을 입력하세요");
      } else if (this.message == "") {
        $("textarea")
          .css({
            border: "3px solid #35a67d"
          })
          .attr("placeholder", "내용을 입력하세요");
      } else if (confirm("보내시겠습니까?")) {
        this.$http
          .post("/boards", {
            email: this.email,
            title: this.title,
            message: this.message
          })
          .then(response => {
            alert("보내기 성공!");
            this.isShow = false;
            this.email = "";
            this.title = "";
            this.message = "";
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  updated() {
    EventBus.$on("modalPopClose", isShow => {
      this.isShow = isShow;
      this.email = "";
      this.title = "";
      this.message = "";
    });
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: 7rem 0 0 0;
  padding: 15rem 0 6rem 0;
  text-align: center;
  font-size: 2rem;
  background-color: #35a67d;
  background-repeat: no-repeat;
  background-position: center 60px;
  color: #fff;
  p {
    font-size: 4rem;
    font-weight: 300;
    &.mobile {
      padding: 0 2rem;
      font-size: 3rem;
    }
    &.tablet {
      padding: 0 8rem;
    }
  }
  button {
    margin: 3rem 0 0 0;
    padding: 1.3rem 2.5rem;
    font-size: 1.4rem;
    color: #fff;
    border: 1px solid #fff;
    letter-spacing: 1px;
    img {
      margin: 0 0 0 0.5rem;
      width: 0.7rem;
    }
  }
}

.contents {
  width: 70%;
  margin: 9rem auto 14rem auto;
  &.mobile {
    width: 90%;
    margin: 3rem auto;
  }
  &.tablet {
    width: 90%;
  }
  .info {
    margin: 0 0 5rem 0;
    &.mobile {
      margin: 0;
    }

    h3 {
      padding: 0 0 3rem 0;
      font-size: 5rem;
      font-weight: 400;
      color: #363636;
      text-align: center;
    }
    .info_list {
      font-size: 1.6rem;
      border-top: 3px solid #363636;
      &.mobile {
        border-top: none;
      }
      li {
        width: 50%;
        padding: 0 0 0 1.5rem;
        float: left;
        &.mobile {
          width: 100%;
          padding: 0;
          margin: 0 0 3rem 0;
          float: none;
          border-top: 2px solid #363636;
        }
        &.tablet dt {
          width: 9rem;
        }
        h4 {
          padding: 2rem 0;
          border-bottom: 1px solid #e1e1e1;
        }
        dl {
          display: table;
        }
        dt,
        dd {
          display: table-cell;
        }
        dt {
          width: 10rem;
          padding: 1rem 0;
          color: #363636;
        }
        dd {
          color: #868686;
          a:hover {
            color: #222;
            text-decoration: underline;
          }
        }
        &:first-child {
          padding: 0 1.5rem 0 0;
        }
      }
      &:after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
}

#send-form {
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  h3 {
    font-size: 3rem;
    text-align: center;
    padding: 0 0 1rem 0;
    margin: 0 0 7rem 0;
    border-bottom: 2px solid #222;
  }
  input[type="text"] {
    width: 100%;
    margin: 0 0 1.5rem 0;
    padding: 1.5rem 1rem;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }
  textarea {
    width: 100%;
    height: 20rem;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid #ddd;
    resize: none;
  }
  input[type="submit"] {
    width: 100%;
    margin: 3rem 0 0 0;
    padding: 1.5rem 2.5rem;
    font-size: 1.4rem;
    color: #fff;
    border: none;
    background: #35a67d;
    border-radius: 0.3rem;
    display: block;
  }
}
.button_base {
  position: relative;
  width: 150px;
  height: 44px;
  margin: 30px auto 0 auto;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-user-select: none;
  cursor: default;
}
.button_base:hover {
  cursor: pointer;
}
.glitch {
  width: 150px;
  height: 44px;
  overflow: hidden;
}
.glitch div {
  position: absolute;
  width: 150px;
  height: 44px;
  padding: 10px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  img {
    width: 0.75rem;
    margin: 0 0 0 0.5rem;
  }
}
.glitch div:nth-child(1) {
  border: #fff solid 1px;
}
.glitch:hover div:nth-child(2) {
  color: #fff;
  animation: glitch 0.3s linear;
  -webkit-animation: glitch 0.3s linear;
  -moz-animation: glitch 0.3s linear;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAF0lEQVQIW2NkwAIYgWKS6OIgQQxAoUoAE4AAUnD/0ugAAAAASUVORK5CYII=)
    repeat;
}
@-webkit-keyframes glitch {
  from {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #000000;
  }
  25.00% {
    transform: skewX(80deg);
    -webkit-transform: skewX(80deg);
    -moz-transform: skewX(80deg);
    color: #000000;
  }
  75.00% {
    transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    color: #ffffff;
  }
  90.00% {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #ffffff;
  }
  to {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #ffffff;
  }
}
@-moz-keyframes glitch {
  from {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #000000;
  }
  25.00% {
    transform: skewX(80deg);
    -webkit-transform: skewX(80deg);
    -moz-transform: skewX(80deg);
    color: #000000;
  }
  75.00% {
    transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    color: #ffffff;
  }
  90.00% {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #ffffff;
  }
  to {
    transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    color: #ffffff;
  }
}
</style>
