import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
})
export class CodeEditorComponent {
  @Input() code: string;
  @ViewChild('codeContainer') container: ElementRef;

  get highlightedCode(): string {
    return Prism.highlight(this.code, Prism.languages.css)
  }

  get codeInStyleTag(): string {
    return `<style>${this.code}</style>`
  }

  goBottom(): void {
    this.container.nativeElement.scrollTop = 100000
  }
}
