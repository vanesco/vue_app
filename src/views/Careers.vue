<template>
  <div class="careers container">
    <transition name="slide-fade" appear>
      <div class="title">
        <em>
          SINCE
          <br />
          <span>2013</span>
        </em>
        <p :class="$mq">
          경험은 실수를 거듭해야만 서서히 알게 된다.
          <br />
          <span :class="$mq"
            >다각적인 시선과 긍정의 마음, 경험하고 있는 것에 의미를 부여하고
            세상에 다양한 것들에 관심을 가지는 것들로 배우고 성장합니다.</span
          >
        </p>
      </div>
    </transition>

    <transition name="fade" appear>
      <article class="visual" :class="$mq"></article>
    </transition>

    <div class="contents">
      <div class="nav-bar" :class="{ static: isStatic }">
        <ul :class="navActive">
          <li v-for="(nav, index) in navBar" :key="index" :class="[nav.id, $mq]">
            <a
              href="#"
              v-scroll-to="'#' + nav.id"
              @click="makeActive(nav.id)"
              :class="nav.id"
              >{{ nav.name }}</a
            >
          </li>
        </ul>
      </div>

      <div class="year-wrap" :class="$mq">
        <div
          id="year2013"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2013</h3>
          <img src="../assets/img/careers_2013.png" alt />
          <dl>
            <dt>CMSG 기업 홈페이지</dt>
            <dd>PC웹 / 퍼블리싱</dd>
            <dt>U2HOME 쇼핑몰</dt>
            <dd>메이크샵 솔루션 리뉴얼 / 유지 보수</dd>
          </dl>
        </div>

        <div
          id="year2014"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2014</h3>
          <img
            :style="{ border: '1px solid #ddd' }"
            src="../assets/img/careers_2014.png"
            alt
          />
          <dl>
            <dt>KBS 공제회 B2B 사이트</dt>
            <dd>PC웹 / 퍼블리싱</dd>
            <dt>한국 가스 안전공사 B2B 사이트</dt>
            <dd>퍼블리싱</dd>
          </dl>
        </div>

        <div
          id="year2015"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2015</h3>
          <img
            :style="{ border: '1px solid #ddd' }"
            src="../assets/img/careers_2015.png"
            alt
          />
          <dl>
            <dt>카탈로그 프로모션 사이트</dt>
            <dd>PC웹 / 디자인 / UI 기획 개발 / 퍼블리싱</dd>
            <dt>명함천국 온라인 쇼핑몰</dt>
            <dd>리뉴얼 / UI 개발 / 퍼블리싱 / 유지보수</dd>
          </dl>
        </div>

        <div
          id="year2016"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2016</h3>
          <img
            :style="{ border: '1px solid #ddd' }"
            src="../assets/img/careers_2016.png"
            alt
          />
          <dl>
            <dt>PC웹 / 오피스디포 B2B 사이트</dt>
            <dd>퍼블리싱</dd>
          </dl>
        </div>

        <div
          id="year2017"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2017</h3>
          <img src="../assets/img/careers_2017.png" alt />
          <dl>
            <dt>이슈터 프로모션 사이트</dt>
            <dd>PC웹 / 디자인 / UI 기획 개발 / 퍼블리싱</dd>
            <dt>온라인 방송 서비스</dt>
            <dd>퍼블리싱 / 유지보수</dd>
          </dl>
        </div>

        <div
          id="year2018"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2018</h3>
          <img
            :style="{ width: '40%' }"
            src="../assets/img/careers_2018.png"
            alt
          />
          <dl>
            <dt>HI FLYER 디지털 전단지</dt>
            <dd>모바일웹 / 디자인 / UI 기획 개발 / 퍼블리싱</dd>
            <dt>온라인 방송 서비스 모바일웹</dt>
            <dd>UI 개발 / 퍼블리싱</dd>
          </dl>
        </div>

        <div
          id="year2019"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2019</h3>
          <img src="../assets/img/careers_2019.png" alt />
          <dl>
            <dt>플래닛팡 기업 홈페이지</dt>
            <dd>반응형 / UI 기획 개발 / 퍼블리싱</dd>
          </dl>
        </div>

        <div
          id="year2020"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2020</h3>
          <img src="../assets/img/careers_2020.png" alt />
          <dl>
            <dt>소소한 진심</dt>
            <dd>PC웹 / 모바일웹 / 퍼블리싱 / UI 개발</dd>
          </dl>
          <dl>
            <dt>셀럽미</dt>
            <dd>PC웹 / 모바일웹 / 퍼블리싱</dd>
          </dl>
          <dl>
            <dt>에스더몰</dt>
            <dd>하이브리드앱 / 퍼블리싱</dd>
          </dl>
        </div>

        <div
          id="year2021"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2021</h3>
          <img src="../assets/img/careers_2021.png" alt />
          <dl>
            <dt>릴라켓 관리자 사이트</dt>
            <dd>구성요소 컴포넌트화</dd>
            <dt>릴라켓 쇼핑몰</dt>
            <dd>쇼핑몰 고도화</dd>
            <dd>쇼핑몰 템플릿 통합</dd>
          </dl>
        </div>

        <div
          id="year2022"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2022</h3>
          <img src="../assets/img/careers_2022.png" alt />
          <dl>
            <dt>릴라켓 쇼핑몰</dt>
            <dd>쇼핑몰 스킨 개발</dd>
            <dd>쇼핑몰 위지윅 개발</dd>
          </dl>
        </div>

        <div
          id="year2023"
          class="year-box left"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2023</h3>
          <img src="../assets/img/careers_2023.png" alt />
          <dl>
            <dt>릴라켓 해외구매대행 서비스 개발</dt>
            <dd>해외구매대행 서비스 개발</dd>
          </dl>
        </div>

        <div
          id="year2024"
          class="year-box right"
          :class="$mq"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <h3>2024</h3>
          <img src="../assets/img/careers_2023.png" alt />
          <dl>
            <dt>릴라켓 해외구매대행 서비스 운영</dt>
            <dd>해외구매대행 서비스 운영</dd>
          </dl>
        </div>

      </div>
    </div>

    <div class="bg-year" v-if="bgShow" :class="$mq">{{ year }}</div>

    <main-footer />
  </div>
