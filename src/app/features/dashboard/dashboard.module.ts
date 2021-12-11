import { ComponentsModule } from './../components/components.module';
import { DetailsComponent } from './../details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { FavoriteCoinsComponent } from './favorite-coins/favorite-coins.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'coins/:coinName',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    FavoriteCoinsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule,
    ChartsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
