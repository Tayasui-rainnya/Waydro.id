<template>
  <div>
    <!-- 此组件不需要任何 HTML 结构，因为它的主要作用是执行全局脚本 -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router"; // 导入 useRoute

export default {
  name: "GlobalScripts",
  setup() {
    const route = useRoute(); // 获取当前路由信息

    onMounted(() => {
      // ==== for menu scroll
      const pageLink = document.querySelectorAll(".ud-menu-scroll");
      pageLink.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          e.preventDefault();
          const href = elem.getAttribute("href");
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              offsetTop: 1 - 60,
            });
          }
        });
      });

      // section menu active
      function onScroll() {
        // 只有当路由是 "/" 时才执行滚动监听
        if (route.path === "/") {
          const sections = document.querySelectorAll(".ud-menu-scroll");
          const scrollPos =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

          for (let i = 0; i < sections.length; i++) {
            const currLink = sections[i];
            const val = currLink.getAttribute("href");

            // 检查 val 是否为空或无效的选择器
            if (!val || val === "/" || val.indexOf("#") !== 0) continue;

            const refElement = document.querySelector(val);
            if (!refElement) continue;
            const scrollTopMinus = scrollPos + 73;
            if (
              refElement.offsetTop <= scrollTopMinus &&
              refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
            ) {
              const activeElem = document.querySelector(".ud-menu-scroll.active");
              if (activeElem) {
                activeElem.classList.remove("active");
              }
              currLink.classList.add("active");
            } else {
              currLink.classList.remove("active");
            }
          }
        }
      }

      window.addEventListener("scroll", onScroll);

      // modal focus
      const myModal = document.getElementById("exampleModal"); // 确保ID正确
      if (myModal) {
        myModal.addEventListener("shown.bs.modal", () => {
          const myInput = myModal.querySelector('input[type="text"]'); // 假设你要 focus 的是 input[type="text"]
          if (myInput) {
            myInput.focus();
          }
        });
      }
    });

    return {};
  },
};
</script>
