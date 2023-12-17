---
# 这是文章的标题
title: 二次开发规范
# 这是页面的图标
icon: computer
---

<!-- more -->

本网站基于VuePress开发，使用了VuePress Theme Hope主题。

如果你仅打算对于文本内容进行修改，那么直接在对应的Markdown中进行调整即可。考虑到加载速度和仓库限制，请在加入本地图片的时候慎重考虑体积问题。

如果你想要对项目进行大型调整（更新、增加功能等），请将该仓库Fork一份后，在本地进行二次开发，测试完毕后进行 Pull Request 操作。开发前，请确保系统已经安装 Node.js 和 pnpm，并在仓库根目录下执行 `pnpm i` 来批量安装依赖。

本项目已配置 Github Actions（具体可参考 `.github/workdlows` 目录下的配置文件），仅需要修改源代码，push到主分支后，即可自动编译生成静态文件，并在 `hhuacm.github.io` 中加以访问。

本项目分为两个分支：`main` 和 `gh-pages`，其中源代码存放在 `main` 分支，而 `gh-pages` 用于存放编译得到的静态HTML文件。

具体开发细节请参考 [Vuepress Theme Hope](https://theme-hope.vuejs.press/zh/)。