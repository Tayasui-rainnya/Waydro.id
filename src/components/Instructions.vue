<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <!-- /.banner-child -->
        <div class="py-5" id="wdlinux">
          <div class="row">
            <div class="col-lg-12">
              <div class="ud-section-title text-center mx-auto">
                <span>{{ $t("instructions.waydroidLinuxBetaTitle") }}</span>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-6 order-2 order-md-1 drop-shadow">
                <img class="img-fluid d-block" src="assets/images/hero/Computer_wd.png" />
              </div>
              <div class="px-md-5 col-md-6 d-flex flex-column align-items-start justify-content-center order-1 order-md-2">
                <h1>Waydroid-Linux</h1>
                <h3>
                  <span style="color: var(--primary-color)">{{ $t("instructions.latestBeta") }}</span>
                  <span class="secondary-color">01.30.2023</span>
                </h3>
                <p class="mb-3">
                  {{ $t("instructions.description") }}
                  {{ $t("instructions.description2") }}
                  {{ $t("instructions.description3") }}
                </p>
                <div class="card mb-3">
                  <div class="card-header">
                    <h5 class="card-title">{{ $t("instructions.cardTitle") }}</h5>
                    <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#cpus">{{ $t("instructions.supportedCPUs") }}</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#gpus">{{ $t("instructions.supportedGPUs") }}</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#sources">{{ $t("instructions.sources") }}</a>
                      </li>
                    </ul>
                  </div>
                  <form class="card-body tab-content">
                    <div class="tab-pane active" id="cpus">
                      <p class="card-text">{{ $t("instructions.cpuDescription") }}</p>
                    </div>
                    <div class="tab-pane" id="gpus">
                      <p class="card-text">
                        {{ $t("instructions.gpuDescription1") }}<br />
                        {{ $t("instructions.gpuDescription2") }}<a href="https://docs.waydro.id/faq/get-waydroid-to-work-through-a-vm">{{ $t("instructions.softwareRendering") }}</a>
                      </p>
                    </div>
                    <div class="tab-pane" id="sources">
                      <p class="card-text">
                        {{ $t("instructions.sourcesDescription1") }}<br />
                        {{ $t("instructions.sourcesDescription2") }}
                      </p>
                      <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ $t("instructions.waydroidLinuxTools") }}</div>
                            {{ $t("instructions.linuxToolsDescription") }}
                            <div>
                              <a href="https://github.com/waydroid/waydroid-linux_tools"><span class="badge bg-primary rounded-pill">{{ $t("instructions.sources") }}</span></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ $t("instructions.waydroidSettings") }}</div>
                            {{ $t("instructions.settingsDescription") }}
                            <div>
                              <a href="https://github.com/axel358/Waydroid-Settings"><span class="badge bg-primary rounded-pill">{{ $t("instructions.sources") }}</span></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ $t("instructions.penguinsEggs") }}</div>
                            {{ $t("instructions.penguinsEggsDescription") }}
                            <div>
                              <a href="https://github.com/electrikjesus/penguins-eggs"><span class="badge bg-primary rounded-pill">{{ $t("instructions.ourFork") }}</span></a>
                            </div>
                            <div>
                              <a href="https://github.com/pieroproietti/penguins-eggs"><span class="badge bg-primary rounded-pill">{{ $t("instructions.upstream") }}</span></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ $t("instructions.othersMentioning") }}</div>
                            <div>
                              <a href="https://github.com/Quackdoc/waydroid-scripts"><span class="badge bg-primary rounded-pill">{{ $t("instructions.quackDocsScripts") }}</span></a>
                            </div>
                            <div>
                              <a href="https://github.com/electrikjesus/wd-scripts"><span class="badge bg-primary rounded-pill">{{ $t("instructions.electrikjesusScripts") }}</span></a>
                            </div>
                            <div>
                              <a href="https://github.com/electrikjesus/waydroid-10-11-switch-script"><span class="badge bg-primary rounded-pill">{{ $t("instructions.waydroidSwitchScript") }}</span></a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </form>
                </div>
                <!---------->
                <details>
                  <summary>{{ $t("instructions.liveModeInfo") }}</summary>
                  <br />
                  {{ $t("instructions.liveModeDescription1") }}<br />{{ $t("instructions.liveModeDescription2") }}
                </details>
                <br />
                <!-- Button trigger modal -->
                <button type="button" class="btn ud-main-btn ud-link-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  {{ $t("instructions.downloadNow") }}
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $t("instructions.shareAndDownload") }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <h2 class="text-center">{{ $t("instructions.thanksForDownload") }}</h2>
                        <p class="text-center">{{ $t("instructions.shareDescription") }}</p>
                        <div class="text-center modal-footer d-flex align-items-center justify-content-center">
                          <!-- Sharingbutton Facebook -->
                          <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwaydro.id" target="_blank" rel="noopener" aria-label="Facebook">
                            <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path>
                                </svg>
                              </div>
                              Facebook
                            </div>
                          </a>
                          <!-- Sharingbutton Twitter -->
                          <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!&url=https%3A%2F%2Fwaydro.id" target="_blank" rel="noopener" aria-label="Twitter">
                            <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path>
                                </svg>
                              </div>
                              Twitter
                            </div>
                          </a>
                          <!-- Sharingbutton LinkedIn -->
                          <a class="resp-sharing-button__link" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwaydro.id&title=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!&summary=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!&source=https%3A%2F%2Fwaydro.id" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
                                </svg>
                              </div>
                              LinkedIn
                            </div>
                          </a>
                          <!-- Sharingbutton Reddit -->
                          <a class="resp-sharing-button__link" href="https://reddit.com/submit/?url=https%3A%2F%2Fwaydro.id&resubmit=true&title=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!" target="_blank" rel="noopener" aria-label="Reddit">
                            <div class="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"></path>
                                </svg>
                              </div>
                              Reddit
                            </div>
                          </a>
                          <!-- Sharingbutton Hacker News -->
                          <a class="resp-sharing-button__link" href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwaydro.id&t=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!" target="_blank" rel="noopener" aria-label="Hacker News">
                            <div class="resp-sharing-button resp-sharing-button--hackernews resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                                  <path fill-rule="evenodd" d="M60.94 82.314L17 0h20.08l25.85 52.093c.397.927.86 1.888 1.39 2.883.53.994.995 2.02 1.393 3.08.265.4.463.764.596 1.095.13.334.262.63.395.898.662 1.325 1.26 2.618 1.79 3.877.53 1.26.993 2.42 1.39 3.48 1.06-2.254 2.22-4.673 3.48-7.258 1.26-2.585 2.552-5.27 3.877-8.052L103.49 0h18.69L77.84 83.308v53.087h-16.9v-54.08z"></path>
                                </svg>
                              </div>
                              Hacker News
                            </div>
                          </a>
                          <!-- Sharingbutton Telegram -->
                          <a class="resp-sharing-button__link" href="https://telegram.me/share/url?text=Hey%20guys%2C%20I'm%20switching%20to%20this%20amazing%20Linux%20distro%20called%20%23waydroid_linux%20that%20integrates%20Android!&url=https%3A%2F%2Fwaydro.id" target="_blank" rel="noopener" aria-label="Telegram">
                            <div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--medium">
                              <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"></path>
                                </svg>
                              </div>
                              Telegram
                            </div>
                          </a>
                        </div>
                      </div>
                      <p class="text-center text-danger">
                        {{ $t("instructions.rememberCheckReadme") }}
                      </p>
                      <div class="modal-footer text-center d-flex flex-column align-items-center justify-content-center">
                        <a class="ud-main-btn ud-link-btn my-3" target="BLANK" href="https://sourceforge.net/projects/blissos-dev/files/waydroid/linux/beta/ubuntu/jammy/01-30-2023-plasma/">
                          <img style="width: 2rem; padding-right: 0.5rem" src="/assets/images/logo/sf.png" alt="sourceforge logo" />
                          Ubuntu 22.04 [KDE-Plasma] (Lineage-18.1)
                          <i class="lni lni-angle-double-down"></i>
                        </a>
                        <a class="ud-main-btn ud-link-btn my-3" target="BLANK" href="https://mega.nz/folder/SoJEXCqT#lRB8Hr_Ofe_Tj135Larb8g">
                          <img style="width: 2rem; padding-right: 0.5rem" src="https://cms2.mega.nz/b41537c0eae056cfe5ab05902fca322b.png" alt="Mega.nz logo" />
                          Ubuntu 22.04 [Gnome] (Lineage-18.1)
                          <i class="lni lni-angle-double-down"></i>
                        </a>
                        <a class="ud-main-btn ud-link-btn my-3" target="BLANK" href="https://sourceforge.net/projects/blissos-dev/files/waydroid/linux/beta/debian/bookworm/03-15-22/">
                          <img style="width: 2rem; padding-right: 0.5rem" src="/assets/images/logo/sf.png" alt="sourceforge logo" />
                          Debian 12 Beta (Lineage-17.1 vanilla)
                          <i class="lni lni-angle-double-down"></i>
                        </a>
                        <a class="ud-main-btn ud-link-btn my-3" target="BLANK" href="https://sourceforge.net/projects/blissos-dev/files/waydroid/linux/beta/ubuntu/impish/03-05-22/">
                          <img style="width: 2rem; padding-right: 0.5rem" src="/assets/images/logo/sf.png" alt="sourceforge logo" />
                          Ubuntu 21.10 Beta (Lineage-17.1 vanilla)
                          <i class="lni lni-angle-double-down"></i>
                        </a>
                        <a class="ud-main-btn ud-link-btn my-3" target="BLANK" href="https://sourceforge.net/projects/blissos-dev/files/waydroid/linux/alpha/ubuntu/">
                          <img style="width: 2rem; padding-right: 0.5rem" src="/assets/images/logo/sf.png" alt="sourceforge logo" />
                          Our Older Releases
                          <i class="lni lni-angle-double-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!---------->
              </div>
            </div>
          </div>
        </div>
        <!-- /.banner-child -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  name: "Instructions",
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
