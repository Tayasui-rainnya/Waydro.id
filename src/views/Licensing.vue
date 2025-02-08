<template>
  <div>
    <LicensingInformation />
    <LicensingLicensing />
    <LicensingFAQ />
    <Contact />
  </div>
</template>

<script>
import LicensingInformation from "../components/LicensingInformation.vue";
import LicensingLicensing from "../components/LicensingLicensing.vue";
import LicensingFAQ from "../components/LicensingFAQ.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Licensing",
  components: {
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
