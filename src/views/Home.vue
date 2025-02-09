<template>
  <div>
    <Header />
    <Hero />
    <Features />
    <About />
    <Docs />
    <FAQ />
    <Instructions />
    <Team />
    <Contact />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import About from "../components/About.vue";
import Docs from "../components/Docs.vue";
import FAQ from "../components/FAQ.vue";
import Instructions from "../components/Instructions.vue";
import Team from "../components/Team.vue";
import Contact from "../components/Contact.vue";

export default {
  components: {
    Header,
    Hero,
    Features,
    About,
    Docs,
    FAQ,
    Instructions,
    Team,
    Contact,
  },
};
</script>
