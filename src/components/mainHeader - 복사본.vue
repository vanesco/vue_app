<template>
  <div id="header" :class=" [ 'header_'+ this.$store.state.navActive , {header_white: isWhite} ] ">
    <div class="page_cover"></div>

    <div class="inner">
      <h1 @click="makeActive('home')">
        <router-link to="/home">LEE<span>HYOJUN</span></router-link>
      </h1>

      <div class="memu-btn" @click="toggle()" v-if="memuBtnSeen">
        <span :class="{black: isBlack}"></span>
        <span :class="{black: isBlack}"></span>
        <span :class="{black: isBlack}"></span>
      </div>

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
        </nav>
      </transition>
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
      memuBtnSeen: false,
      navSeen: false,
      navStatic: false,
      windowSize: {
        width: 0,
        height: 0
      },
      isWhite: false,
      isBlack: false
    };
  },
  created() {
    let para = document.location.pathname.substr(1);
    this.$store.commit("makeActive", para);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
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
        this.isWhite = true;
        this.isBlack = true;
      } else {
        this.isWhite = false;
        this.isBlack = false;
      }
    },
    handleResize() {
      this.windowSize.width = window.innerWidth;
      this.windowSize.height = window.innerHeight;

      if (this.windowSize.width < 768) {
        this.memuBtnSeen = true;
        this.navSeen = false;
        this.navStatic = false;

        $(".page_cover, html").removeClass("open");
        $(".wrap").css("position", "relative");
        $(".memu-btn span").css({
          transform: "rotate(0)"
        });
      } else {
        this.memuBtnSeen = false;
        this.navSeen = true;
        this.navStatic = true;
      }
    },
    toggle() {
      if (this.windowSize.width < 768 && this.navSeen == true) {
        this.navSeen = false;

        $(".page_cover, html").removeClass("open");
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
      } else if (this.windowSize.width < 768 && this.navSeen == false) {
        this.navSeen = true;

        // $(".wrap").css({
        //   position: "fixed",
        //   top: "0",
        //   left: "0",
        //   right: "0",
        //   bottom: "0"
        // });
        $(".page_cover, html").addClass("open");

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
    }
  }
};
</script>
