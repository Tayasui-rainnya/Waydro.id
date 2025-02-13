<template>
    <header class="ud-header sticky">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="index.html">
                            <img class="w-75" src="assets/images/logo/waydroid_icon_sm.png" alt="Logo" />
                        </a>
                        <button class="navbar-toggler">
                            <span class="toggler-icon"> </span>
                            <span class="toggler-icon"> </span>
                            <span class="toggler-icon"> </span>
                        </button>
                        <div class="navbar-collapse">
                            <ul id="nav" class="navbar-nav mx-auto" style="transform: translateX(20%)">
                                <li class="nav-item">
                                    <router-link class="ud-menu-scroll nav-link active" to="/">
                                        {{ $t("header.home") }}
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="ud-menu-scroll" href="#about">
                                        {{ $t("header.about") }}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="ud-menu-scroll active" href="#docs">
                                        {{ $t("header.docs") }}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="ud-menu-scroll" href="#contact">
                                        {{ $t("header.contact") }}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <router-link class="ud-menu-scroll nav-link" to="/licensing">
                                        {{ $t("header.licensing") }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-btn d-sm-inline-block mr-3 pr-3">
                            <a class="ud-main-btn ud-white-btn" href="#install" style="margin-right: 1rem">
                                {{ $t("header.install") }}
                            </a>
                        </div>
                        <div class="navbar-btn2 d-none d-sm-inline-block">
                            <a class="ud-main-btn navbar-btn2-link ud-white-btn" href="#wdlinux">
                                {{ $t("header.waydroidLinuxBeta") }}
                            </a>
                        </div>

                        <div class="custom-navbar-btn">
                            <a class="custom-white-btn" href="#">
                                <!-- 语言切换按钮放在右侧 -->
                                <div class="language-dropdown ms-auto d-flex align-items-center">
                                    <div class="dropdown">
                                        <button class="btn language-btn dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{ getFlag(currentLanguage) }}<span class="lang-label"> {{ currentLanguage.toUpperCase() }}</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                            <li v-for="lang in languages" :key="lang.value">
                                                <a class="dropdown-item" href="#" @click.prevent="switchLanguage(lang.value)">
                                                    {{ lang.flag }} {{ lang.label }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                currentLanguage: "en",
                languages: [{
                        value: "en",
                        label: "EN",
                        flag: "🇺🇸"
                    },
                    {
                        value: "zh",
                        label: "简体中文",
                        flag: "🇨🇳"
                    },
                    {
                        value: "tw",
                        label: "繁體中文",
                        flag: "🇹🇼"
                    },
                    {
                        value: "jp",
                        label: "日本語",
                        flag: "🇯🇵"
                    },
                ],
            };
        },
        mounted() {
            const savedLang = localStorage.getItem("user-lang");
            if (savedLang) {
                this.currentLanguage = savedLang;
                this.$i18n.locale = savedLang;
            }
        },
        methods: {
            switchLanguage(lang) {
                this.currentLanguage = lang;
                this.$i18n.locale = lang;
                localStorage.setItem("user-lang", lang);
            },
            getFlag(lang) {
                const found = this.languages.find(l => l.value === lang);
                return found ? found.flag : "";
            },
        },
    };
</script>

<style scoped>
    .language-dropdown {
        margin-right: 0rem;
    }

    /* 自定义语言切换按钮样式 */
    .language-btn {
        background-color: #f0f0f0;
        /* 灰色背景 */
        border: 1px solid #333;
        /* 深灰色边框 */
        color: #000000;
        /* 深色文字 */
        font-size: 1em;
        padding: 0.5rem;
    }

    .language-btn:focus {
        box-shadow: none;
    }

    /* 默认只显示 emoji */
    .language-btn .lang-label {
        display: none;
    }

    .language-btn[aria-expanded="true"] .lang-label {
        display: inline;
    }

    .dropdown-menu {
        background-color: #fff;
        border: 1px solid #ddd;
    }

    .dropdown-item {
        color: #333;
    }

    .dropdown-item:hover {
        background-color: #f8f9fa;
        color: #000;
    }

    /* 按钮基本样式 */
    .custom-navbar-btn {
        padding: 8px 16px;
        background: transparent;
        display: none;
        /* 默认隐藏 */
    }

    @media (min-width: 576px) {
        .custom-navbar-btn {
            display: inline-block;
            /* sm屏幕及以上显示 */
            margin-right: 1rem;
            padding-right: 1rem;
        }
    }

    /* 响应式定位 */
    @media (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
        .custom-navbar-btn {
            position: absolute;
            top: 50%;
            right: 50px;
            transform: translateY(-50%);
        }
    }

    .custom-navbar-btn:hover {
        color: var(--heading-color);
    }

    .custom-white-btn {
        background: rgba(255, 255, 255, 0.2);
    }

    .sticky .custom-navbar-btn {
        color: var(--heading-color);
    }

    .sticky .custom-white-btn {
        background: var(--primary-color);
        color: var(--white);
    }
</style>