<template>
  <div>
    <BackToTop />
    <GlobalScripts />
    <MainScripts />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import BackToTop from "./components/BackToTop.vue";
import GlobalScripts from "./components/GlobalScripts.vue";
import MainScripts from "./components/MainScripts.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
    BackToTop,
    GlobalScripts,
    MainScripts,
  },
};
</script>
