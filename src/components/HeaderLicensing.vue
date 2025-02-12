<template>
  <header class="ud-header sticky">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.html">
              <img
                class="w-75"
                src="assets/images/logo/waydroid_icon_sm.png"
                alt="Logo"
              />
            </a>
            <button class="navbar-toggler">
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
            </button>
            <div class="navbar-collapse">
              <ul
                id="nav"
                class="navbar-nav mx-auto"
                style="transform: translateX(20%)"
              >
                <li class="nav-item">
                  <router-link class="ud-menu-scroll nav-link active" to="/">
                    {{ $t("HeaderLicensing.home") }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="#Licensing">{{
                    $t("HeaderLicensing.Licensing")
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll active" href="#LicensingFAQ">{{
                    $t("HeaderLicensing.LicensingFAQ")
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="#contact">{{
                    $t("HeaderLicensing.contact")
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="navbar-btn d-sm-inline-block mr-3 pr-3">
              <a
                class="ud-main-btn ud-white-btn"
                href="#install"
                style="margin-right: 1rem"
              >
                {{ $t("HeaderLicensing.install") }}</a
              >
            </div>
            <div class="navbar-btn2 d-none d-sm-inline-block">
              <a
                class="ud-main-btn navbar-btn2-link ud-white-btn"
                href="#wdlinux"
              >
                {{ $t("HeaderLicensing.waydroidLinuxBeta") }}</a
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLicensing",
};
</script>

<style scoped>
/* 这里可以添加组件的私有样式 */
</style>
