<template>
  <div class="work container">
    <transition name="slide-fade" appear>
      <div
        class="title"
        :style="{backgroundImage: 'url(' + require('../assets/img/' + 'work_icon.png') + ')' }"
      >
        <p :class="$mq">문제점을 찾지 말고 해결책을 찾으라.</p>
        <button class="pop_Btn" @click="openModal">
          EPISODE
          <img src="../assets/img/home_arr_w.png" alt />
        </button>
      </div>
    </transition>

    <transition name="fade">
      <modal-popup v-if="isShow">
        <button :class="{ on: ep1Show }" @click="ep1ShowBtn()">내가 어떤 사람인지 알아가다</button>
        <button :class="{ on: ep2Show }" @click="ep2ShowBtn()">경험이 나를 성장 시키다</button>

        <p v-if="ep1Show">
          어떤 책에 이런 구절이 있습니다.
          “우리 공교육은 자신이 어떤 사람인지, 자신의 재능이 무엇인지, 자신이 원하는 게 뭔지 사유하고 각성할 기회를 주지 않는다. 공교육 바로 그거 하라고 있는 건데. 하여 우리나라엔 대학 졸업하고도 자신이 어떤 사람인지, 원하는 게 뭔지, 뭘 하고 싶은지 모르는 사람이 태반이다.” 개인적으로 공감되는 말인데요.
          <br />
          <br />호기심이 생기거나 할 수 있던 여러 가지 일들을 해봤던 것은 아마 저 자신을 사유하고 각성하려고 했던 노력이었던 것 같습니다. 초등학교 때 GW-BASIC 을 배우며 막연히 컴퓨터를 좋아했었고, 중학교 때는 컴퓨터 게임을 하느라 컴퓨터를 공부하고, 고등학교 때는 디자인 전공으로 AUTOCAD, 3d max, 포토샵을 공부하다가 대학에 갔습니다. 군대를 다녀오고 나서야 내가 무엇을 원하는지, 내 재능이 무엇인지를 생각하기 시작했습니다.
          <br />
          <br />사회에 나와 해온 일들을 보면 분야는 조금 다르지만, 항상 컴퓨터가 중심에 있었습니다. 인터넷과 컴퓨터, 이 카테고리 속에서 점점 제 것을 찾아가기 시작했고 내가 어떤 성향의 사람인지도 알아갔습니다.
          <br />
          <br />저는 지향하고 관심사에 몰입하는 지적자원이 풍부하며, 지적, 문화적 높은 개방성을 가지고 있으며, 자기 성찰의 시선으로 더 나은 사람이 되기를 노력합니다. 새로운 것에 항상 호기심이 있으며 꼼꼼하고 세심한 성격으로 전체적인 기획과 구조를 다지는 일을 좋아하며 하나씩 단계별로 이루어 내는 것을 즐깁니다.
          <br />
          <br />문제가 생기면 집요하게 파고드는 성향과 효율적으로 처리하는 능력도 갖추고 있습니다. 반면, 제가 옳다고 생각하는 일에는 고집을 부리며 독단적일 때도 있지만, 이는 타협을 통해 중간 점을 찾아 좋은 방향으로 흘러갈 수 있도록 이성적으로 생각하고 행동하려고 노력합니다.
        </p>

        <p v-if="ep2Show">
          무더운 여름 배를 타고 혼자 갔던 일본 배낭여행의 9박 10일 일정을 무사히 마치고 돌아오는 날 바다 폭풍으로 인해 배가 출항이 금지되어 하루를 더 있어야 했습니다. 여행자금은 모두 소진했고 학생 신분에 신용카드도 없던 저는 하루를 더 보내야 하는 상황에서 난감했지만 잠시 앉아서 생각한 후 우선 땀에 젖은 옷을 갈아입으려고 터미널의 화장실로 가서 씻고 옷을 갈아입은 후 은행을 찾아보기로 했습니다.
          <br />
          <br />한참을 찾던 중 다행히 당시 신한은행 후쿠오카 지점을 발견했으나 은행 업무가 끝난 시간이라 해결할 방법이 없었는데 사정을 들으신 한국분께서 돈을 빌려주셨습니다. 나중에 돌려드릴 계좌번호와 연락처를 받아 들고 정말 감사하다는 인사를 드렸습니다. 그렇게 빌린 돈으로 하루를 버티고 무사히 한국에 도착할 수 있었습니다.
          <br />
          <br />어떠한 문제도 침착하게 다각적인 시선으로 긍정의 마음으로 방법을 찾아보면 풀어낼 수 있을 것입니다. 저는 경험을 중요하게 생각합니다. 다양한 경험을 통해 얻어지는 것은 책과 교육을 통해 얻을 수 없는 것들입니다.
          <br />
          <br />지금 경험하고 있는 것에도 의미를 부여하며 세상에 다양한 것들에 관심을 가지는 것들로 배우고 성장할 수 있을 것입니다. 지식만이 아니라 지성을 갖추고 경험에서 얻은 의미를 쌓아간다면 더욱 성장 나를 발견할 것입니다.
        </p>
      </modal-popup>
    </transition>

    <div class="contents">
      <ul :class="$mq">
        <li v-for="(item, index) in listItem" :key="index" :class="$mq" @mouseover="itemHover()">
          <img v-lazy=" require( '../assets/img/' + item.img + '.jpg') " class="item" alt />

          <div class="overlay">
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
  </div>
</template>

<script>
import { modalPopMixin } from "@/mixins/mixin";
import { EventBus } from "../main";

