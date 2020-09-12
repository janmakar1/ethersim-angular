import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'; 

import { SettingsViewComponent } from './settings-view/settings-view.component';
import { InputViewComponent } from './input-view/input-view.component';
import { OutputViewComponent } from './output-view/output-view.component';
import { EyechartViewComponent } from './eyechart-view/eyechart-view.component';
import { CharacteristicsTableComponent } from './characteristics-table/characteristics-table.component';
import { PreviewChartComponent } from './preview-chart/preview-chart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SettingsViewComponent,
    InputViewComponent,
    OutputViewComponent,
    EyechartViewComponent,
    CharacteristicsTableComponent,
    PreviewChartComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
