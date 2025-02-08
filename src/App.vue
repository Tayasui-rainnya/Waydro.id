<template>
  <div>
    <Header />
    <BackToTop />
    <GlobalScripts />
    <MainScripts />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BackToTop from "./components/BackToTop.vue";
import GlobalScripts from "./components/GlobalScripts.vue";
import MainScripts from "./components/MainScripts.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    BackToTop,
    GlobalScripts,
    MainScripts,
  },
};
</script>
