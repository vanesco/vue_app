<template>
  <div
    id="header"
    :class=" [ $mq, 'header', 'header_'+ this.$store.state.navActive, {headerScrollColor: headerIsWhite} ] "
  >
    <div class="page_cover" @click="pageCoverClose" v-if="pageCoverShow"></div>

    <div class="inner">
      <h1 @click="makeActive('home')">
        <router-link to="/home">
          LEE
          <span>HYOJUN</span>
        </router-link>
      </h1>

      <!-- 메뉴 -->
      <transition name="fade">
        <nav :class="[this.$store.state.navActive, {static : navStatic}]" v-if="navSeen">
          <ul>
            <li
              v-for="(item ,index) in nav"
              :key="index"
              :class="item.uri"
              @click="makeActive(item.uri), toggle()"
            >
              <router-link :to="'/' + item.uri">{{item.name}}</router-link>
            </li>
          </ul>

          <div class="mobileNavUtil" v-if="mobileNavUtil">
            <p>Copyright 2019 © LEEHYOJUN All right reserved.</p>
          </div>
        </nav>
      </transition>

      <!-- 햄버거 버튼 -->
      <div :class=" [ $mq, 'memu-btn' ] " @click="toggle()" v-if="memuBtnSeen">
        <span :class="{menuBtnColor: btnIsWhite}"></span>
        <span :class="{menuBtnColor: btnIsWhite}"></span>
        <span :class="{menuBtnColor: btnIsWhite}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "Home",
          uri: "home"
        },
        {
          name: "Careers",
          uri: "careers"
        },
        {
          name: "Works",
          uri: "work"
        },
        {
          name: "Contact",
          uri: "contact"
        }
      ],
      navStatic: true,
      navSeen: true,
      mobileNavUtil: false,
      memuBtnSeen: false,
      headerIsWhite: false,
      btnIsWhite: true,
      pageCoverShow: false,
      windowSize: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    let para = document.location.pathname.substr(1);
    this.$store.commit("makeActive", para);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    
    window.addEventListener("touchmove", this.pageCoverClose);
    this.pageCoverClose();

    window.addEventListener("popstate", this.historyChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    historyChange() {
      let para = document.location.pathname.substr(1);
      this.$store.commit("makeActive", para);
    },
    handleScroll() {
      if (window.pageYOffset > 30) {
        this.headerIsWhite = true;
        this.btnIsWhite = false;
      } else {
        this.headerIsWhite = false;
        this.btnIsWhite = true;
      }
    },
    handleResize() {
      this.windowSize.width = window.innerWidth;
      this.windowSize.height = window.innerHeight;

      if (this.windowSize.width < 450) {
        this.memuBtnSeen = true;
        this.navSeen = false;
        this.navStatic = false;

        $("html").removeClass("open");
        $(".wrap").css("position", "relative");
        $(".memu-btn span").css({
          transform: "rotate(0)"
        });
      } else {
        this.navStatic = true;
        this.navSeen = true;
        this.memuBtnSeen = false;
      }
    },
    toggle() {
      if (this.windowSize.width < 450 && this.navSeen == true) {
        this.navSeen = false;
        this.btnIsWhite = false;
        this.pageCoverShow = false;
        this.mobileNavUtil = false;

        $("html").removeClass("open");
        $(".wrap").css("position", "relative");
        $(".memu-btn span")
          .eq(0)
          .css({
            top: "0",
            transform: "rotate(0)"
          });
        $(".memu-btn span")
          .eq(1)
          .css({
            opacity: "1",
            transform: "translate(0)"
          });
        $(".memu-btn span")
          .eq(2)
          .css({
            top: "22px",
            transform: "rotate(0)"
          });
      } else if (this.windowSize.width < 450 && this.navSeen == false) {
        this.navSeen = true;
        this.btnIsWhite = true;
        this.pageCoverShow = true;
        this.mobileNavUtil = true;

        $("html").addClass("open");
        $(".memu-btn span")
          .eq(0)
          .css({
            top: "11px",
            transform: "rotate(45deg)"
          });
        $(".memu-btn span")
          .eq(1)
          .css({
            opacity: "0",
            transform: "translate(-50px,0)"
          });
        $(".memu-btn span")
          .eq(2)
          .css({
            top: "11px",
            transform: "rotate(-45deg)"
          });
      }
    },
    makeActive(item) {
      this.$store.commit("makeActive", item);
    },
    pageCoverClose() {
      this.navSeen = false;
      this.btnIsWhite = false;
      this.pageCoverShow = false;
      this.mobileNavUtil = false;

      $("html").removeClass("open");
      $(".wrap").css("position", "relative");
      $(".memu-btn span")
        .eq(0)
        .css({
          top: "0",
          transform: "rotate(0)"
        });
      $(".memu-btn span")
        .eq(1)
        .css({
          opacity: "1",
          transform: "translate(0)"
        });
      $(".memu-btn span")
        .eq(2)
        .css({
          top: "22px",
          transform: "rotate(0)"
        });
    }
  }
};
</script>
