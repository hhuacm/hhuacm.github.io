import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,o as a}from"./app-CJYwJ7EY.js";const p={};function n(r,i){return a(),e("div",null,i[0]||(i[0]=[t('<p>本系列指南旨在帮助新同学快速入门算法竞赛的相关概念，并尝试帮助大家搭建一条目前看来较为可行的学习路线。</p><h2 id="算法竞赛的考察内容" tabindex="-1"><a class="header-anchor" href="#算法竞赛的考察内容"><span>算法竞赛的考察内容</span></a></h2><p>虽然 XCPC 往往被称为 “XXX程序设计竞赛”，但是这里的程序设计一般均指代“利用算法与数据结构来编写程序，尝试在较优时空复杂度下解决某问题”，而非“使用开发框架来为特定方面问题来编写软件工程”。</p><p>因此，不同于工程类竞赛（如软件杯、服务外包等），我们并不需要构建一套大型的软件系统，而是单纯编写一个较小规模的程序（但这并不意味着它很好写）来解决试题中给出的特定问题。从我个人的角度来看，比起“程序设计竞赛”，我觉得它被称呼为“需要编程解决的数学竞赛”更合适一些。</p><p>因此，在算法竞赛中，卓越的代码编写能力和对软件工程知识的了解并非必需（当然，有了更好），最主要的还是对于各类型复杂算法和数据结构的掌握程度、对于各类算法问题的常用建模与trick、以及在高竞技场景下的抗压能力。</p><h2 id="常见算法竞赛" tabindex="-1"><a class="header-anchor" href="#常见算法竞赛"><span>常见算法竞赛</span></a></h2><ul><li><p>ICPC：国际大学生程序设计竞赛，含金量最高的算法竞赛（大学阶段），因为以前由美国计算机协会赞助而得名“ACM”。该项竞赛的赛制为ACM-ICPC赛制。</p><p>对于中国大陆区域，ICPC每年8-9月举办网络赛，随后在10-12月举办若干区域赛（等级一致，没有高低之分），并在次年年初会举办一次EC-Final（东亚区决赛，但实际上基本都是大陆学校，行政等级略高于区域赛），随后在7-8月举办 World Final（全球总决赛，基本需要各个赛站的前五左右，每个学校至多一支队伍）。</p></li><li><p>CCPC：中国大学生程序设计竞赛，除了行政级别、组织单位等不同，其余内容几乎完全一样。（参加、承办的人基本都是同一批）</p></li><li><p>JSCPC：江苏省大学生程序设计竞赛，一般在每年的5-6月，隶属于CCPC系列竞赛中，其成绩会被列入当年CCPC区域赛名额划分的参考依据。</p></li><li><p>蓝桥杯：一项计算机/电子方向的大型竞赛，其中的“软件类”为算法竞赛，采取OI赛制。</p></li><li><p>天梯赛：一项大型竞赛的分项目，采取IOI赛制</p></li><li><p>CSP：CCF专业级软件能力认证，其成绩也是参加CCSP的入场券</p></li><li><p>CCSP：每年11月左右，半个算法竞赛（后面的题更偏向工程），12小时的耐久折磨（</p></li><li><p>百度之星：最为出名的企业承办的大型算法竞赛，采取ACM赛制</p></li><li><p>NOIP/省选/NOI/WC/CTSC/IOI：中国大陆地区信息学奥赛的系列比赛（从前到后分别为省级联赛、省队选拔、全国决赛、冬令营、国家队选拔、全球决赛），仅作了解即可（大学生应该是可以打星参加NOIP的我记得）</p></li></ul><h2 id="校队成员的准备路线-推荐" tabindex="-1"><a class="header-anchor" href="#校队成员的准备路线-推荐"><span>校队成员的准备路线（推荐）</span></a></h2><p>本路线主要针对基础相对薄弱的同学</p><ul><li><p>大一上学期：参加校赛并获得较好成绩</p></li><li><p>大一寒假：参加低年级组集训，对于大部分基础算法有所了解，并掌握较为基础且核心的部分</p></li><li><p>大一下学期：</p><ul><li>继续巩固基础算法，并尝试了解一些常用高级算法（如线段树这些）</li><li>开始打CF，争取能够Div2稳定2题/Div3稳定5题，尝试打到 Rating 1300</li><li>积极参加一些其他学校的公开校赛（新生赛），并报名尝试看看蓝桥杯等</li><li>队内可以尝试找找适合的队友</li></ul></li><li><p>大一暑假：</p><p>如果你还决定继续学，并进入ACM队的话，可以继续向下看。如果你选择退出，那么你的功底也足够应付以后非算法环境下的大部分考核场合了（例如面试算法、保研/考研机试、蓝桥杯非C++组等）</p><ul><li>参加牛客/杭电多校（的部分比赛），感受真实的准XCPC比赛风格及难度</li><li>参加专项训练，继续学习相关知识点</li><li>多校比赛后，能够将铜牌级别题目学习并自行写一遍，并尝试掌握对应知识点</li><li>如果你发现基础不够，继续回头补基础算法（可以尝试看看牛客的新生冬令营）</li><li>继续打CF，争取看看能不能打到1600（Div2稳定3题）</li><li>此外，到了这个阶段，你已经可以尝试去自己写博客，记录自己的学习笔记了（学了哪些知识点和技巧，遇到了什么有趣的好题目之类）</li></ul></li><li><p>大二及以后：</p><p>如果你能坚持到这里，那么基本上你将作为河海大学ACM队的正式成员，代表河海大学参加后续的XCPC系列比赛了。对于日常训练，基本上就是上面的强化（寒假多打一个冬令营，暑假的多校要参加更多/补更多，CF开始尝试冲刺Div2D，并开始学习Div2E，等等）。</p></li></ul><h2 id="学习方向" tabindex="-1"><a class="header-anchor" href="#学习方向"><span>学习方向</span></a></h2><p>本部分的详细内容将在后续章节进行详细阐述。</p><ul><li>语法与代码能力</li><li>基础算法</li><li>高级算法</li><li>思维</li></ul>',13)]))}const s=l(p,[["render",n],["__file","basic.html.vue"]]),C=JSON.parse('{"path":"/learning/beginner/basic.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","icon":"file","description":"本系列指南旨在帮助新同学快速入门算法竞赛的相关概念，并尝试帮助大家搭建一条目前看来较为可行的学习路线。 算法竞赛的考察内容 虽然 XCPC 往往被称为 “XXX程序设计竞赛”，但是这里的程序设计一般均指代“利用算法与数据结构来编写程序，尝试在较优时空复杂度下解决某问题”，而非“使用开发框架来为特定方面问题来编写软件工程”。 因此，不同于工程类竞赛（如软...","head":[["meta",{"property":"og:url","content":"https://hhuacm.github.io/learning/beginner/basic.html"}],["meta",{"property":"og:site_name","content":"HHUACM主页"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"本系列指南旨在帮助新同学快速入门算法竞赛的相关概念，并尝试帮助大家搭建一条目前看来较为可行的学习路线。 算法竞赛的考察内容 虽然 XCPC 往往被称为 “XXX程序设计竞赛”，但是这里的程序设计一般均指代“利用算法与数据结构来编写程序，尝试在较优时空复杂度下解决某问题”，而非“使用开发框架来为特定方面问题来编写软件工程”。 因此，不同于工程类竞赛（如软..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T16:19:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T16:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-23T16:19:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"算法竞赛的考察内容","slug":"算法竞赛的考察内容","link":"#算法竞赛的考察内容","children":[]},{"level":2,"title":"常见算法竞赛","slug":"常见算法竞赛","link":"#常见算法竞赛","children":[]},{"level":2,"title":"校队成员的准备路线（推荐）","slug":"校队成员的准备路线-推荐","link":"#校队成员的准备路线-推荐","children":[]},{"level":2,"title":"学习方向","slug":"学习方向","link":"#学习方向","children":[]}],"git":{"createdTime":1702785701000,"updatedTime":1711210773000,"contributors":[{"name":"ForLight","email":"cyhforlight@qq.com","commits":2}]},"readingTime":{"minutes":4.81,"words":1443},"filePathRelative":"learning/beginner/basic.md","localizedDate":"2023年12月17日","autoDesc":true}');export{s as comp,C as data};
