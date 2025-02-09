import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  locale: "en", // 默认语言
  fallbackLocale: "en",
  messages,
});

export default i18n;
