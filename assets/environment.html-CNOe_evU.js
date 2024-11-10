import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as r}from"./app-D9BjN888.js";const o={};function i(l,e){return r(),n("div",null,e[0]||(e[0]=[a('<div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>从入门难度考虑，本文优先推荐了 Windows 下基于安装包的软件安装方式，感兴趣的同学可自行研究基于包管理器的安装方式，如 winget、scoop 等</li><li>如果部分网页无法打开，可在校赛交流群内询问学长学姐（大概率不是网站本身的问题）</li></ul></div><h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统"><span>操作系统</span></a></h2><p>对于大部分使用 Win10 / Win11 的同学，直接略过该节即可。</p><p>对于使用 Mac / Linux 的同学，虽然它们在日常学习上没啥问题，但一些线上比赛的监考系统不一定提供对应操作系统版本（例如马蹄集就没有 Mac 版的监考软件）。</p><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h2><p>使用 <a href="https://www.google.com/intl/zh-CN/chrome/" target="_blank" rel="noopener noreferrer">Chrome</a> / Edge 即可，不推荐使用国产浏览器（它们的内核可能比较老，使得一些 OJ 或其他网站的功能不被支持；此外，一些国外网站可能会被意外拦截）。</p><h2 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器"><span>编辑器</span></a></h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> 是目前全球使用最为广泛的代码编辑器之一，绝大部分算法竞赛中也有提供。个人使用时，可以搭配各式各样的插件，令其如虎添翼（当然，比赛时一般就不会允许安装过多插件了）。</p><p>如果你更喜欢 Sublime Text、Fleet、Notepad++ 甚至 Vim、Emacs 这些，请注意：日常使用无妨，但线下比赛的比赛机未必会配备他们，线上比赛的监考人员也不一定会允许其使用。</p><p>考虑到编辑器会长期使用，伴随你的整个算法竞赛生涯（乃至整个程序员生涯），建议花时间耐心配置好主题界面、代码字体等（IDE同理）。</p><p>这里推荐一个 VSCode 在算法竞赛中较为实用的插件：<a href="https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper" target="_blank" rel="noopener noreferrer">Competitive Programming Helper</a>。</p><h2 id="c-c" tabindex="-1"><a class="header-anchor" href="#c-c"><span>C/C++</span></a></h2><p><a href="https://pc.qq.com/detail/16/detail_163136.html" target="_blank" rel="noopener noreferrer">Dev C++</a> 几乎是所有 Win 系比赛机的必备软件，虽然日常用的不多，但还是建议在电脑上面装一个。</p><p>考虑到 Dev C++ 的内部编译器版本过老，因此一般需要自行安装一个更新的编译器，以支持全新的 C++ 标准（如14/17/20）如 <a href="https://jmeubank.github.io/tdm-gcc/" target="_blank" rel="noopener noreferrer">TDM-GCC</a> 或 <a href="https://www.mingw-w64.org/downloads/" target="_blank" rel="noopener noreferrer">MinGW-w64</a>（新同学建议前者，因为它提供了一键安装包，不需要手动配置环境变量）。</p><p>有同学会喜欢 Jetbrains 推出的 CLion，甚至微软的 VS（不是VSCode，而是完整版的Visual Studio），我个人认为它们对于算法竞赛而言有点重量级了（</p><h2 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h2><p>在很多大公司的 Java 项目中，JDK 版本往往是一个较为重要的参数，同一份代码可能在更新到新版本 JDK 后就完全无法编译。不过对于我们这些算法竞赛参与者，本身语法就很简单，所以就没那么多讲究了，直接选 JDK 最新的 LTS 版本就行（不过尽量还是别用太新的语法特性）。</p><p>Java 的 IDE 分成两派：Eclipse 和 IDEA，我个人推荐后者的<a href="https://www.jetbrains.com/zh-cn/idea/download/" target="_blank" rel="noopener noreferrer">社区版（Community）</a>（如果你打算以后从事 Java 后端开发，可以直接一步到位，找 Jetbrains 开一个学生优惠，用上 Ultimate 版）。</p><p>JDK 往往拥有众多不同的发行版，如 <a href="https://learn.microsoft.com/zh-cn/java/openjdk/download" target="_blank" rel="noopener noreferrer">Microsoft Build of OpenJDK</a>、<a href="https://aws.amazon.com/cn/corretto/" target="_blank" rel="noopener noreferrer">Amazon Corretto</a>、<a href="https://openjdk.org/" target="_blank" rel="noopener noreferrer">OpenJDK</a> 等，各位同学可自行选择（在算法竞赛中，几乎不可能感受到它们在使用上的差异）。</p><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h2><p>同 Java 一样，ACMer 不用过分在意版本号的细微差别，在 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python3</a> 里面挑最大的稳定版（维护状态为 security 的版本）即可。</p><p>一般来说，VSCode + Python 插件 就足以提供舒适的 Python 编写体验了，如果这还觉得不够，那就去安装一个 <a href="https://www.jetbrains.com/zh-cn/pycharm/download/" target="_blank" rel="noopener noreferrer">PyCharm 社区版（Community）</a>吧。</p><h2 id="物理环境" tabindex="-1"><a class="header-anchor" href="#物理环境"><span>物理环境</span></a></h2><p>对于显示器，在宿舍可以配置一个 24 寸的（但是得配备升降支架，除非你能拆掉挡板），实验室无所谓（越大越好，预算充足甚至可以多屏），不过最好在确认个人位置较为固定的情况下再置办。</p><p>键盘鼠标看情况，在不打扰别人的情况下可以搞一个机械键盘（选那种适合码字的）。</p>',25)]))}const c=t(o,[["render",i],["__file","environment.html.vue"]]),s=JSON.parse('{"path":"/learning/beginner/environment.html","title":"开发环境配置","lang":"zh-CN","frontmatter":{"title":"开发环境配置","icon":"file","description":"提示 从入门难度考虑，本文优先推荐了 Windows 下基于安装包的软件安装方式，感兴趣的同学可自行研究基于包管理器的安装方式，如 winget、scoop 等 如果部分网页无法打开，可在校赛交流群内询问学长学姐（大概率不是网站本身的问题） 操作系统 对于大部分使用 Win10 / Win11 的同学，直接略过该节即可。 对于使用 Mac / Linu...","head":[["meta",{"property":"og:url","content":"https://hhuacm.github.io/learning/beginner/environment.html"}],["meta",{"property":"og:site_name","content":"HHUACM主页"}],["meta",{"property":"og:title","content":"开发环境配置"}],["meta",{"property":"og:description","content":"提示 从入门难度考虑，本文优先推荐了 Windows 下基于安装包的软件安装方式，感兴趣的同学可自行研究基于包管理器的安装方式，如 winget、scoop 等 如果部分网页无法打开，可在校赛交流群内询问学长学姐（大概率不是网站本身的问题） 操作系统 对于大部分使用 Win10 / Win11 的同学，直接略过该节即可。 对于使用 Mac / Linu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-19T12:35:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-19T12:35:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发环境配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-19T12:35:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"操作系统","slug":"操作系统","link":"#操作系统","children":[]},{"level":2,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":2,"title":"编辑器","slug":"编辑器","link":"#编辑器","children":[]},{"level":2,"title":"C/C++","slug":"c-c","link":"#c-c","children":[]},{"level":2,"title":"Java","slug":"java","link":"#java","children":[]},{"level":2,"title":"Python","slug":"python","link":"#python","children":[]},{"level":2,"title":"物理环境","slug":"物理环境","link":"#物理环境","children":[]}],"git":{"createdTime":1702785701000,"updatedTime":1729341320000,"contributors":[{"name":"ForLight","email":"cyhforlight@qq.com","commits":4}]},"readingTime":{"minutes":3.67,"words":1102},"filePathRelative":"learning/beginner/environment.md","localizedDate":"2023年12月17日","autoDesc":true}');export{c as comp,s as data};