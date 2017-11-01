import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'html-editor',
  template: `
    <div class="htmlEditor">
      <pre #templateContainer [innerHTML]="highlightedHtmlCode | safeHtml"></pre>
    </div>
  `,
})
export class HtmlEditorComponent {
  @Input() htmlCode: string;
  @ViewChild('templateContainer') container: ElementRef;

  get highlightedHtmlCode(): string {
    return Prism.highlight(this.htmlCode, Prism.languages.html);
  }

  goBottom(): void {
    this.container.nativeElement.scrollTop = 100000;
  }
};
