import { Component, Input, Type } from '@angular/core';
import { trigger,state, stagger, animate, style, group, query as q, transition, keyframes, sequence, animateChild } from '@angular/animations';

const query = (s, a, o = { optional: true }) => q(s, a, o);
const practiceTransition = trigger('practiceTransition', [
  transition(':enter', [
    query('.header, .time, .tag, .describe', style({ opacity: 0 })),
    query('.header', animate(300, style({ opacity: 1 }))),
    query('.time', animate(300, style({ opacity: 1 }))),
    query('.describe', stagger(200, [
      style({ transform: 'translateY(100px)' }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ])),
    query('.tag', stagger(200, [
      style({ transform: 'translateX(100px)' }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ])),
  ]),
]);
class PracticeData {
  constructor(public component: Type<any>, public data: any) {}
}

@Component({
  selector: 'practice',
  template: `
    <div [@practiceTransition] class="practice">
      <h3 class="header">{{data.header}}</h3>
      <time *ngIf="data.time" class="time">{{data.time}}</time>
      <ul *ngIf="data.describes.length" class="describes">
        <li *ngFor="let desc of data.describes" class="describe">{{desc}}</li>
      </ul>
      <p *ngIf="data.tags.length" class="tags">
        <span *ngFor="let tag of data.tags" class="tag">{{tag}}</span>
      </p>
    </div>
  `,
  styles: [`
    .practice {
      padding: .5em;
    }
    .time {
      font-size: 0.8rem;
      color: #9e9e9e;
    }
    .tag {
      display: inline-block;
      padding: 0 0.5em;
      margin-right: .5em;
      line-height: 1.5em;
      border-radius: 4px;
      background-color: #f5f2f0;
    }
    .describes {
      margin: .5em 0;
      padding-left: 1.2em;
    }
  `],
  animations: [practiceTransition],
})
export class PracticeComponent {
  @Input() data: object;
}
