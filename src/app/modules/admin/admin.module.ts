import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPortfolioComponent } from './pages/add-portfolio/add-portfolio.component';


@NgModule({
  declarations: [
    AddPortfolioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
