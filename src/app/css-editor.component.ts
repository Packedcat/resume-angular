import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'css-editor',
  template: `
    <div class="cssEditor">
      <div style="display: hidden" [innerHTML]="styleCode | safeHtml"></div>
      <pre #styleContainer [innerHTML]="highlightedCssCode | safeHtml"></pre>
    </div>
  `,
})
export class CssEditorComponent {
  @Input() cssCode: string;
  @ViewChild('styleContainer') container: ElementRef;

  get highlightedCssCode(): string {
    return Prism.highlight(this.cssCode, Prism.languages.css);
  }

  get styleCode(): string {
    return `<style>${this.cssCode}</style>`;
  }

  goBottom(): void {
    this.container.nativeElement.scrollTop = 100000;
  }
};
