<template>
  <!-- ====== Contact Start ====== -->
  <section id="donate">
    <div class="container-fluid">
      <div class="row text-center py-5">
        <div class="col-md-12" id="contact">
          <h1>{{ $t("contact.getInTouch") }}</h1>
          <h4 class="text-body my-3">
            {{ $t("contact.contactDescription") }}
          </h4>
          <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <a target="BLANK" href="https://t.me/WayDroid" class="">
                <div class="col-md-12">
                  <img
                    class="img-fluid w-25"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  />
                  <h3>Telegram</h3>
                </div>
              </a>
            </div>
            <div class="col-md-3">
              <a target="BLANK" href="https://matrix.to/#/#waydroid:matrix.org">
                <div class="col-md-12">
                  <img
                    class="img-fluid w-25"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Matrix_icon.svg"
                  />
                  <h3>Matrix</h3>
                </div>
              </a>
            </div>
            <div class="col-md-3"></div>
          </div>
          <h3 class="display-3"> </h3>
          <!-- /.animated scroll -->
        </div>
      </div>
      <div class="row">
        <div class="donate_bg py-5 text-center">
          <h1>{{ $t("contact.helpUsGrow") }}</h1>
          <br />
          <h4>{{ $t("contact.waydroidOnOpenCollective") }}</h4>
          <h4 class="pb-5">
            {{ $t("contact.donationSponsorship") }}
          </h4>
          <div class="row">
            <div>
              <!-- <script class="text-center" width=40% style="width: 40%;" src='https://opencollective.com/waydroid/banner.js'></script> -->
              <a
                href="https://opencollective.com/waydroid/donate"
                target="_blank"
              >
                <img
                  class="img-fluid w-50"
                  src="https://opencollective.com/webpack/donate/button@2x.png?color=blue"
                />
              </a>
            </div>
            <!-- /.animated scroll -->
          </div>
          <!-- /.banner-child -->
          <!-- /.banner-child -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
  </section>
  <!-- ====== Contact End ====== -->
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Add component-specific styles here */
.donate_bg {
  background-color: #f8f9fa; /* 示例背景色，可以根据你的样式调整 */
}
</style>
