import { ComponentsModule } from './components/components.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OverviewModule } from './overview/overview.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ChartsModule,
    FooterModule,
    OverviewModule,
    DashboardModule,
    ComponentsModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class FeaturesModule { }
