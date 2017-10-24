import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ResumePanelComponent } from './resume-panel.component';
import { CodeEditorComponent } from './code-editor.component';
import { fullResume } from './full-resume';
import { fullCode } from './full-code';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild(CodeEditorComponent)
  private codeComponent: CodeEditorComponent;
  @ViewChild(ResumePanelComponent)
  private resumeComponent: ResumePanelComponent;

  interval = 10;
  enableHtml = false;
  currentCode = '';
  fullCode = fullCode;
  currentResume = '';
  fullResume = fullResume;

  async makeResume(): Promise<void> {
    await this.progressivelyShowCode(0)
    await this.progressivelyShowResume()
    await this.progressivelyShowCode(1)
    await this.showHtml()
    await this.progressivelyShowCode(2)
  }

  showHtml(): Promise<void> {
    return new Promise<void>(resolve => {
      this.enableHtml = true
      resolve()
    })
  }

  progressivelyShowCode(n: number): Promise<void> {
    return new Promise<void>(resolve => {
      let interval = this.interval
      let showStyle = (async function() {
        let code = this.fullCode[n]
        let length = this.fullCode.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
        let prefixLength = length - code.length
        if (this.currentCode.length < length) {
          let l = this.currentCode.length - prefixLength
          let char = code.substring(l, l + 1) || ' '
          this.currentCode += char
          if (code.substring(l - 1, l) === '\n') {
            setTimeout(() => this.codeComponent.goBottom(), 0);
          }
          setTimeout(showStyle, interval)
        } else {
          resolve()
        }
      }).bind(this)
      showStyle()
    })
  }

  progressivelyShowResume(): Promise<void> {
    return new Promise<void>(resolve => {
      let length = this.fullResume.length
      let interval = this.interval
      let showResume = () => {
        if (this.currentResume.length < length) {
          this.currentResume = this.fullResume.substring(0, this.currentResume.length + 1)
          let lastChar = this.currentResume[this.currentResume.length - 1]
          let prevChar = this.currentResume[this.currentResume.length - 2]
          if (prevChar === '\n') {
            setTimeout(() => this.resumeComponent.goBottom(), 0);
          }
          setTimeout(showResume, interval)
        } else {
          resolve()
        }
      }
      showResume()
    })
  }

  ngOnInit() {
    this.cdr.detach();
  }

  ngAfterViewInit(): void {
    this.makeResume()
    setTimeout(() => this.cdr.reattach());
  }
}
