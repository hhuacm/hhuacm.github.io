import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "入门指南",
    icon: "book",
    link: "/beginner/",
  },
  {
    text: "校园课程",
    icon: "book",
    link: "/cs-learning/",
  },
  {
    text: "队员一览",
    icon: "book",
    link: "/member/",
  },
  "/aboutus/",
]);
