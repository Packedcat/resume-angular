export const fullCode: string[] = [`/* 你好，我是王曦超，我想用代码讲述我的历程 */
* { transition: all .3s; }

/* 首先得准备个编辑器 */
.cssEditor {
  position: relative;
  border: 1px solid #f5f2f0;
  margin: 2vh 2vw;
  width: 47vw;
  height: 47vh;
  border-radius: 3px;
}

pre, .pre {
  padding: .5em;
  height: 100%;
  overflow: auto;
}

/* 给编辑器加个标签 */
.cssEditor::after {
  content: "style";
  position: absolute;
  right: 1em;
  bottom: 0;
  padding: 0 .5em;
  line-height: 1.5em;
  background-color: #f5f2f0;
  border-radius: .5em .5em 0 0;
}

.htmlEditor {
  position: relative;
  border: 1px solid #f5f2f0;
  margin: 2vh 2vw;
  width: 47vw;
  height: 47vh;
  border-radius: 3px;
}

.htmlEditor::after {
  content: "template";
  position: absolute;
  right: 1em;
  bottom: 0;
  padding: 0 .5em;
  line-height: 1.5em;
  background-color: #f5f2f0;
  border-radius: .5em .5em 0 0;
}

/* 准备块板子来画简历 */
.resumePanel {
  border: 1px solid #f5f2f0;
  position: fixed;
  top: 0;
  right: 0;
  margin: 2vh 2vw;
  width: 47vw;
  height: 96vh;
  border-radius: 3px;
}

.resumePanel::after {
  content: "resume";
  position: absolute;
  right: 1em;
  bottom: 0;
  padding: 0 .5em;
  line-height: 1.5em;
  background-color: #f5f2f0;
  border-radius: .5em .5em 0 0;
}
/* 准备完毕，开始编写 */
`, `<!--
  最开始的时候，确实也是用这种文档的思想去写页面
  总想用最符合语意的标签去显示内容
-->
<section>
  <h2>基本属性</h2>
  <hr />
  <dl>
    <div>
      <dt>姓名</dt>
      <dd>王曦超</dd>
    </div>
    <div>
      <dt>性别</dt>
      <dd>男</dd>
    </div>
    <div>
      <dt>年龄</dt>
      <dd>22</dd>
    </div>
    <div>
      <dt>学历</dt>
      <dd>本科</dd>
    </div>
    <div>
      <dt>学校</dt>
      <dd>广东海洋大学</dd>
    </div>
    <div>
      <dt>专业</dt>
      <dd>计算机科学与技术</dd>
    </div>
    <div>
      <dt>工作年限</dt>
      <dd>一年工作经验</dd>
    </div>
    <div>
      <dt>联系方式</dt>
      <dd><a href="tel:+8617688734213">+86 17688734213</a></dd>
    </div>
    <div>
      <dt>邮箱</dt>
      <dd><a href="mailto:maverick.cattus@gmail.com">maverick.cattus@gmail.com</a></dd>
    </div>
    <div>
      <dt>GitHub</dt>
      <dd><a target="_blank" href="https://github.com/Packedcat">https://github.com/Packedcat</a></dd>
    </div>
  </dl>
</section>
<section>
  <h2>技能加点</h2>
  <hr />
  <form>
    <div>
      <label>JavaScript</label>
      <progress value="0.8"></progress>
    </div>
    <div>
      <label>AngularJS</label>
      <progress value="0.75"></progress>
    </div>
    <div>
      <label>Vue.js</label>
      <progress value="0.7"></progress>
    </div>
    <div>
      <label>Python</label>
      <progress value="0.6"></progress>
    </div>
    <div>
      <label>Node.js</label>
      <progress value="0.5"></progress>
    </div>
  </form>
</section>
`, `/* 端的工作修整边幅总是必修课 */
dd, dt {
  display: inline;
  line-height: 1.5em;
}

dt::after { content: ": "; }

progress {
  width: 15em;
  height: 8px;
  border: none;
  border-radius: 8px;
  background-color: #eee;
  color: #007bff;
  vertical-align: middle;
}

progress::-moz-progress-bar { background: #007bff; }
progress::-webkit-progress-bar { background: #eee; }
progress::-webkit-progress-value  { background: #007bff; }

progress::-webkit-progress-inner-element { border-radius: 8px; }
progress::-webkit-progress-value { border-radius: 8px 0 0 8px; }
progress::-webkit-progress-bar { border-radius: 8px; }

label {
  display: inline-block;
  font-size: 0.8rem;
  min-width: 5em;
}

dl, form {
  padding: .5em;
}
`,`<!--
  最开始的实践是一个用AngularJS写的的新闻发布网站
  刚好最开始的实习也是AngularJS
  Web前端的工作却不仅仅只有前端的知识
  性能优化，Git Flow工作流，持续集成与部署
-->
<angular-directive ng-if="isTrainee"></angular-directive>
`, `<!--
  踏着微信小程序的浪潮发布了一款小程序
  随后备受信任地扛起了新项目搭建的任务
  总结着AngularJS项目遇到的问题，感叹着技术的日新月异
-->
<vue-component v-if="isTrainee"></vue-component>
`, `<!--
  不懂服务器的前端不是一个好的UI
  半路出家的野生前端把HTTP权威指南当历史书看
  学起了Python，写起了爬虫，搭起了服务
  接触ItChat库后决定挑战做一个工具
-->
`]
