import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './code-editor.component';
import { ResumePanelComponent } from './resume-panel.component';
import { SafeHtmlPipe } from './safe-html.pipe';

// enableProdMode()

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    ResumePanelComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
