<template>
  <section
    class="ud-hero"
    id="home"
    style="
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0)
        ),
        url(assets/css/background/wd-night-city.svg);
      background-position: top left, cover;
      background-size: 100%, center;
      background-repeat: repeat, repeat;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div
            class="ud-hero-content wow fadeInUp"
            data-wow-delay=".2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <img class="w-75" src="assets/images/hero/waydroid_white_tb.png" />
            <h2 class="text-light">
              {{ $t("LicensingInformation.description") }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LicensingInformation",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
