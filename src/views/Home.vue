<template>
  <div class="home container">
    <transition name="fade" appear>
      <div class="main-visual">
        <vue-particles
          :style="[ {width: particlesWidth + 'px'}, { height: particlesHeight + 'px' }, {backgroundImage: 'url(' + require('../assets/img/' + 'particle-background.jpg') + ')' }, {backgroundSize: 'cover'}, {backgroundColor: '#1e1010'} ]"
          color="#666666"
          :particleOpacity="0.7"
          :particlesNumber="120"
          shapeType="circle"
          :particleSize="3"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="repulse"
        ></vue-particles>

        <div class="visual-text" ref="textBox">
          <transition name="bounce" appear>
            <h2 :class="$mq">Hello!</h2>
          </transition>

          <h3 :class="$mq">I'm Ready for Work</h3>

          <p :class="$mq" ref="textTyping"></p>
        </div>

        <div class="git-link" :class="$mq">
          <div class="button_base roll_3d">
            <div>
              <a href="https://github.com/vanesco/vue_app" target="blink">Confirmation</a>
            </div>

            <div
              :style="{ backgroundImage: 'url(' + require('../assets/img/' + 'github-logo.png') + ')' }"
            >
              <a
                style="height: 50px; text-indent: -9999px;"
                href="https://github.com/vanesco/vue_app"
                target="blink"
              >github</a>
            </div>
          </div>
        </div>

        <div class="scroll_down" :class="$mq">
          <span></span>Scroll
        </div>
      </div>
    </transition>

    <div class="aos-wrap">
      <div
        class="introduce main-summary aos-el"
        :class="$mq"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="500"
      >
        <img src="../assets/img/introduce_img.png" alt class="visual" :class="$mq" />

        <div :class="$mq">
          <h3 :class="$mq">웹퍼블리싱 / UI 개발</h3>
          <p
            :class="$mq"
          >다양한 디바이스와 다양한 사용자에게 최적화된 인터렉티브한 화면을 제공합니다.</p>
          <button v-if="moreViewBtnSeen" @click="moreViewBtn()">
            더 보기
            <img src="../assets/img/home_arr.png" alt />
          </button>
          <transition name="fade">
            <ul v-if="moreView">
              <li>표준 DIV코딩과 CSS를 사용한 페이지를 제작합니다.</li>
              <li>웹표준, 접근성을 고려한 페이지를 제작합니다.</li>
              <li>디바이스 환경에 적합한 페이지를 제작합니다.</li>
              <li>사용자 경험과 사용 편의성을 고려한 UI를 제작합니다.</li>
              <li>발전하는 웹기술에 맞추어 최신기술을 탐구하고 적용합니다.</li>
            </ul>
          </transition>
        </div>
      </div>

      <div
        class="skill main-summary aos-el"
        :class="$mq"
        data-aos="zoom-in-up"
        data-aos-offset="250"
        data-aos-duration="500"
      >
        <ul :class="$mq">
          <li v-for="(item, index) in skill" :key="index" :class="$mq">
            <img v-bind:src="require('../assets/img/' + item.img + '.jpg') " alt :class="$mq" />
            <span :class="$mq">{{item.title}}</span>
            <p :class="$mq">{{item.text}}</p>
          </li>
        </ul>
      </div>

      <div
        class="bridge main-summary aos-el"
        :class="$mq"
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-duration="500"
      >
        <img src="../assets/img/bridge_img.jpg" alt class="visual" :class="$mq" />

        <div :class="$mq">
          <h3 :class="$mq">효율적이고 스마트하게</h3>
          <p
            :class="$mq"
            :style="{backgroundImage: 'url(' + require('../assets/img/' + 'bridge_icon.png') + ')' }"
          >서비스에 대한 이해와 문제점을 찾고 그에 대한 해결 방법 또는 더 나은 방법을 고민합니다. 각 분야의 구성원들과 문제를 해결하기 위해 문제를 정의하고 다방면의 시각으로 해결책을 찾습니다. 때로는 코딩보다 정책을 바꾸는 것이 효율적일 때도 있습니다.</p>
        </div>
      </div>

      <div
        class="products main-summary aos-el"
        :class="$mq"
        data-aos="zoom-in-up"
        data-aos-offset="250"
        data-aos-duration="500"
      >
        <ul :class="$mq">
          <li
            v-for="(item, index) in products"
            :key="index"
            :style="{ height: productHeight+'px', backgroundImage: 'url(' + require('../assets/img/' + item.img + '.jpg') + ')' }"
            :class="[ $mq, {'overAction':index==overIndex} ]"
            @mouseover="itemHover(index)"
            @mouseout="itemOut()"
          >
            <div class="overlay" :class="{'overlayShow':index==overIndex}">
              <div>
                <em>{{item.title}}</em>
                <p>{{item.text}}</p>
                <a :href="item.url" target="blank">
                  <img src="../assets/img/right_arrow.png" alt title="바로가기" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="advantage main-summary aos-el"
        :class="$mq"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="500"
      >
        <div>
          <h3 :class="$mq">UX와 UI 그리고 구조와 요소</h3>
          <p
            :class="$mq"
          >사용자 경험, 사용 편의성을 고민해 트렌드를 반영하고 유지 보수가 용이하도록 설계합니다.<br /> 전체적인 구조를 만들고 조각을 채워 넣고 언제든지 조각을 삭제 하거나 변경, 수정이 가능 할 수 있도록 기획합니다.</p>
        </div>

        <img src="../assets/img/advantage_img.png" alt class="visual" :class="$mq" />
      </div>
    </div>

    <main-footer />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      particlesWidth: "",
      particlesHeight: "",
      textTyping: "I look forward to working with you",
      moreView: false,
      moreViewBtnSeen: true,
      productHeight: 310,
      overIndex: -1,
      skill: [
        {
          img: "html5_logo",
          title: "HTML",
          text: "웹표준 시멘틱 마크업"
        },
        {
          img: "css3_logo",
          title: "CSS",
          text: "웹페이지 스타일링"
        },
        {
          img: "js_logo",
          title: "JavaScript",
          text: "UI / UX / 인터렉티브"
        },
        {
          img: "handlebars_logo",
          title: "Handlebars",
          text: "템플릿 렌더링"
        },
        // {
        //   img: "vue_logo",
        //   title: "Vue",
        //   text: "FRAMEWORK"
        // },
        // {
        //   img: "react_logo",
        //   title: "React",
        //   text: "FRAMEWORK / LIBRARY"
        // },
        {
          img: "git_logo",
          title: "Git",
          text: "버전관리"
        },
        {
          img: "jira_logo",
          title: "Jira",
          text: "협업"
        },
      ],
      products: [
        {
          img: "product_01",
          title: "쇼핑몰 위지윅 개발",
          text: "HTML / CSS / JAVASCRIPT",
          url: "https://office.relaket.com/member/login.php"
        },
        {
          img: "product_02",
          title: "쇼핑몰 스킨 개발",
          text: "HTML / CSS / JAVASCRIPT",
          url: "https://office.relaket.com/member/login.php"
        },
        {
          img: "product_03",
          title: "쇼핑몰 템플릿 통합 ",
          text: "HTML / CSS / JAVASCRIPT",
          url: "https://store.weidian.kr/styleSimpleDemo"
        },
        {
          img: "product_04",
          title: "이커머스 서비스 운영 개발",
          text: "HTML / CSS / JAVASCRIPT",
          url: "https://relaket.com/bizhome/features/drop_shipping.php"
        },
        {
          img: "product_05",
          title: "카탈로그 프로모션 사이트",
          text: "PC웹 / 디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://ecard21.co.kr/catalog_site/index.asp"
        },
        {
          img: "product_06",
          title: "이슈터 프로모션 사이트",
          text: "PC웹 / 디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://www.ecard21.co.kr/usb_eshooter/index.asp"
        }
      ]
    };
  },
  created() {
    this.$store.commit("makeActive", "home");
    window.addEventListener("resize", this.handleResizeParticles);
    this.handleResizeParticles();
    window.addEventListener("resize", this.handleResizeProducts);
    this.handleResizeProducts();
  },
  mounted() {
    window.scrollTo(0, 0);

    var i = 0;
    const show = () => {
      let Ocontent = this.textTyping.split("");
      if (i < Ocontent.length) {
        var node = document.createElement("span");
        var textnode = document.createTextNode(Ocontent[i]);
        node.appendChild(textnode);
        this.$refs.textTyping.appendChild(node);
        i++;
      } else {
        clearInterval(this.Otimer);
      }
    };
    this.Otimer = setInterval(show, 70);

    this.handleResizeProducts();
  },
  destroyed() {
    clearInterval(this.Otimer);
    window.removeEventListener("resize", this.handleResizeParticles);
    window.removeEventListener("resize", this.handleResizeProducts);
  },
  methods: {
    handleResizeParticles() {
      let pWid = window.innerWidth;
      let pHei = window.innerHeight;
      this.particlesWidth = pWid;
      this.particlesHeight = pHei;
    },
    handleResizeProducts() {
      let productWid = $(".products ul li").width();
      let calculation = productWid * 0.5625;
      this.productHeight = calculation;
    },
    moreViewBtn() {
      this.moreView = true;
      this.moreViewBtnSeen = false;
    },
    itemHover(index) {
      this.overIndex = index;
    },
    itemOut() {
      this.overIndex = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-visual {
  position: relative;
  overflow: hidden;
  .visual-text {
    position: absolute;
    top: 30%;
    width: 100%;
    text-align: center;
    color: #fff;
    h2 {
      font-size: 10rem;
      font-weight: 400;
      line-height: 1.2;
      &.mobile {
        font-size: 7rem;
      }
    }
    h3 {
      font-size: 10rem;
      font-weight: 400;
      line-height: 1.2;
      &.mobile {
        font-size: 4rem;
      }
      &.tablet {
        font-size: 6rem;
      }
    }

    p {
      margin: 2rem 0 0 0;
      font-size: 3.5rem;
      font-weight: 100;
      &.mobile {
        font-size: 2rem;
      }
      &.tablet {
        font-size: 3rem;
      }
    }
  }
  .git-link {
    position: absolute;
    bottom: 3.5rem;
    right: 4rem;
    &.mobile {
      bottom: 7rem;
      left: 50%;
      margin: 0 0 0 -75px;
    }
  }
}
.aos-wrap {
  overflow: hidden;
  .aos-el {
    margin: 7rem auto;
    padding: 6rem 0;
    &.mobile {
      padding: 0 1rem;
    }
  }
  .introduce {
    text-align: center;
    img.visual {
      width: 30%;
      &.mobile {
        width: 70%;
      }
      &.tablet {
        width: 50%;
      }
    }
    div {
      font-size: 1.6rem;
      &.mobile {
        font-size: 1.4rem;
      }
      h3 {
        margin: 3rem 0 2rem 0;
        font-size: 3.9rem;
        &.mobile {
          font-size: 3rem;
        }
      }
      p {
        width: 42%;
        margin: 0 auto;
        color: #666;
        &.mobile {
          width: 90%;
        }
        &.tablet {
          width: 57%;
        }
      }
      button {
        margin: 7rem 0 0 0;
        padding: 1.3rem 2.5rem;
        font-size: 1.4rem;
        color: #222;
        border: 1px solid #a9a9a9;
        transition: all 0.2s;
        img {
          margin: 0 0 0 0.5rem;
          width: 0.7rem;
        }
        &:hover {
          border-color: #000;
        }
      }
      ul {
        margin: 7rem 0 0 0;;
        li {
          font-weight: 300;
        }
      }
    }
  }
  .skill {
    background: #f7f7f7;
    ul {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      &.mobile {
        width: 100%;
        padding: 2rem 0;
      }
      li {
        width: 33%;
        margin: 30px 0;
        text-align: center;
        &.mobile {
          width: 40%;
        }
        img {
          margin: 0 auto 2rem auto;
          display: block;
          border: 1px solid #dcdcdc;
          border-radius: 500px;
          &.mobile {
            width: 90%;
          }
          &.tablet {
            width: 70%;
          }
        }
        span {
          font-size: 2rem;
          &.mobile {
            font-size: 1.4rem;
          }
        }
        p {
          color: #666;
          font-size: 1.6rem;
          font-weight: 300;
          &.mobile {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  .bridge {
    width: 113rem;
    &.mobile {
      width: 100%;
      text-align: center;
    }
    &.tablet {
      width: 100%;
      text-align: center;
    }
    img.visual {
      width: 50%;
      float: left;
      &.mobile {
        float: none;
        width: 100%;
      }
      &.tablet {
        float: none;
        width: 70%;
      }
    }
    div {
      width: 45%;
      float: right;
      &.mobile {
        width: 90%;
        margin: 0 auto;
        float: none;
      }
      &.tablet {
        width: 67%;
        margin: 0 auto;
        float: none;
      }
      h3 {
        margin: 0 0 2rem 0;
        font-size: 3.9rem;
        line-height: 1.2;
        &.mobile {
          font-size: 3rem;
        }
      }
      p {
        padding: 0 0 12rem 0;
        font-size: 1.6rem;
        color: #666;
        background-repeat: no-repeat;
        background-position: left bottom;
        &.mobile {
          padding: 0 0 10rem 0;
          font-size: 1.4rem;
          background-position: center bottom;
          background-size: 90%;
        }
        &.tablet {
          padding: 0 0 10rem 0;
          background-position: center bottom;
          background-size: 60%;
        }
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .products {
    background: #ddd;
    ul {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      &.mobile {
        width: 100%;
        padding: 2rem 0;
      }
      &.tablet {
        justify-content: space-between;
      }
      li {
        position: relative;
        width: 31%;
        max-height: 333px;
        margin: 3.2rem 0;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100%;
        overflow: hidden;
        transition: all 0.5s;
        cursor: pointer;
        &.mobile {
          width: 90%;
          margin: 1.5rem 0;
        }
        &.tablet {
          width: 47%;
          margin: 1.5rem 0;
        }
        .overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          color: #fff;
          background: rgba($color: #0090ff, $alpha: 0.9);
          opacity: 0;
          transition: all 0.3s;
          div {
            margin: 2.5rem 0 0 2.5rem;
            em {
              font-size: 2rem;
              font-weight: 600;
            }
            p {
              margin: 0.5rem 0 1rem 0;
              font-size: 1.6rem;
            }
          }
        }
        &:last-child {
          background-position: center bottom;
        }
      }

      .overAction {
        background-size: 110%;
      }
      .overlayShow {
        opacity: 1 !important;
      }
    }
  }
  .advantage {
    text-align: center;
    div {
      font-size: 1.6rem;
      h3 {
        font-size: 3.9rem;
        &.mobile {
          font-size: 3rem;
        }
      }
      p {
        width: 60%;
        margin: 2rem auto 3rem auto;
        word-break: keep-all;
        color: #666;
        &.mobile {
          width: 90%;
          font-size: 1.4rem;
        }
        &.tablet {
          width: 70%;
        }
      }
    }
    img.visual {
      border-radius: 0.5rem;
      &.mobile {
        width: 90%;
      }
      &.tablet {
        width: 70%;
      }
    }
  }
}

.scroll_down {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  padding-top: 60px;
  margin: 0 0 0 -1.9rem;
  color: #fff;
  z-index: 998;
  &.mobile {
    display: none;
  }
}
.scroll_down span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
}
.scroll_down span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.button_base {
  position: relative;
  width: 150px;
  height: 50px;
  text-align: center;
  font-weight: 100;
  letter-spacing: 1px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-user-select: none;
  a {
    display: block;
  }
}

.roll_3d div {
  position: absolute;
  width: 150px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 8px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.roll_3d div:nth-child(1) {
  line-height: 50px;
  transform: rotateX(90deg);
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transform-origin: 50% 50% -25px;
  -webkit-transform-origin: 50% 50% -25px;
  -moz-transform-origin: 50% 50% -25px;
}

.roll_3d div:nth-child(2) {
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transform-origin: 50% 50% -25px;
  -webkit-transform-origin: 50% 50% -25px;
  -moz-transform-origin: 50% 50% -25px;
}

.roll_3d:hover div:nth-child(1) {
  color: #ffffff;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
}

.roll_3d:hover div:nth-child(2) {
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transform: rotateX(-90deg);
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
}
</style>
