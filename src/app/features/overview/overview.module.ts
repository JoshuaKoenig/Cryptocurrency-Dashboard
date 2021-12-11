import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { TableComponent } from './table/table.component';
import { NavbarOverviewComponent } from './navbar-overview/navbar-overview.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
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
    OverviewComponent,
    TableComponent,
    NavbarOverviewComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class OverviewModule { }
