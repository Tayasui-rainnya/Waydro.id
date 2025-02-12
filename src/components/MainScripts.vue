<template>
  <div>
    <!-- 此组件不需要任何 HTML 结构，因为它的主要作用是执行全局脚本 -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import WOW from "wowjs";

export default {
  name: "MainScripts",
  setup() {
    onMounted(() => {
      // ======= Sticky Header
      const ud_header = document.querySelector(".ud-header");

      const stickyHandler = () => {
        if (!ud_header) return; // 确保元素存在
        const sticky = ud_header.offsetTop;
        if (window.pageYOffset > sticky) {
          ud_header.classList.add("sticky");
        } else {
          ud_header.classList.remove("sticky");
        }
      };

      // Back to Top Button
      const backToTopHandler = () => {
        const backToTop = document.querySelector(".back-to-top");
        if (!backToTop) return; // 确保元素存在
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      };

      window.addEventListener("scroll", () => {
        stickyHandler();
        backToTopHandler();
      });

      //===== Close navbar-collapse when a clicked
      let navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
        e.addEventListener("click", () => {
          if (navbarToggler) navbarToggler.classList.remove("active");
          if (navbarCollapse) navbarCollapse.classList.remove("show");
        })
      );

      if (navbarToggler) {
        navbarToggler.addEventListener("click", function () {
          this.classList.toggle("active");
          if (navbarCollapse) {
            navbarCollapse.classList.toggle("show"); // 使用条件判断避免空指针
          }
        });
      }

      // ===== wow js (如果还没初始化)
      new WOW().init();

      // ====== scroll top js
      function scrollTo(element, to = 0, duration = 500) {
        if (!element) return; // 确保元素存在
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
          currentTime += increment;
          const val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      }

      // Math.easeInOutQuad (保持原样，因为它是独立的函数)
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const backToTopButton = document.querySelector(".back-to-top");
      if (backToTopButton) {
        backToTopButton.onclick = () => {
          scrollTo(document.documentElement);
        };
      }
    });

    return {};
  },
};
</script>

<style scoped>
/* 如有需要，可添加对应的 CSS 样式 */
</style>
