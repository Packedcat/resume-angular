import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmlEditorComponent } from './html-editor.component';
import { CssEditorComponent } from './css-editor.component';
import { ResumePanelComponent } from './resume-panel.component';
import { PracticeListComponent } from './practice-list.component';
import { PracticeComponent } from './practice.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent,
    CssEditorComponent,
    ResumePanelComponent,
    PracticeListComponent,
    SafeHtmlPipe,
    PracticeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {};
