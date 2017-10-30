import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ResumePanelComponent } from './resume-panel.component';
import { HtmlEditorComponent } from './html-editor.component';
import { CssEditorComponent } from './css-editor.component';
import { fullResume } from './full-resume';
import { fullCode } from './full-code';

enum codeType { html, css }

@Component({
  selector: 'app-root',
  template: `
    <div>
      <css-editor [cssCode]="cssCode"></css-editor>
      <html-editor [htmlCode]="htmlCode"></html-editor>
      <resume-panel [resume]="currentResume"></resume-panel>
    </div>
  `,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HtmlEditorComponent)
  private templateContainer: HtmlEditorComponent;
  @ViewChild(CssEditorComponent)
  private styleContainer: CssEditorComponent;
  @ViewChild(ResumePanelComponent)
  private resumeContainer: ResumePanelComponent;

  htmlCode: string;
  cssCode: string;
  currentCode: string;
  currentResume: string;
  fullCode: string[];

  constructor(private cdr: ChangeDetectorRef) {
    this.htmlCode = '';
    this.cssCode = '';
    this.currentCode = '';
    this.currentResume = '';
    this.fullCode = fullCode;
  }

  async start(): Promise<void> {
    await this.progressivelyShowCode(0, codeType.css);
    await this.progressivelyShowCode(1, codeType.html, true);
    await this.progressivelyShowCode(2, codeType.css);
    await this.progressivelyShowCode(3, codeType.html);
    await this.resumeContainer.nextStep();
    await this.resumeContainer.nextStep();
    await this.resumeContainer.nextStep();
  }

  progressivelyShowCode(n: number, addType: codeType, needAppend = false, interval = 0): Promise<void> {
    return new Promise<void> (resolve => {
      const showCode = () => {
        const code = this.fullCode[n];
        const totalLength = this.fullCode.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0);
        const prefixLength = totalLength - code.length;
        if (this.currentCode.length < totalLength) {
          const pos = this.currentCode.length - prefixLength;
          const char = code.substring(pos, pos + 1) || ' ';
          this.currentCode += char;
          switch (addType) {
            case codeType.html:
              this.htmlCode += char;
              break;
            case codeType.css:
              this.cssCode += char;
              break;
            default:
              break;
          }
          if (needAppend) {
            this.currentResume += char;
          }
          if (code.substring(pos - 1, pos) === '\n') {
            switch (addType) {
              case codeType.html:
                setTimeout(() => this.templateContainer.goBottom());
                if (needAppend) {
                  setTimeout(() => this.resumeContainer.goBottom());
                }
                break;
              case codeType.css:
                setTimeout(() => this.styleContainer.goBottom());
                break;
              default:
                break;
            }
          }
          setTimeout(showCode, interval);
        } else {
          resolve();
        }
      }
      showCode();
    });
  }

  ngOnInit(): void {
    this.cdr.detach();
  }

  ngAfterViewInit(): void {
    this.start();
    setTimeout(() => this.cdr.reattach());
  }
}
