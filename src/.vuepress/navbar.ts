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
    text: "校赛、选拔",
    icon: "book",
    prefix: "/hhucpc-and-acmteam/",
    children: [
      {
        text: "校赛信息",
        icon: "code",
        link: "hhucpc/",
      },
      {
        text: "校队选拔",
        icon: "book-open",
        link: "acmteam/",
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
