<template>
  <section id="Licensing">
    <div class="py-5" style="" id="oems">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="display-3">
              {{ $t("LicensingLicensing.licensingTitle") }}
            </h2>
            <p>
              {{ $t("LicensingLicensing.licensingIntro") }}
            </p>
            <div class="row">
              <div class="col-md-12" style="">
                <li v-html="$t('LicensingLicensing.commercialLicense')"></li>
                <li v-html="$t('LicensingLicensing.gplLicense')"></li>
              </div>
            </div>
            <ul></ul>
            <br />
            <p style="">
              {{ $t("LicensingLicensing.thirdPartyCodeIntro") }}
            </p>
            <p style="">
              <b>{{ $t("LicensingLicensing.note") }}</b
              >: {{ $t("LicensingLicensing.openSourceNote") }}
            </p>
            <p style="">
              <b
                ><i>{{ $t("LicensingLicensing.documentation") }}</i></b
              >  {{ $t("LicensingLicensing.documentationAvailability") }}
            </p>
            <p style="">
              {{ $t("LicensingLicensing.educationalLicenses") }}
            </p>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2>{{ $t("LicensingLicensing.purchasingAndSalesTitle") }}</h2>
            <p>
              {{ $t("LicensingLicensing.purchasingInstructions") }}
              <a
                href="mailto:waydroid.project@gmail.com?subject=Waydroid%20License%20Pricing"
              >
                {{ $t("LicensingLicensing.contactUs") }}
              </a>
              {{ $t("LicensingLicensing.withYourRequest") }}
            </p>
            <br />
            <p>
              {{ $t("LicensingLicensing.furtherInformation") }}
            </p>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2>{{ $t("LicensingLicensing.thirdPartyCodeTitle") }}</h2>
            <p>
              {{ $t("LicensingLicensing.thirdPartyCodeDescription") }}
            </p>
            <div class="row">
              <div class="col-md-12" style="">
                <li v-html="$t('LicensingLicensing.apacheLicense')"></li>
                <li
                  v-html="$t('LicensingLicensing.proprietaryComponents')"
                ></li>
                <li>
                  {{ $t("LicensingLicensing.blissBassLicense") }}
                  <a href="https://bliss-bass.blisscolabs.dev" target="_BLANK">
                    Bliss-BASS
                  </a>
                  {{ $t("LicensingLicensing.rebrandingToolkit") }}
                </li>
              </div>
            </div>
            <p>
              -
              <a
                href="https://source.android.com/docs/setup/about/licenses"
                target="_BLANK"
              >
                AOSP Licenses
              </a>
              -
              <a
                href="https://github.com/BlissRoms-x86/manifest/blob/arcadia-x86/License"
                target="_BLANK"
              >
                Bliss OS License
              </a>
              -
              <a
                href="https://github.com/android-generic/vendor_ag/blob/unified/LICENSE.md"
                target="_BLANK"
              >
                Android-Generic Project License
              </a>
              -
              <a
                href="https://github.com/boringdroid/boringdroid/blob/master/LICENSE"
                target="_BLANK"
              >
                Boringdroid License
              </a>
              - <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LicensingLicensing",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
