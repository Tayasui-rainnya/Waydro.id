<template>
  <!-- ====== FAQ Start ====== -->
  <section id="install" class="ud-faq">
    <div class="shape">
      <img src="assets/images/faq/shape.svg" alt="shape" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="ud-section-title text-center mx-auto">
            <span>{{ $t("faq.instructions") }}</span>
            <h2>{{ $t("faq.quickInstallReference") }}</h2>
            <p>{{ $t("faq.forSystemdDistributions") }}</p>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="true"
                data-bs-toggle="tab"
                href="#cpus1"
                >{{ $t("faq.supportedCPUs") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#gpus1">{{
                $t("faq.supportedGPUs")
              }}</a>
            </li>
          </ul>
        </div>
        <form class="card-body tab-content">
          <div class="tab-pane active" id="cpus1">
            <p class="card-text">{{ $t("faq.cpusContent") }}</p>
          </div>
          <div class="tab-pane" id="gpus1">
            <p class="card-text">
              {{ $t("faq.gpusContent1") }}
              <a
                href="https://docs.waydro.id/faq/get-waydroid-to-work-through-a-vm"
                >{{ $t("faq.softwareRendering") }}</a
              >
            </p>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            {{ $t("faq.followInstallInstructions") }}
            <a href="https://docs.waydro.id/usage/install-on-desktops">{{
              $t("faq.docs")
            }}</a
            >.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            {{ $t("faq.afterInstalling") }}
          </p>
        </div>
        <div class="col-md-12">
          <figure class="highlight">
            <pre><code class="hljs language-bash" data-lang="">sudo systemctl enable --now waydroid-container
</code></pre>
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>{{ $t("faq.thenLaunchWaydroid") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>{{ $t("faq.ifPromptedUseLinks") }}</p>
        </div>
        <div class="col-md-6">
          <pre><code class="hljs language-bash" data-lang=""><p>https://ota.waydro.id/system</p></code></pre>
        </div>
        <div class="col-md-6">
          <pre><code class="hljs language-bash" data-lang=""><p>https://ota.waydro.id/vendor</p></code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            {{ $t("faq.forFurtherInstructions") }}
            <a target="BLANK" href="https://docs.waydro.id">{{
              $t("faq.here")
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== FAQ End ====== -->
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
