<template>
  <section
    class="ud-hero"
    id="home"
    style="
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0)
        ),
        url(assets/css/background/wd-night-city.svg);
      background-position: top left, cover;
      background-size: 100%, center;
      background-repeat: repeat, repeat;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div
            class="ud-hero-content wow fadeInUp"
            data-wow-delay=".2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <img class="w-75" src="assets/images/hero/waydroid_white_tb.png" />
            <p class="ud-hero-desc">
              {{ $t("hero.description") }}
            </p>
            <ul class="ud-hero-buttons">
              <li>
                <a
                  href="#docs"
                  rel="nofollow noopener"
                  class="ud-main-btn ud-white-btn"
                >
                  {{ $t("hero.documentation") }}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  rel="nofollow noopener"
                  class="ud-main-btn ud-link-btn"
                >
                  {{ $t("hero.learnMore") }}
                  <i class="lni lni-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="ud-hero-image wow fadeInUp"
            data-wow-delay=".25s"
            style="
              visibility: visible;
              animation-delay: 0.25s;
              animation-name: fadeInUp;
            "
          >
            <div
              id="carouselExampleCaptions"
              class="carousel slide carousel-fade rounded-3"
              data-bs-ride="carousel"
              style="transform: translateY(32px)"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block img-fluid w-100 rounded-3"
                    src="assets/images/hero/main_landing.jpeg"
                  />
                  <div
                    class="carousel-caption d-none d-md-block blurme-dark rounded-3"
                  >
                    <h5>{{ $t("hero.carousel1.title") }}</h5>
                    <p>{{ $t("hero.carousel1.description") }}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid w-100 rounded-3"
                    src="assets/images/hero/Group 1.png"
                  />
                  <div
                    class="carousel-caption d-none d-md-block blurme-dark rounded-3"
                  >
                    <h5>{{ $t("hero.carousel2.title") }}</h5>
                    <p>{{ $t("hero.carousel2.description") }}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid w-100 rounded-3"
                    src="assets/images/hero/clean_desktop.jpeg"
                  />
                  <div
                    class="carousel-caption d-none d-md-block blurme-dark rounded-3"
                  >
                    <h5>{{ $t("hero.carousel3.title") }}</h5>
                    <p>{{ $t("hero.carousel3.description") }}</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <img
              src="assets/images/hero/dotted-shape.svg"
              alt="shape"
              class="shape shape-1"
            />
            <img
              src="assets/images/hero/dotted-shape.svg"
              alt="shape"
              class="shape shape-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
