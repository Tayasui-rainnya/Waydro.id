import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n"; // 导入 i18n 实例
import router from "./router"; // 导入 Vue Router 实例

const app = createApp(App);

app.use(i18n); // 注册 i18n 插件
app.use(router); // 注册 Vue Router 插件

app.mount("#app");
