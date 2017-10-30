export const fullCode: string[] = [`/* 开始撸代码*/
* { transition: all .3s; }

.cssEditor {
  position: relative;
  margin: 2vh 2vw;
  width: 47vw;
  height: 47vh;
  border: 1px solid #f5f2f0;
  border-radius: 3px;
}

pre {
  padding: .5em;
  height: 100%;
  overflow: auto;
}

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
  margin: 2vh 2vw;
  width: 47vw;
  height: 47vh;
  border: 1px solid #f5f2f0;
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

.resumePanel {
  position: fixed;
  top: 0;
  right: 0;
  margin: 2vh 2vw;
  padding: .5em;
  width: 47vw;
  height: 96vh;
  overflow: auto;
  border: 1px solid #f5f2f0;
  border-radius: 3px;
}
`, `<!-- 用代码做自我介绍 -->
<section>
  <h2>基本信息</h2>
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
  <h2>技能</h2>
  <form>
    <label for="javascript">JavaScript</label>
    <progress value="70" max="100"></progress>
    <label for="angular">Angular</label>
    <progress value="70" max="100"></progress>
    <label for="vuejs">Vue.js</label>
    <progress value="70" max="100"></progress>
    <label for="nodejs">Node.js</label>
    <progress value="70" max="100"></progress>
    <label for="python">Python</label>
    <progress value="70" max="100"></progress>
  </form>
</section>

`, `/* 美化 */
label {
  font-size: 0.8rem;
  color: #9e9e9e;
}

dd, dt { display: inline; }

dt::after { content: ": "; }

progress {
  width: 10em;
  height: 6px;
  border: none;
  border-radius: 4px;
  background-color:#acece6;
  color: #26a69a;
}

progress::-moz-progress-bar { background: #26a69a; }
progress::-webkit-progress-bar { background: #acece6; }
progress::-webkit-progress-value  { background: #26a69a; }

progress::-webkit-progress-inner-element { border-radius: 4px; }
progress::-webkit-progress-value { border-radius: 4px 0 0 4px; }
progress::-webkit-progress-bar { border-radius: 4px; }
`,`
<!-- 啃了AngularJs找了份实习用指令做功能开发 -->
<angular-directive ng-if="isTrainee"></angular-directive>
`]

// export const fullCode: string[] = [`/*
// * Inspired by http://strml.net/
// * 大家好，我是方方
// * 二月了，好多公司都在招聘，你是不是也在准备简历呀。
// * 说做就做，我也来写一份简历！
// */

// /* 首先给所有元素加上过渡效果 */
// * {
//   transition: all .3s;
// }
// /* 白色背景太单调了，我们来点背景 */
// html {
//   color: rgb(222,222,222); background: rgb(0,43,54);
// }
// /* 文字离边框太近了 */
// .styleEditor {
//   padding: .5em;
//   border: 1px solid;
//   margin: .5em;
//   overflow: auto;
//   width: 45vw; height: 90vh;
// }
// /* 代码高亮 */
// .token.selector{ color: rgb(133,153,0); }
// .token.property{ color: rgb(187,137,0); }
// .token.punctuation{ color: yellow; }
// .token.function{ color: rgb(42,161,152); }

// /* 加点 3D 效果呗 */
// html{
//   perspective: 1000px;
// }
// .styleEditor {
//   position: fixed; left: 0; top: 0;
//   -webkit-transition: none;
//   transition: none;
//   -webkit-transform: rotateY(10deg) translateZ(-100px) ;
//           transform: rotateY(10deg) translateZ(-100px) ;
// }

// /* 接下来我给自己准备一个编辑器 */
// .resumeEditor{
//   position: fixed; right: 0; top: 0;
//   padding: .5em;  margin: .5em;
//   width: 48vw; height: 90vh;
//   border: 1px solid;
//   background: white; color: #222;
//   overflow: auto;
// }
// /* 好了，我开始写简历了 */


// `, `
// /* 这个简历好像差点什么
//  * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
//  * 简单，用开源工具翻译成 HTML 就行了
//  */
// `, `
// /* 再对 HTML 加点样式 */
// .resumeEditor{
//   padding: 2em;
// }
// .resumeEditor h2{
//   display: inline-block;
//   border-bottom: 1px solid;
//   margin: 1em 0 .5em;
// }
// .resumeEditor ul,.resumeEditor ol{
//   list-style: none;
// }
// .resumeEditor ul> li::before{
//   content: '•';
//   margin-right: .5em;
// }
// .resumeEditor ol {
//   counter-reset: section;
// }
// .resumeEditor ol li::before {
//   counter-increment: section;
//   content: counters(section, ".") " ";
//   margin-right: .5em;
// }
// .resumeEditor blockquote {
//   margin: 1em;
//   padding: .5em;
//   background: #ddd;
// }`];
