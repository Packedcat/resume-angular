import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import marked from 'marked'

@Component({
  selector: 'resume-panel',
  templateUrl: './resume-panel.component.html',
})
export class ResumePanelComponent {
  @Input() resume: string;
  @Input() enable: boolean;
  @ViewChild('resumeContainer') container: ElementRef;

  get result(): string {
    return this.enable ? marked(this.resume) : this.resume
  }

  goBottom(): void {
    this.container.nativeElement.scrollTop = 100000
  }
}
