<template>
  <section id="about" class="ud-about">
    <div class="container">
      <div
        class="ud-about-wrapper wow fadeInUp"
        data-wow-delay=".2s"
        style="
          visibility: visible;
          animation-delay: 0.2s;
          animation-name: fadeInUp;
        "
      >
        <div class="ud-about-content-wrapper">
          <div class="ud-about-content">
            <span class="tag">{{ $t("about.tag") }}</span>
            <h2>{{ $t("about.title") }}</h2>
            <p>
              {{ $t("about.description1") }}<br />
              {{ $t("about.description2") }}<br />
              {{ $t("about.description3") }}
              <a href="https://lineageos.org/" target="blank">LineageOS</a>.
              {{ $t("about.description4") }}
            </p>
            <a href="#install" class="ud-main-btn">
              {{ $t("about.installInstructions") }}
              <i class="lni lni-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="ud-about-image m-3">
          <img
            src="assets/images/hero/photo1628875295.jpeg"
            alt="about-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
