import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { SettingsViewComponent } from './settings-view/settings-view.component';
import { InputViewComponent } from './input-view/input-view.component';
import { OutputViewComponent } from './output-view/output-view.component';
import { EyechartViewComponent } from './eyechart-view/eyechart-view.component';

const routes: Routes = [
  { path: 'settings', component: SettingsViewComponent },
  { path: 'input', component: InputViewComponent },
  { path: 'output', component: OutputViewComponent },
  { path: 'eyechart', component: EyechartViewComponent },
  { path: '', redirectTo: '/settings', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