</template>

<script>
export default {
  name: "careers",
  data() {
    return {
      navBar: [
        { name: "2013", id: "year2013" },
        { name: "2014", id: "year2014" },
        { name: "2015", id: "year2015" },
        { name: "2016", id: "year2016" },
        { name: "2017", id: "year2017" },
        { name: "2018", id: "year2018" },
        { name: "2019", id: "year2019" },
        { name: "2020", id: "year2020" },
        { name: "2021", id: "year2021" },
        { name: "2022", id: "year2022" },
        { name: "2023", id: "year2023" },
        { name: "2024", id: "year2024" },
      ],
      navActive: "year2013",
      isStatic: false,
      year2013Offset: "",
      year2014Offset: "",
      year2015Offset: "",
      year2016Offset: "",
      year2017Offset: "",
      year2018Offset: "",
      year2019Offset: "",
      year2020Offset: "",
      year2021Offset: "",
      year2022Offset: "",
      year2023Offset: "",
      year2024Offset: "",
      bgShow: false,
      year: 2013,
    };
  },
  created() {
    window.addEventListener("scroll", this.yearScroll);
  },
  mounted() {
    window.scrollTo(0, 0);

    this.year2013Offset = document.getElementById("year2013").offsetTop - 250;
    this.year2014Offset = document.getElementById("year2014").offsetTop - 250;
    this.year2015Offset = document.getElementById("year2015").offsetTop - 250;
    this.year2016Offset = document.getElementById("year2016").offsetTop - 250;
    this.year2017Offset = document.getElementById("year2017").offsetTop - 250;
    this.year2018Offset = document.getElementById("year2018").offsetTop - 250;
    this.year2019Offset = document.getElementById("year2019").offsetTop - 250;
    this.year2020Offset = document.getElementById("year2020").offsetTop - 250;
    this.year2021Offset = document.getElementById("year2021").offsetTop - 250;
    this.year2022Offset = document.getElementById("year2022").offsetTop - 250;
    this.year2023Offset = document.getElementById("year2023").offsetTop - 250;
    this.year2024Offset = document.getElementById("year2024").offsetTop - 250;

    let bg = document.querySelector("article");
    $("body").on("mousewheel", function(e) {
      var d = e.originalEvent.wheelDelta;
      if (d < 0) {
        bg.classList.add("move_bottom");
      } else {
        bg.classList.remove("move_bottom");
      }
    });
  },
  methods: {
    makeActive(id) {
      this.navActive = id;
    },
    yearScroll() {
      let scrollY = window.pageYOffset;

      if (this.year2013Offset > scrollY) {
        this.bgShow = false;
        this.year = 2013;
        this.isStatic = false;
        this.navActive = "year2013";
      }

      if (400 < scrollY) {
        this.bgShow = true;
      }

      if (this.year2013Offset < scrollY) {
        this.year = 2013;
        this.isStatic = true;
        this.navActive = "year2013";
      }
      if (this.year2014Offset < scrollY) {
        this.year = 2014;
        this.isStatic = true;
        this.navActive = "year2014";
      }
      if (this.year2015Offset < scrollY) {
        this.year = 2015;
        this.navActive = "year2015";
      }

      if (this.year2016Offset < scrollY) {
        this.year = 2016;
        this.navActive = "year2016";
      }
      if (this.year2017Offset < scrollY) {
        this.year = 2017;
        this.navActive = "year2017";
      }
      if (this.year2018Offset < scrollY) {
        this.year = 2018;
        this.navActive = "year2018";
      }
      if (this.year2019Offset < scrollY) {
        this.year = 2019;
        this.navActive = "year2019";
      }
      if (this.year2020Offset < scrollY) {
        this.year = 2020;
        this.navActive = "year2020";
      }
      if (this.year2021Offset < scrollY) {
        this.year = 2021;
        this.navActive = "year2021";
      }
      if (this.year2022Offset < scrollY) {
        this.year = 2022;
        this.navActive = "year2022";
      }
      if (this.year2023Offset < scrollY) {
        this.year = 2023;
        this.navActive = "year2023";
      }
      if (this.year2024Offset < scrollY) {
        this.year = 2024;
        this.navActive = "year2024";
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.yearScroll);
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 7rem 0 0 0;
  padding: 10rem 0;
  text-align: center;
  font-size: 2rem;
  em {
    padding: 1.2rem 0;
    font-size: 1.8rem;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
    line-height: 1.1;
    letter-spacing: 1px;
    display: inline-block;
    span {
      font-size: 3rem;
      font-weight: 600;
    }
  }
  p {
    margin: 4rem 0 0 0;
    font-size: 4rem;
    font-weight: 300;
    &.mobile {
      padding: 0 2rem;
      font-size: 3rem;
    }
    span {
      width: 34%;
      margin: 2rem 0 0 0;
      font-size: 1.6rem;
      color: #666;
      display: inline-block;
      &.laptop {
        width: 45%;
      }
      &.mobile {
        width: 80%;
        font-size: 1.4rem;
      }
      &.tablet {
        width: 60%;
      }
    }
  }
}

.visual {
  position: relative;
  height: 44rem;
  background-image: url("../assets/img/careers-background.jpg");
  background-size: cover;
  transition: 1s;
  background-position: left top;
  z-index: 2;
  &.mobile {
    height: 25rem;
  }
  &.tablet {
    height: 30rem;
  }
  &.move_bottom {
    background-position: left bottom;
  }
}
.nav-bar {
  position: relative;
  background: #313955;
  color: #fff;
  z-index: 2;
  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    li {
      width: 8.3%;
      padding: 1rem 0;
      text-align: center;
      &.mobile {
        width: 20%;
      }
      a {
        font-weight: 600;
        color: #fff;
        display: block;
      }
    }
  }
}
.nav-bar.static {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 100;
}
.nav-bar ul.year2013 a.year2013,
.nav-bar ul.year2014 a.year2014,
.nav-bar ul.year2015 a.year2015,
.nav-bar ul.year2016 a.year2016,
.nav-bar ul.year2017 a.year2017,
.nav-bar ul.year2018 a.year2018,
.nav-bar ul.year2019 a.year2019,
.nav-bar ul.year2020 a.year2020,
.nav-bar ul.year2021 a.year2021,
.nav-bar ul.year2022 a.year2022,
.nav-bar ul.year2023 a.year2023,
.nav-bar ul.year2023 a.year2024 {
  color: #8aa7ff;
}
.nav-bar ul.year2013 li.year2013,
.nav-bar ul.year2014 li.year2014,
.nav-bar ul.year2015 li.year2015,
.nav-bar ul.year2016 li.year2016,
.nav-bar ul.year2017 li.year2017,
.nav-bar ul.year2018 li.year2018,
.nav-bar ul.year2019 li.year2019,
.nav-bar ul.year2020 li.year2020,
.nav-bar ul.year2021 li.year2021,
.nav-bar ul.year2022 li.year2022,
.nav-bar ul.year2023 li.year2023,
.nav-bar ul.year2023 li.year2024 {
  border-bottom: 3px solid #8aa7ff;
}

.year-wrap {
  width: 70%;
  margin: 0 auto;
  &.mobile {
    width: 100%;
  }
  &.tablet {
    width: 90%;
  }
  .year-box {
    position: relative;
    width: 70%;
    height: 100vh;
    margin: 2rem 0;
    padding: 15rem 3rem;
    box-sizing: border-box;
    z-index: 2;
    &.mobile {
      width: 100%;
    }
    &.tablet {
      width: 100%;
    }
    h3 {
      font-size: 6rem;
    }
    img {
      margin: 1rem 0 0 0;
      width: 80%;
      box-shadow: 10px 10px 20px 0 #bababa;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
    dl {
      margin: 0 0 0 0.5rem;
      dt {
        font-size: 2rem;
        font-weight: 600;
        margin: 2rem 0 0 0;
      }
      dd {
        font-size: 1.6rem;
        color: #666;
      }
    }
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    text-align: right;
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}

.bg-year {
  position: fixed;
  bottom: 15rem;
  left: 50%;
  width: 50%;
  margin: 0 0 0 -25%;
  font-size: 25rem;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  color: #eee;
  z-index: 1;
  &.mobile {
    width: 100%;
    margin: 0 0 0 -50%;
    font-size: 15rem;
  }
}
</style>
