<template>
  <!-- ====== Team Start ====== -->
  <section id="team" class="ud-team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="ud-section-title mx-auto text-center">
            <span>{{ $t("team.ourTeam") }}</span>
            <h2>{{ $t("team.meetTheTeam") }}</h2>
            <p>{{ $t("team.teamDescription") }}</p>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-team wow fadeInUp"
            data-wow-delay=".1s"
            style="
              visibility: visible;
              animation-delay: 0.1s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-team-image-wrapper">
              <div class="ud-team-image">
                <img
                  src="https://avatars.githubusercontent.com/u/7512922?v=4"
                  alt="team"
                />
              </div>
              <img
                src="assets/images/team/dotted-shape.svg"
                alt="shape"
                class="shape shape-1"
              />
              <img
                src="assets/images/team/shape-2.svg"
                alt="shape"
                class="shape shape-2"
              />
            </div>
            <div class="ud-team-info">
              <h5>Erfan Abdi</h5>
              <p4>@erfanoabdi</p4>
              <h6>{{ $t("team.leadDeveloper") }}</h6>
            </div>
            <ul class="ud-team-socials">
              <li>
                <a target="BLANK" href="https://github.com/erfanoabdi">
                  <i class="lni lni-github-original"></i>
                </a>
              </li>
              <li>
                <a target="BLANK" href="https://twitter.com/Khode_Erfan">
                  <i class="lni lni-twitter-filled"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-team wow fadeInUp"
            data-wow-delay=".15s"
            style="
              visibility: visible;
              animation-delay: 0.15s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-team-image-wrapper">
              <div class="ud-team-image">
                <img
                  src="https://avatars.githubusercontent.com/u/8167495?v=4"
                  alt="team"
                />
              </div>
              <img
                src="assets/images/team/dotted-shape.svg"
                alt="shape"
                class="shape shape-1"
              />
              <img
                src="assets/images/team/shape-2.svg"
                alt="shape"
                class="shape shape-2"
              />
            </div>
            <div class="ud-team-info">
              <h5>Alessandro Astone</h5>
              <p4>@aleasto</p4>
              <h6>{{ $t("team.developer") }}</h6>
            </div>
            <ul class="ud-team-socials">
              <li>
                <a target="BLANK" href="https://github.com/aleasto">
                  <i class="lni lni-github-original"></i>
                </a>
              </li>
              <li>
                <a target="BLANK" href="https://twitter.com/aaleasto">
                  <i class="lni lni-twitter-filled"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-team wow fadeInUp"
            data-wow-delay=".15s"
            style="
              visibility: visible;
              animation-delay: 0.15s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-team-image-wrapper">
              <div class="ud-team-image">
                <img
                  src="https://avatars.githubusercontent.com/u/8572619?v=4"
                  alt="team"
                />
              </div>
              <img
                src="assets/images/team/dotted-shape.svg"
                alt="shape"
                class="shape shape-1"
              />
              <img
                src="assets/images/team/shape-2.svg"
                alt="shape"
                class="shape shape-2"
              />
            </div>
            <div class="ud-team-info">
              <h5>Jon West</h5>
              <p4>@electrikjesus</p4>
              <h6>{{ $t("team.developer") }}</h6>
            </div>
            <ul class="ud-team-socials">
              <li>
                <a target="BLANK" href="https://github.com/electrikjesus">
                  <i class="lni lni-github-original"></i>
                </a>
              </li>
              <li>
                <a target="BLANK" href="https://twitter.com/electrikjesus">
                  <i class="lni lni-twitter-filled"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-sm-6">
          <div
            class="ud-single-team wow fadeInUp"
            data-wow-delay=".2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <div class="ud-team-image-wrapper">
              <div class="ud-team-image">
                <img
                  src="https://avatars.githubusercontent.com/u/22264125"
                  alt="team"
                />
              </div>
              <img
                src="assets/images/team/dotted-shape.svg"
                alt="shape"
                class="shape shape-1"
              />
              <img
                src="assets/images/team/shape-2.svg"
                alt="shape"
                class="shape shape-2"
              />
            </div>
            <div class="ud-team-info">
              <h5>Radek Błędowski</h5>
              <p4>@RKBDI</p4>
              <h6>{{ $t("team.designer") }}</h6>
            </div>
            <ul class="ud-team-socials">
              <li>
                <a target="BLANK" href="https://dribbble.com/rkbdi">
                  <i class="lni lni-dribbble"></i>
                </a>
              </li>
              <li>
                <a target="BLANK" href="https://twitter.com/RKBDI">
                  <i class="lni lni-twitter-filled"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Team End ====== -->
</template>

<script>
export default {
  name: "Team",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
