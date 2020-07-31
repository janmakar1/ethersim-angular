import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { InputViewComponent } from './input-view/input-view.component';
import { OutputViewComponent } from './output-view/output-view.component';
import { EyechartViewComponent } from './eyechart-view/eyechart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsViewComponent,
    InputViewComponent,
    OutputViewComponent,
    EyechartViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
