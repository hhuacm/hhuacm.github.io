import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as r,o as n}from"./app-D5_VDbd3.js";const i={};function o(l,e){return n(),a("div",null,e[0]||(e[0]=[r('<p>算法竞赛中的代码一般行数较短（银牌及以下难度的题目，极少有超过 200 行的，150 行都没多少，里面还有一堆板子），且无需后续维护，因此我们仅需要掌握语言中的面向过程部分即可，对于大部分高级特性仅需简单了解即可，无需掌握很深（例如 C++ 的各类指针，Java 的面向对象高级特性与反射等）。</p><p>考虑到各语言的标准库中往往为我们准备了很多合适的数据结构与算法，因此务必对此要熟悉掌握（例如 C++ 的 STL 库）。此外，个人不建议在语言中使用过多的新标准特性，避免队友不认识 / 比赛编译器不兼容。</p><p>除非是蓝桥杯这种限定语言类型的比赛，否则建议大家统一使用 C++ 进行编程（速度快、社区交流方便）。当然，对于特定题目，使用 Java 和 Python 也未尝不可（如签到题、依赖高精度的数学题等）。</p><p>这里有一份各语言的速成教程，大家可以在下面的部分仔细学完后，回头快速阅览一下，加深印象：<a href="https://oi-wiki.org/lang/" target="_blank" rel="noopener noreferrer">OI Wiki - 语言基础教程</a>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>大部分OJ的编译器/解释器并非最新，且CE并不保证一定不计入罚时，因此在学习的时候不要过分依赖于新标准的语法特性，在比赛时也请务必了解本次比赛的评测环境。</p></div><h2 id="c-c-核心" tabindex="-1"><a class="header-anchor" href="#c-c-核心"><span>C/C++（核心）</span></a></h2><p>由于其C++一直被认为是算法竞赛中的标准使用语言，因此对C/C++的掌握是重中之重。</p><ul><li><p>《C Primer Plus》（第五版，第六版均可）</p><p>一本相当出色的C语言入门书籍，能够帮助你打下坚实的编程基础。</p></li><li><p><a href="https://www.bilibili.com/video/BV1dr4y1n7vA/" target="_blank" rel="noopener noreferrer">翁恺 C 语言基础入门</a></p><p>一个据说非常出名的 C 语言网课</p></li><li><p><a href="https://ac.nowcoder.com/courses/cover/live/678" target="_blank" rel="noopener noreferrer">牛客语法入门班</a></p><p>牛客出品的语法网课，完全面向算法竞赛选手，由邓丝雨老师授课</p></li><li><p><a href="https://www.acwing.com/activity/content/21/" target="_blank" rel="noopener noreferrer">Acwing 语法基础课</a></p><p>面向算法竞赛选手</p></li></ul><p>前两个书籍/网课都没有涉及 C++ 的内容，因为对于我们 ACMer 来说，比赛中使用的 C++ 在很大程度上可以概括为“C with STL”，即 C 的语法搭配上 C++ 的标准库（可能还有一些新的语法特性）。因此，大部分同学在学好 C 后就可以直接进入算法学习部分，对于 C++ 的内容在阅读书上/网课上的示例代码，基本上就能掌握的七七八八了。如果想要系统性的回顾一下，可以看一下上面提到的 OI Wiki 语言基础教程。</p><p>在大部分比赛中，C++ 都能够支持到 C++11 标准（也就是支持 auto、增强 for 和 Lambda 这些语法特性的那代），更新的语法标准不保证提供。根据了解，蓝桥杯支持到 C++ 11，而 ICPC 等比赛基本可以支持到 14 甚至 17。</p><h2 id="java-可选" tabindex="-1"><a class="header-anchor" href="#java-可选"><span>Java（可选）</span></a></h2><p>在算法竞赛中，除了大整数类，Java没有体现出其相比于C/C++的独特优势（而且还慢）。如果你担心碰到需要手写高精度的题（现在很少了），可以考虑一下它。</p><ul><li><p><a href="https://how2j.cn/" target="_blank" rel="noopener noreferrer">How2J 的 Java 教程</a></p><p>只要读完基础部分，再去额外学一下大整数类的使用，基本上就够用了</p></li></ul><p>目前大部分比赛的评测机的 JDK 版本为 JDK 8 或 17，建议语法遵循前者。</p><h2 id="python-可选" tabindex="-1"><a class="header-anchor" href="#python-可选"><span>Python（可选）</span></a></h2><p>Python 语法简单，易于上手，但是其运行效率太慢，在绝大部分算法题中难以忍受（很多数据结构题，Python 写的正解未必跑的比 C++ 的暴力快）。不过，考虑到它的高编写效率和支持高精度的特性，如果你遇到了简单的签到题或对复杂度不敏感的纯数学题，可以考虑用Python加快解题效率。</p><ul><li><p><a href="https://github.com/luogu-dev/cyaron/wiki/Python-30%E5%88%86%E9%92%9F%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97" target="_blank" rel="noopener noreferrer">Python-30分钟入门指南</a></p><p>本来是 Luogu 给自家的数据生成器配套的 Python 教程，不过熟悉语法也挺合适</p></li><li><p><a href="https://www.runoob.com/python/python-tutorial.html" target="_blank" rel="noopener noreferrer">Python 菜鸟教程</a></p></li></ul><p>目前大部分比赛的评测机的 Python 版本为 Python 3.7，建议语法学习以此为标准。</p><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范"><span>代码规范</span></a></h2><p>虽然算法竞赛主要考察的是对于算法与数据结构的理解与运用，对于软件工程方向的要求并没有那么大，但归根到底，算法竞赛依然是一个需要编写代码的比赛，选手的代码的实现能力依然是成功 AC 的重要支柱。而且大学的 ACM 相关竞赛往往是多人组队，那么代码的可读性与可维护性也会对比赛发挥起到至关重要的作用。关于这些，我推荐一篇文章：<a href="https://mp.weixin.qq.com/s/G-aOA9qcPuJXQFT6slx0Fw" target="_blank" rel="noopener noreferrer">【经验】阮行止：浅谈代码能力 &amp; 如何更轻松地写代码</a>。</p><p>不同同学对于“优雅”的定义各不相同，甚至在一些具体细节上完全相反（例如写不写万能头，要不要用<code>using namespace std;</code>等等），很难做到完全一致。我个人建议是：</p><ul><li><p>同队伍的同学，应该努力让代码风格保持一致</p></li><li><p>日常多阅读其他选手的代码，学习其代码风格方面好的地方</p></li><li><p>多使用一些代码格式化工具，将自己的代码进行一键排版，比较前后的差异，并自行选择性学习</p><p>这里推荐一下 <a href="loj.ac">LOJ</a> 的默认格式化配置（<a href="https://zh-google-styleguide.readthedocs.io/en/latest/contents/" target="_blank" rel="noopener noreferrer">Google风格</a>），基于 clang-format 实现，具体参数如下（可以导入VSCode配置中）：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;clang-format.style&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;{BasedOnStyle: Google, IndentWidth: 4, AccessModifierOffset: -4, SortIncludes: false, AllowShortIfStatementsOnASingleLine: false, ColumnLimit: 110, Cpp11BracedListStyle: false }&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="语法练习" tabindex="-1"><a class="header-anchor" href="#语法练习"><span>语法练习</span></a></h2><p>如果对于自身语法的掌握不甚熟悉，那么可以前往 <a href="https://www.luogu.com.cn/" target="_blank" rel="noopener noreferrer">洛谷</a> 的题单处，将“入门”打头的题单都写一遍（AC率达到60%就可以了）。</p><p>第一遍的同学建议写扎实一些，后面新语言可以随意一点。</p><p>对于 STL 库内的各种数据结构/算法的使用，可以在下面的对应算法题中加以练习，检查自己是否掌握了他们的用法。</p>',26)]))}const h=t(i,[["render",o],["__file","grammar.html.vue"]]),c=JSON.parse('{"path":"/learning/beginner/grammar.html","title":"编程语法入门","lang":"zh-CN","frontmatter":{"title":"编程语法入门","icon":"file","description":"算法竞赛中的代码一般行数较短（银牌及以下难度的题目，极少有超过 200 行的，150 行都没多少，里面还有一堆板子），且无需后续维护，因此我们仅需要掌握语言中的面向过程部分即可，对于大部分高级特性仅需简单了解即可，无需掌握很深（例如 C++ 的各类指针，Java 的面向对象高级特性与反射等）。 考虑到各语言的标准库中往往为我们准备了很多合适的数据结构与...","head":[["meta",{"property":"og:url","content":"https://hhuacm.github.io/learning/beginner/grammar.html"}],["meta",{"property":"og:site_name","content":"HHUACM主页"}],["meta",{"property":"og:title","content":"编程语法入门"}],["meta",{"property":"og:description","content":"算法竞赛中的代码一般行数较短（银牌及以下难度的题目，极少有超过 200 行的，150 行都没多少，里面还有一堆板子），且无需后续维护，因此我们仅需要掌握语言中的面向过程部分即可，对于大部分高级特性仅需简单了解即可，无需掌握很深（例如 C++ 的各类指针，Java 的面向对象高级特性与反射等）。 考虑到各语言的标准库中往往为我们准备了很多合适的数据结构与..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T04:38:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T04:38:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编程语法入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-15T04:38:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"C/C++（核心）","slug":"c-c-核心","link":"#c-c-核心","children":[]},{"level":2,"title":"Java（可选）","slug":"java-可选","link":"#java-可选","children":[]},{"level":2,"title":"Python（可选）","slug":"python-可选","link":"#python-可选","children":[]},{"level":2,"title":"代码规范","slug":"代码规范","link":"#代码规范","children":[]},{"level":2,"title":"语法练习","slug":"语法练习","link":"#语法练习","children":[]}],"git":{"createdTime":1702785701000,"updatedTime":1726375093000,"contributors":[{"name":"ForLight","email":"cyhforlight@qq.com","commits":2}]},"readingTime":{"minutes":5.51,"words":1653},"filePathRelative":"learning/beginner/grammar.md","localizedDate":"2023年12月17日","autoDesc":true}');export{h as comp,c as data};