import { defineUserConfig } from "vuepress";
import bundler from "./bundler.js";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HHUACM主页",
  description: "Here is HHUACM!",

  theme,
  bundler,
});
