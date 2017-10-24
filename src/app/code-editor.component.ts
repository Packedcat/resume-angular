import { Component, Input } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
})
export class CodeEditorComponent {
  @Input() code: string;

  get highlightedCode(): string {
    return Prism.highlight(this.code, Prism.languages.css)
  }

  get codeInStyleTag(): string {
    return `<style>${this.code}</style>`
  }
}
