---
# 这是文章的标题
title: 开发环境配置
# 这是页面的图标
icon: file
---

<!-- more -->

:::tip
* 从入门难度考虑，本文优先推荐了 Windows 下基于安装包的软件安装方式，感兴趣的同学可自行研究基于包管理器的安装方式，如 winget、scoop 等
* 如果部分网页无法打开，可在校赛交流群内询问学长学姐（大概率不是网站本身的问题）
:::

## 操作系统

对于大部分使用 Win10 / Win11 的同学，直接略过该节即可。

对于使用 Mac / Linux 的同学，虽然它们在日常学习上没啥问题，但一些线上比赛的监考系统不一定提供对应操作系统版本（例如马蹄集就没有 Mac 版的监考软件）。

## 浏览器

使用 [Chrome](https://www.google.com/intl/zh-CN/chrome/) / Edge 即可，不推荐使用国产浏览器（它们的内核可能比较老，使得一些 OJ 或其他网站的功能不被支持；此外，一些国外网站可能会被意外拦截）。

## 编辑器

[VSCode](https://code.visualstudio.com/) 是目前全球使用最为广泛的代码编辑器之一，绝大部分算法竞赛中也有提供。个人使用时，可以搭配各式各样的插件，令其如虎添翼（当然，比赛时一般就不会允许安装过多插件了）。

如果你更喜欢 Sublime Text、Fleet、Notepad++ 甚至 Vim、Emacs 这些，请注意：日常使用无妨，但线下比赛的比赛机未必会配备他们，线上比赛的监考人员也不一定会允许其使用。

考虑到编辑器会长期使用，伴随你的整个算法竞赛生涯（乃至整个程序员生涯），建议花时间耐心配置好主题界面、代码字体等（IDE同理）。

这里推荐一个 VSCode 在算法竞赛中较为实用的插件：[Competitive Programming Helper](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper)。

## C/C++

[Dev C++](https://pc.qq.com/detail/16/detail_163136.html) 几乎是所有 Win 系比赛机的必备软件，虽然日常用的不多，但还是建议在电脑上面装一个。

考虑到 Dev C++ 的内部编译器版本过老，因此一般需要自行安装一个更新的编译器，以支持全新的 C++ 标准（如14/17/20）如 [TDM-GCC](https://jmeubank.github.io/tdm-gcc/) 或 [MinGW-w64](https://www.mingw-w64.org/downloads/)（新同学建议前者，因为它提供了一键安装包，不需要手动配置环境变量）。

有同学会喜欢 Jetbrains 推出的 CLion，甚至微软的 VS（不是VSCode，而是完整版的Visual Studio），我个人认为它们对于算法竞赛而言有点重量级了（

## Java

在很多大公司的 Java 项目中，JDK 版本往往是一个较为重要的参数，同一份代码可能在更新到新版本 JDK 后就完全无法编译。不过对于我们这些算法竞赛参与者，本身语法就很简单，所以就没那么多讲究了，直接选 JDK 最新的 LTS 版本就行（不过尽量还是别用太新的语法特性）。

Java 的 IDE 分成两派：Eclipse 和 IDEA，我个人推荐后者的[社区版（Community）](https://www.jetbrains.com/zh-cn/idea/download/)（如果你打算以后从事 Java 后端开发，可以直接一步到位，找 Jetbrains 开一个学生优惠，用上 Ultimate 版）。

JDK 往往拥有众多不同的发行版，如 [Microsoft Build of OpenJDK](https://learn.microsoft.com/zh-cn/java/openjdk/download)、[Amazon Corretto](https://aws.amazon.com/cn/corretto/)、[OpenJDK](https://openjdk.org/) 等，各位同学可自行选择（在算法竞赛中，几乎不可能感受到它们在使用上的差异）。

## Python

同 Java 一样，ACMer 不用过分在意版本号的细微差别，在 [Python3](https://www.python.org/downloads/) 里面挑最大的稳定版（维护状态为 security 的版本）即可。

一般来说，VSCode + Python 插件 就足以提供舒适的 Python 编写体验了，如果这还觉得不够，那就去安装一个 [PyCharm 社区版（Community）](https://www.jetbrains.com/zh-cn/pycharm/download/)吧。

## 物理环境

对于显示器，在宿舍可以配置一个 24 寸的（但是得配备升降支架，除非你能拆掉挡板），实验室无所谓（越大越好，预算充足甚至可以多屏），不过最好在确认个人位置较为固定的情况下再置办。

键盘鼠标看情况，在不打扰别人的情况下可以搞一个机械键盘（选那种适合码字的）。

