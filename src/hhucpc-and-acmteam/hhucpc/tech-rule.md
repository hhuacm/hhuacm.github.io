---
title: 校赛技术规范
icon: laptop-code
---

本文档旨在介绍校赛期间选手比赛用机与OJ服务器的相关配置信息。

## OJ服务器

HHUOJ基于[HydroOJ](https://hydro.js.org)搭建，并会在校赛前一个月进行更新，与官方最新版本保持一致。

截至2024年3月，HHUOJ支持以下语言及其对应版本：

* C/C++：基于 GCC 11.4.0，支持 C++ 98 / 11 / 14 / 17 标准

* Java：基于OpenJDK 17

* Python：基于 Python 3.10

## 选手比赛用机

### 基础软件

对于大部分机房机器，它们均安装有 Windows 10 64bit 操作系统，并配备了 Edge 和 Chrome 浏览器。

如有特殊情况（例如比赛机房仅提供 Win 7 甚至国产 Linux），校赛技术组会提前告知参赛选手，并在比赛期间提供额外技术支持。

### 编程软件

#### 编译器 / 解释器

* C/C++ : TDM-GCC 10.3.0
* Java : Oracle JDK 1.8
* Python : Python 3.10 / 3.11

附1：由于无法确认的原因，机房电脑无法保证GDB可用性（这一现象最早在20年江苏省赛被广泛发现，但一直修不了）。

附2：致远楼106机房已经实现了 GCC 13.2.0 + JDK21 + Python 3.11 的最新配置。

#### 编辑器

VSCode，并安装有 C/C++、Python 插件。

#### IDE

* Dev C++ 5.11 (with GCC 4.9.2)
* Jetbrains IDEA Community 2023
* Jetbrains PyCharm Community 2023
* Eclipse 2023

Eclipse似乎自带有oepnJDK 17，有需要的同学可以在安装目录下找一找。

JetBarins系IDE不保证带有中文插件。