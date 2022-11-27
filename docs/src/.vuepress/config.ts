import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Tiktok SJ",
      description: "年龄快13，爱喝碳酸饮料，是碳基生物，两个眼睛一个鼻子。",
    },
  },

  theme,

  shouldPrefetch: false,
});
