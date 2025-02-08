<template>
  <section id="features" class="ud-features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="ud-section-title">
            <span>{{ $t("features.title") }}</span>
            <h2>{{ $t("features.subtitle") }}</h2>
            <p>
              {{ $t("features.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-center">
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".1s"
            style="
              visibility: visible;
              animation-delay: 0.1s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-gift"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature1.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature1.description") }}
                <a target="BLANK" href="https://github.com/waydroid">Github.</a>
              </p>
            </div>
          </div>
        </div>
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".15s"
            style="
              visibility: visible;
              animation-delay: 0.15s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-move"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature2.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature2.description") }}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-layout"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature3.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature3.description") }}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".25s"
            style="
              visibility: visible;
              animation-delay: 0.25s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-layers"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature4.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature4.description") }}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".1s"
            style="
              visibility: visible;
              animation-delay: 0.1s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-rocket"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature5.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature5.description") }}
              </p>
            </div>
          </div>
        </div>
        <!-- Feature Start -->
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-feature wow fadeInUp"
            data-wow-delay=".1s"
            style="
              visibility: visible;
              animation-delay: 0.1s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-feature-icon">
              <i class="lni lni-users"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">
                {{ $t("features.feature6.title") }}
              </h3>
              <p class="ud-feature-desc">
                {{ $t("features.feature6.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
