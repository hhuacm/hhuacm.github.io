---
# 这是文章的标题
title: 训练思维与技巧
# 这是页面的图标
icon: file
---

<!-- more -->


## 什么是“思维”？

当大家学完各式各样的算法后，肯定会迫不及待的前往OJ开始准备大杀特杀，甚至直扑往年真题开始检验水准，但是最终的结果往往会不太好。但是看到了题解后，却又会疑惑：这算法看起来也不是什么难的啊？为啥就是不会做呢？

打个比方，高考数学的知识点全部是初等数学，但是并不影响压轴题可能全省能够做出来的人都不到四位数；高数期末卷上的内容都是货真价实的高等数学知识点，但是大家做起来几乎没啥压力（认真学了的话）。算法竞赛也是一样：高级知识点的板子题往往也没啥难的，但是普通知识点的巧妙结合却往往能让人写的想要砸键盘。

很遗憾，ICPC的几乎所有题目都是后者的风格：对于历届XCPC的参赛选手，大部分题目都是被其思维难度（建模、转化、各种类型的trick等）所折磨，很少有想出前者后被本身的算法卡住的（很多铜牌题说白了也就是一个简单数据结构或者图算法，但是被出题人在包装后看起来跟个不可做题似的）；甚至存在一些题目，其本身一点不包含算法内容，纯粹就是思维题或者构造题，例如下面的这个题目（来源于2023ICPC济南站）：

> 给定长度为 $n$ 的排列 $\{a_n\}$，你可以进行这样一种“操作”：选定两个位置 $i,j$，倘若 $a_i>a_j$，那么可以将下标 $[i,j]$ 内的所有数从小到大排序。
>
> 要求构造一组方案，在总操作次数不超过 $\lfloor\frac{n}{2}\rfloor$ 的情况下，将整个排列从小到大排序好。

本题作为一个区域赛的半签到题，一点没有算法和数据结构的部分（可能除了排序吧），想出思维点就等于写出该题。

因此，在算法竞赛的训练中，我认为“思维”的训练是不可或缺的一环，甚至说是训练的核心。

但是，在大部分知识点学习中，选手接触到的题目的思维难度并不会太高（不然就不太适合作为学习知识点的例题了），且选手在写题的时候会自然而然的向着学着的知识点的方向思考，这与正式比赛的情况并不一致。因此，我们需要参加较为正式的比赛，这样才能高效率的训练“思维”，加强算法知识点的灵活应用。

## CodeForces简介

CodeForces 是一个全球知名的算法练习网站，而它的题目就往往以“高技巧、高思维”所出名，且难度与知识点范围极广，无论什么级别的选手都能在上面找到适合自己的题目去练习。在掌握了算法基础知识后，我强烈建议大家将日常刷题训练的重心转移到他上面来（学知识点还是该用啥用啥）。

CF上比赛的赛制主要分为ACM赛制和CF赛制，前者主要适用于教育场，而后者则主要用于Div系列比赛。CF赛制较为特殊，我将会从以下两点来简单介绍（以下内容仅从宏观角度来阐述其机制，在一些细节上可能有所出入，具体以官方信息为准）：

1. 分数计算机制

   每道题目有着不同的分值（例如最简单的A题仅有500分，而中档的C或D题就有1500甚至2000分），而题目的分值还会随着通过该题目的人数的增加（可能还有时间的流逝）不断减少。如果你在本题进行了一次错误的提交（它没有部分分之说，这点和ACM赛制一致），那么系统会在本题处给你扣掉一定的分数（例如50分），当你最终AC此题的时候将其计算进去。

   例如说，C题的初始分数为1500分，而你在比赛开始半小时后才成功AC它（此时它的分数降到了1200分），且中途WA了两发，那么你的最终分数为 $1200-2*50=1100$。

2. Hack机制

   比赛期间，你和其他大约几十名选手会被分入一个Room中。当你AC某个题目后，你可以选择将自己的题目“锁定”，而当你锁定了自己的题目后，你将无法对该题目进行再次提交，且能够看到本Room中其他选手关于本题的提交。那么，看别人的代码有什么用呢？我不能提交已经AC的题又有什么意义呢？

   这就是Hack机制了：当你发现某人的代码似乎存在一些漏洞时（例如使用了不恰当的贪心、常数过大、边界条件没有处理好等），你可以构造一组数据并上传，随后系统会比较他的代码和官方标准程序对于该数据所得到的运行结果，倘若不一致，那么他的这道题目将从AC状态转为Hacked状态（也就是没通过），他在失去这题的分数的时候，你也将会得到一定的分数奖励（这组成功的Hack数据甚至会被加入本题目的标准数据集中，但是不清楚是立刻对本题所有代码进行重测，还是赛后再重测一遍）；相反，如果你Hack失败，你会失去一定的分数，而他则因“成功抵御Hack”而得到一定的分数。

   一般来说，大部分普通选手只是将该机制认为“获得加强数据的途径”，自己一般不在比赛中利用该机制对别人进行Hack。

   也正是如此，请不要在比赛中对AC的题目进行重复提交（除非你发现之前的AC代码存在重要漏洞），因为系统会以后者作为你在本题的最终分数

## CF rating

当你在CF上不断参加比赛并获得名次的时候，系统会根据你的发挥和比赛的难度，对你的rating进行调整。

rating可以理解为CF的等级分（并不是具体的排名次序），选手的rating往往是在比赛奖项外最能够证明一名ACMer能力的依据。一般来说，CF 1200分以上就可以认为是一名“算法竞赛入门选手”，而队伍中拥有2-3名CF 1600分选手时，就拥有了争取ICPC区域赛铜牌所需的思维能力（银牌1900，金牌2200）。

此外，CF的所有题目一般也会有一个rating评分，代表一般该rating的选手能够解决它

## CF的日常比赛

CodeForces的日常比赛分为：Div4、Div3、Div2、Educational Round（教育场）和Div1：

* Div4，Div3

  这两类比赛是针对算法初学者的，难度较为简单，基本不太涉及什么困难算法，能力薄弱的同学可以多打打这两个比赛（低于1200的同学可以打打4，低于1500的可以多打打3）

* Div2，教育场

  对于大部分同学来说，Div2和教育场（以下均称为Div2）的难度最为适宜，是适合日常训练的主力比赛。一般认为，Div2稳定3题可以争取达到1600分，稳定4题就可以争取达到1900分。当你稳定N题的时候，一般赛后还需要补一下第N+1题

* Div1

  Div1难度最高，与Div2比较重合，一般Div1的A就是Div2的C，以此类推，用完了Div2的题后就后面自补一些更难的

CodeForces的比赛时间有点阴间（大部分都是晚上10点35到12点35这样），大家根据睡眠情况和自身健康来合理选择是现场打还是去参加VP（赛后模拟赛）。

## 牛客的日常比赛

牛客一般也会定期组织比赛，一般分为：牛客小白月赛（对标Div3），牛客训练赛（对标Div2）和牛客挑战赛（对标Div1）。虽然其影响力不如CF，但其依然是目前国内最为流行的ACM定期比赛，十分值得一做（毕竟时间阳间的多）

顺便提一句，牛客的这个rating一般看不出啥来，不算很适合评估选手水准。