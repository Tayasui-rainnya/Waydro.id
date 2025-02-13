import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import tw from "./locales/tw.json";
import jp from "./locales/jp.json";

const messages = {
  en,
  zh,
  tw,
  jp,
};

const i18n = createI18n({
  locale: "en", // 默认语言
  fallbackLocale: "en",
  messages,
});

export default i18n;
