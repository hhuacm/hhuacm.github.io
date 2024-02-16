import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/learning/" : [
    {
      text: "算法入门",
      icon: "code",
      prefix: "beginner/",
      link: "beginner/",
      children: [
        "basic",
        "environment",
        "onlinejudge",
        "grammar",
        "algorithm-v1",
        "thinking",
        "writeBlog",
        "algorithm-v2",
        "algorithm-v3",
      ],
    },
    {
      text: "校园学习",
      icon: "book-open",
      prefix: "cs-learning/",
      link: "cs-learning/",
      children: [
        "win-env",
        "basic-knowledge",
        "cs-course",
      ],
    },
  ],
  "/aboutus/" : [
    "README",
    "contactus",
    "developPage",
  ]
});
