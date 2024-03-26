---
title: 校赛技术规范
icon: laptop-code
---

本文档旨在介绍校赛期间选手比赛用机与OJ服务器的相关配置。

## OJ服务器

HHUOJ基于[HydroOJ][https://hydro.js.org]搭建，并会在校赛前一个月进行更新，与官方最新版本保持一致。

截至目前（2024年3月），HHUOJ支持以下语言及其对应版本：

* C/C++：基于 GCC 11.4.0，支持 C++ 98 / 11 / 14 / 17 标准

* Java：基于OpenJDK17

* Python：基于 Python 3.10

## 选手比赛用机

以下配置适用于大部分普通机房，但部分特殊机房的软件可能有所不同（更新或者更旧），我们会在当年比赛手册中进行补充说明，并提供合适的安装包的下载链接。

### 基础软件

Windows 10 64bit + Chrome

### 编程软件

#### 编译器 / 解释器

* TDM-GCC 10.3.0
* Oracle JDK 1.8
* Python 3.10 / 3.11

附：由于无法确认的原因，不保证GDB可用性。

#### 编辑器

VSCode，并安装有 C++、Python 插件。

#### IDE

* Dev C++ 5.11
* IDEA Community 2023
* PyCharm Community 2023
* Eclipse 2023

Eclipse似乎自带有oepnJDK17，有需要的同学可以在安装目录下找一找。