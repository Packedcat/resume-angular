import { Component, Input } from '@angular/core';
import { trigger, state, stagger, animate, style, group, query as q, transition, keyframes, sequence, animateChild } from '@angular/animations';

import { PracticeDetail } from './practice-detail';

const query = (s, a, o = { optional: true }) => q(s, a, o);
const PracticeData = [
  new PracticeDetail('SCRM系统的维护及其扩展功能开发', '2016.07-2017.04', ['AngularJS', 'Less', 'gulp'], ['提出用户体验优化计划功能引导、快速保存、气泡提示', '实现弹出层管理，统一弹出层层级管理穿透与覆盖']),
  new PracticeDetail('电影广告投放平台的技术选型与项目搭建', '2017.01-2017.04', ['Vue.js', 'vuex', 'webpack'], ['针对前项目遇到的各种问题选择vuex做全局状态管理', '做弹出层的统一管理']),
  new PracticeDetail('开发并发布了一款微信小程序', '2017.01-2017.02', [], []),
];
const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(-100%)' }))
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);
@Component({
  selector: 'practice-list',
  template: `
  <section>
    <h3>微联播</h3>
    <practice [data]="pls[0]" *ngIf="step >= 1"></practice>
    <practice [data]="pls[1]" *ngIf="step >= 2"></practice>
    <practice [data]="pls[2]" *ngIf="step >= 3"></practice>
  </section>
  `,
})
export class PracticeListComponent {
  @Input() step: number;
  pls: PracticeDetail[];

  constructor() {
    this.pls = PracticeData;
  }
}
