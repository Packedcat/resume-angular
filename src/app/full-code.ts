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
