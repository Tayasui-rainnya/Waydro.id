<template>
  <div>
    <HeaderLicensing />
    <LicensingInformation />
    <LicensingLicensing />
    <LicensingFAQ />
    <Contact />
  </div>
</template>

<script>
import HeaderLicensing from "../components/HeaderLicensing.vue";
import LicensingInformation from "../components/LicensingInformation.vue";
import LicensingLicensing from "../components/LicensingLicensing.vue";
import LicensingFAQ from "../components/LicensingFAQ.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Licensing",
  components: {
    HeaderLicensing,
    LicensingInformation,
    LicensingLicensing,
    LicensingFAQ,
    Contact,
  },
};
</script>

<style scoped>
/* 添加样式 */
</style>
