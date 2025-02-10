<template>
  <header class="ud-header sticky">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.html">
              <img
                class="w-75"
                src="assets/images/logo/waydroid_icon_sm.png"
                alt="Logo"
              />
            </a>
            <!-- 添加点击事件 -->
            <button class="navbar-toggler" @click="toggleMenu">
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
            </button>
            <!-- 添加动态类控制显示/隐藏 -->
            <div class="navbar-collapse" :class="{ show: isMenuOpen }">
              <ul
                id="nav"
                class="navbar-nav mx-auto"
                style="transform: translateX(20%)"
              >
                <li class="nav-item">
                  <router-link class="ud-menu-scroll nav-link active" to="/">
                    {{ $t("header.home") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="#about">{{
                    $t("header.about")
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll active" href="#docs">{{
                    $t("header.docs")
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="#contact">{{
                    $t("header.contact")
                  }}</a>
                </li>
                <li class="nav-item">
                  <router-link class="ud-menu-scroll nav-link" to="/licensing">
                    {{ $t("header.licensing") }}
                  </router-link>
                </li>
              </ul>
            </div>

            <select v-model="selectedLanguage" @change="changeLanguage">
              <option value="en">🇺🇸 English</option>
              <option value="zh">🇨🇳 简体中文</option>
              <option value="tw">🇹🇼 繁體中文</option>
              <option value="ja">🇯🇵 日本語</option>
              <!-- More language -->
            </select>
            <div class="navbar-btn d-sm-inline-block mr-3 pr-3">
              <a
                class="ud-main-btn ud-white-btn"
                href="#install"
                style="margin-right: 1rem"
              >
                {{ $t("header.install") }}</a
              >
            </div>
            <div class="navbar-btn2 d-none d-sm-inline-block">
              <a
                class="ud-main-btn navbar-btn2-link ud-white-btn"
                href="#wdlinux"
              >
                {{ $t("header.waydroidLinuxBeta") }}</a
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      selectedLanguage: localStorage.getItem("language") || "en",
      isMenuOpen: false, // 添加菜单状态控制
    };
  },
  mounted() {
    this.$i18n.locale = this.selectedLanguage;
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("language", this.selectedLanguage);
    },
    // 添加切换菜单方法
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* 这里可以添加组件的私有样式 */

/* 语言选择下拉框样式 */
select {
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  background-color: #fff;
  margin-right: 16px;
  outline: none;
  transition: border-color 0.2s;
  cursor: pointer;
}

select:hover {
  border-color: #c0c4cc;
}

select:focus {
  border-color: #409eff;
}

/* 确保下拉框选项样式统一 */
select option {
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 优化emoji显示 */
select option {
  font-family: "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
}

/* 添加响应式菜单样式 */
@media (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .navbar-collapse.show {
    max-height: 400px; /* 根据实际内容高度调整 */
  }

  #nav {
    flex-direction: column;
    align-items: flex-start;
    transform: none !important;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .navbar-collapse.show #nav {
    opacity: 1;
  }

  #nav .nav-item {
    width: 100%;
    margin: 0.5rem 0;
    transform: translateY(-10px);
    transition: transform 0.2s ease-out;
  }

  .navbar-collapse.show #nav .nav-item {
    transform: translateY(0);
  }
}
</style>
