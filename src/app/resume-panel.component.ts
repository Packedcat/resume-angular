import { Component, Input, ViewChild, ElementRef } from '@angular/core';
// import marked from 'marked';

@Component({
  selector: 'resume-panel',
  template: `
    <div class="resumePanel">
      <div #resumeContainer class="pre">
        <div [innerHtml]="resume | safeHtml"></div>
        <practice-list [step]="step"></practice-list>
      </div>
    </div>
  `,
})
export class ResumePanelComponent {
  @Input() resume: string;
  @ViewChild('resumeContainer') container: ElementRef;
  step: number;

  constructor() {
    this.step = 0;
  }

  // get result(): string {
  //   return this.enable ? marked(this.resume) : this.resume;
  // }

  nextStep(interval: number = 2500): Promise<void> {
    return new Promise<void> (resolve => {
      this.step += 1;
      setTimeout(() => {
        this.goBottom();
      });
      setTimeout(resolve, interval);
    });
  }

  goBottom(): void {
    this.container.nativeElement.scrollTop = 100000;
  }
};
