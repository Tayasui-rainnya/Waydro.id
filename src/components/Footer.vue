<template>
  <!-- ====== Footer Start ====== -->
  <footer
    class="ud-footer wow fadeInUp bg-dark"
    data-wow-delay=".15s"
    style="
      visibility: visible;
      animation-delay: 0.15s;
      animation-name: fadeInUp;
    "
  >
    <div class="ud-footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <ul class="ud-footer-bottom-left">
              <li>
                <a href="https://github.com/waydroid">{{
                  $t("footer.source")
                }}</a>
              </li>
              <li>
                <a href="https://docs.waydro.id">{{
                  $t("footer.documentation")
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <p class="ud-footer-bottom-center">
              {{ $t("footer.aBlissLabsProjectPrefix") }}
              <a href="https://blisslabs.org">{{
                $t("footer.aBlissLabsProjectLink")
              }}</a>
              {{ $t("footer.aBlissLabsProjectSuffix") }}
            </p>
          </div>
          <div class="col-md-4">
            <p class="ud-footer-bottom-right">
              {{ $t("footer.copyright") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ====== Footer End ====== -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
