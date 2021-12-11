import { ChartsComponent } from './charts/charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartsComponent
  ]
})
export class ComponentsModule { }
