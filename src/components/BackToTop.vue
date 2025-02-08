<template>
  <!-- ====== Back To Top Start ====== -->
  <a href="javascript:void(0)" class="back-to-top" style="display: flex">
    <i class="lni lni-chevron-up"> </i>
  </a>
  <!-- ====== Back To Top End ====== -->
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";

export default {
  name: "BackToTop",
  setup() {
    let backToTopBtn; // 使用 let 定义变量

    onMounted(() => {
      backToTopBtn = document.querySelector(".back-to-top"); // 在 onMounted 中获取元素

      const scrollHandler = () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.style.display = "flex";
        } else {
          backToTopBtn.style.display = "none";
        }
      };

      const clickHandler = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      window.addEventListener("scroll", scrollHandler);
      backToTopBtn.addEventListener("click", clickHandler);

      onBeforeUnmount(() => {
        window.removeEventListener("scroll", scrollHandler);
        backToTopBtn.removeEventListener("click", clickHandler);
      });
    });

    return {}; // setup 函数需要返回一个对象
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 999; /* 确保在其他元素之上 */
  display: none; /* 初始状态隐藏 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.back-to-top:hover {
  background-color: rgba(0, 0, 0, 0.8); /* hover时加深背景色 */
}
</style>
