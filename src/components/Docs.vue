<template>
  <!-- ====== Docs Start ====== -->
  <section id="docs" class="ud-pricing">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="ud-section-title mx-auto text-center">
            <span>{{ $t("docs.title_span") }}</span>
            <h2>{{ $t("docs.title_h2") }}</h2>
            <p>
              {{ $t("docs.content_p1") }}
              <a target="_blank" href="https://docs.waydro.id/"
                >docs.waydro.id</a
              >
            </p>
            <h2 class="my-5">{{ $t("docs.title_h2_bugs") }}</h2>
            <p>
              {{ $t("docs.content_p2") }}
              <a
                target="_blank"
                href="https://github.com/waydroid/waydroid/issues"
                >Github Repo</a
              >
            </p>
            <h2 class="my-5">{{ $t("docs.title_h2_development") }}</h2>
            <p>
              {{ $t("docs.content_p3") }}
              <a target="_blank" href="https://github.com/waydroid/">Github</a>
            </p>
            <h2 class="my-5">{{ $t("docs.title_h2_install") }}</h2>
            <p>
              {{ $t("docs.content_p4") }}
              <a
                target="_blank"
                href="https://docs.waydro.id/usage/install-on-desktops"
                >{{ $t("docs.install_docs_link") }}</a
              >
              {{ $t("docs.content_p4_end") }}
            </p>
            <h2 class="my-5">{{ $t("docs.title_h2_download") }}</h2>
            <p>{{ $t("docs.content_p5") }}</p>
            <a
              class="ud-main-btn ud-link-btn my-3"
              target="_blank"
              href="https://sourceforge.net/projects/waydroid"
            >
              <img
                style="width: 2rem; padding-right: 0.5rem"
                src="assets/images/logo/sf.png"
                alt="sourceforge logo"
              />
              SourceForge
              <i class="lni lni-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Docs End ====== -->
</template>

<script>
export default {
  name: "DocsSection",
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
