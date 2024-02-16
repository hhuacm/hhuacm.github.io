import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "学习指南",
    icon: "book",
    prefix: "/learning/",
    children: [
      {
        text: "算法入门",
        icon: "code",
        link: "beginner/",
      },
      {
        text: "校园学习",
        icon: "book-open",
        link: "cs-learning/",
      },
    ],
  },
  {
    text: "队员一览",
    icon: "book",
    link: "/member/",
  },
  "/aboutus/",
]);