export default {
  name: "work",
  mixins: [modalPopMixin],
  data() {
    return {
      ep1Show: true,
      ep2Show: false,
      listItem: [
        {
          img: "work_01",
          title: "플래닛팡 기업 홈페이지",
          text: "UI 기획 개발 / 퍼블리싱",
          url: "http://www.planetpang.co.kr/"
        },
        {
          img: "work_02",
          title: "명함천국 온라인 쇼핑몰",
          text: "리뉴얼 / UI 개발 / 퍼블리싱",
          url: "http://www.ecard21.co.kr/"
        },
        {
          img: "work_03",
          title: "카탈로그 프로모션 사이트",
          text: "디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://ecard21.co.kr/catalog_site/index.asp"
        },
        {
          img: "work_04",
          title: "이슈터 프로모션 사이트",
          text: "디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://www.ecard21.co.kr/usb_eshooter/index.asp"
        },
        {
          img: "work_05",
          title: "스냅샷 모바일 인쇄물 주문 앱",
          text: "디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://www.ecard21.co.kr/pages/app_info.asp"
        },
        {
          img: "work_06",
          title: "HI FLYER 디지털 전단지",
          text: "디자인 / UI 기획 개발 / 퍼블리싱",
          url: "http://leehyojun.com/hiFlyer/index.html"
        },
        {
          img: "work_07",
          title: "KBS 공제회 B2B 사이트",
          text: "퍼블리싱",
          url: "http://www.ecard21.co.kr/kbs_bizpod/kbs_bizpod_1.asp"
        },
        {
          img: "work_08",
          title: "한국 가스 안전공사 B2B 사이트",
          text: "퍼블리싱",
          url: "http://www.ecard21.co.kr/kgs_bizpod/kgs_bizpod_1.asp"
        },
        {
          img: "work_09",
          title: "오피스디포 B2B 사이트",
          text: "퍼블리싱",
          url:
            "http://www.ecard21.co.kr/enterprise_new/office_depot/biz_gnb_product_choice.asp"
        },
        {
          img: "work_10",
          title: "CMSG 기업 홈페이지",
          text: "퍼블리싱",
          url: "http://leehyojun.com/cmsg/index.html"
        },
        {
          img: "work_11",
          title: "LOGO 디자인 사이트 ",
          text: "기획 디자인",
          url: "http://leehyojun.com/logoidDesign.html"
        },
        {
          img: "work_12",
          title: "PRINT21 인쇄물 쇼핑몰",
          text: "기획 디자인",
          url: "http://leehyojun.com/print21Design.html"
        },
        {
          img: "work_13",
          title: "HI FLYER 디지털 전단지",
          text: "기획 디자인",
          url: "http://leehyojun.com/hiFlyerDesign.html"
        },
        {
          img: "work_14",
          title: "스냅샷 모바일 인쇄물 주문 앱",
          text: "기획 디자인",
          url: "http://leehyojun.com/snapShotDesign.html"
        },
        {
          img: "work_15",
          title: "NAME BIZ 디지털 명함 앱",
          text: "기획 디자인",
          url: "http://leehyojun.com/nameBizDesign.html"
        }
      ]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  updated() {
    EventBus.$on("modalPopClose", isShow => {
      this.isShow = isShow;
    });
  },
  methods: {
    ep1ShowBtn() {
      this.ep1Show = true;
      this.ep2Show = false;
    },
    ep2ShowBtn() {
      this.ep1Show = false;
      this.ep2Show = true;
    },
    itemHover() {
      this.backgroundColor = "red"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #dadada;
}

.title {
  margin: 7rem 0 0 0;
  padding: 15rem 0 6rem 0;
  text-align: center;
  font-size: 2rem;
  background-color: #007eff;
  background-repeat: no-repeat;
  background-position: center 60px;
  p {
    font-size: 4rem;
    font-weight: 300;
    color: #fff;
    &.mobile {
      padding: 0 2rem;
      font-size: 3rem;
    }
  }
  button {
    margin: 3rem 0 0 0;
    padding: 1.3rem 2.5rem;
    font-size: 1.4rem;
    color: #fff;
    border: 1px solid #fff;
    img {
      margin: 0 0 0 0.5rem;
      width: 0.7rem;
    }
  }
}

.contents {
  ul {
    width: 75%;
    padding: 13rem 0 8rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    &.mobile {
      width: 80%;
      padding: 5rem 0;
    }
    li {
      position: relative;
      width: 30%;
      margin: 0 0 5rem 0;
      overflow: hidden;
      transition: all 0.3s;
      &.mobile {
        width: 100%;
      }
      img.item {
        width: 100%;
        display: block;
      }
      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 2.5rem;
        color: #fff;
        background: rgba($color: #007eff, $alpha: 0.9);
        opacity: 0;
        transition: 0.1s;
        div {
          em {
            font-size: 2.3rem;
            font-weight: 600;
          }
          p {
            margin: 0.5rem 0 1.2rem 0;
          }
        }
      }
      &:hover {
        transform: scale(1.05);
        .overlay {
          opacity: 1;
        }
      }
    }
  }
}

.modalPopup {
  button {
    width: 50%;
    padding: 2rem 4rem;
    font-size: 1.8rem;
    color: #777;
    border-bottom: 2px solid #ddd;
  }
  button.on {
    font-weight: 600;
    color: #222;
    border-bottom: 2px solid #222;
  }
  p {
    margin: 3rem 0 0 0;
    font-size: 1.5rem;
    line-height: 1.7;
  }
}
</style>
