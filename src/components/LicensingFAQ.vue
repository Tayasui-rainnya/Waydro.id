<template>
  <section id="LicensingFAQ">
    <div class="py-5" style="" id="oems">
      <div class="container">
        <div class="row">
          <h3 class="display-4 text-center">{{ $t("LicensingFAQ.title") }}</h3>
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q1") }}</h4>
            <p v-html="$t('LicensingFAQ.a1')"></p>
          </div>
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q2") }}</h4>
            <p v-html="$t('LicensingFAQ.a2')"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q3") }}</h4>
            <p v-html="$t('LicensingFAQ.a3')"></p>
          </div>
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q4") }}</h4>
            <p v-html="$t('LicensingFAQ.a4')"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q5") }}</h4>
            <p v-html="$t('LicensingFAQ.a5')"></p>
          </div>
          <div class="col-md-6 p-3">
            <h4>{{ $t("LicensingFAQ.q6") }}</h4>
            <p v-html="$t('LicensingFAQ.a6')"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 pt-5 text-center">
            <h1>{{ $t("LicensingFAQ.licensingQuestions") }}</h1>
            <h5>
              {{ $t("LicensingFAQ.licensingDescription") }}
            </h5>
            <p class="mb-3">
              {{ $t("LicensingFAQ.licensingHelp") }}
            </p>
            <a
              class="btn btn-outline-primary mt-3"
              href="mailto:waydroid.project@gmail.com?subject=Licensing Inquiry"
            >
              {{ $t("LicensingFAQ.contactUs") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LicensingFAQ",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
