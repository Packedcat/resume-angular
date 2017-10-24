import { Component } from '@angular/core';
import { fullCode } from './full-code';
import { fullResume } from './full-resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interval = 40;
  enableHtml = false;
  currentCode = fullCode[0];
  fullCode = fullCode;
  currentResume = '';
  fullResume = fullResume;

  // async makeResume(): Promise<void> {
  //   await this.progressivelyShowCode(0)
  //   // await this.progressivelyShowResume()
  //   // await this.progressivelyShowCode(1)
  //   await this.showHtml()
  //   // await this.progressivelyShowCode(2)
  // }

  // showHtml(): Promise<any> {
  //   return new Promise(resolve => {
  //     this.enableHtml = true
  //     resolve()
  //   })
  // }

  // progressivelyShowCode(n: number): Promise<any> {
  //   return new Promise(resolve => {
  //     let interval = this.interval
  //     let showStyle = (async function() {
  //       let code = this.fullCode[n]
  //       let length = this.fullCode.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
  //       let prefixLength = length - code.length
  //       if (this.currentCode.length < length) {
  //         let l = this.currentCode.length - prefixLength
  //         let char = code.substring(l, l + 1) || ' '
  //         this.currentCode += char
  //         // if (code.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
  //         //   this.$nextTick(() => {
  //         //     this.$refs.styleEditor.goBottom()
  //         //   })
  //         // }
  //         setTimeout(showStyle, interval)
  //       } else {
  //         resolve()
  //       }
  //     }).bind(this)
  //     showStyle()
  //   })
  // }

  // progressivelyShowResume(): Promise < any > {
  //   return new Promise((resolve, reject) => {
  //     let length = this.fullResume.length
  //     let interval = this.interval
  //     let showResume = () => {
  //       if (this.currentResume.length < length) {
  //         this.currentResume = this.fullResume.substring(0, this.currentResume.length + 1)
  //         let lastChar = this.currentResume[this.currentResume.length - 1]
  //         let prevChar = this.currentResume[this.currentResume.length - 2]
  //         if (prevChar === '\n' && this.$refs.resumeEditor) {
  //           this.$nextTick(() => this.$refs.resumeEditor.goBottom())
  //         }
  //         setTimeout(showResume, interval)
  //       } else {
  //         resolve()
  //       }
  //     }
  //     showResume()
  //   })
  // }
}
