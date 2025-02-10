import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import tw from "./locales/tw.json";
// import more languages here

const messages = {
  en,
  zh,
  ja,
  tw,
  // add more languages here
};

const i18n = createI18n({
  locale: "en", // 默认语言
  fallbackLocale: "en",
  messages,
});

export default i18n;
