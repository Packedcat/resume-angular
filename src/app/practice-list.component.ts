import { Component, Input } from '@angular/core';

import { PracticeDetail } from './practice-detail';

const PracticeData = [
  new PracticeDetail('SCRM系统的维护及其扩展功能开发', '2016.07-2017.01', ['AngularJS', 'Less', 'gulp'], ['多个页面共用或派生的代码逻辑抽象为指令与服务', '制作弹出层管理指令，统一管理弹出层，解决弹出层的穿透与覆盖', '在完成收费与版本控制功能后提出用户体验优化计划并完成新用户功能引导、气泡提示等功能']),
  new PracticeDetail('搭建一电影广告投放平台的前端', '2017.01-2017.04', ['Vue.js', 'Vuex', 'webpack'], ['针对不同登录角色切分模块代码提高加载速度', '使用vuex做全局状态管理']),
  new PracticeDetail('开发并发布了一款微信小程序', '2017.01-2017.02', [], []),
  new PracticeDetail('微信资源信息备忘', '2017.05-2017.07', ['Python', 'ItChat', 'Vue.js', 'MySQL', 'Nginx'], ['服务器部署由Python搭建的网络服务并用ItChat登录微信', '将转发至登录微信的信息分类存储至数据库', 'Web前端管理其存储的内容', '解析发送至登录微信的指令获取网络服务'], 'https://github.com/Packedcat/know_yourself_fe', 'http://maverick-cat.me'),
  new PracticeDetail('在线简历', '2017.10', ['Angular', 'TypeScript'], ['刚学的Angular与TypeScript做的简历'], 'https://github.com/Packedcat/resume-angular'),
];

@Component({
  selector: 'practice-list',
  template: `
  <section *ngIf="step !== 0">
    <h2>实习经历</h2>
    <hr />
    <div class="practice-list">
      <h3>微联播</h3>
      <practice [data]="pds[0]" *ngIf="step >= 1"></practice>
      <practice [data]="pds[1]" *ngIf="step >= 2"></practice>
      <practice [data]="pds[2]" *ngIf="step >= 3"></practice>
    </div>
  </section>
  <section *ngIf="step >= 4">
    <h2>个人项目</h2>
    <hr />
    <div class="practice-list">
      <practice [data]="pds[3]" *ngIf="step >= 4"></practice>
      <practice [data]="pds[4]" *ngIf="step >= 5"></practice>
    </div>
  </section>
  `,
  styles: [`
    .practice-list {
      padding: 1em;
    }
  `],
})
export class PracticeListComponent {
  @Input() step: number;
  pds: PracticeDetail[];

  constructor() {
    this.pds = PracticeData;
  }
};
