import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialUiModule } from '@app/shared/modules';
import { AdminPortfolioDetailComponent } from '@app/modules/admin/pages';
import { AdminComponent } from '@app/modules/admin';
import { 
  AdminConfirmDialogComponent,
  AdminCreatePortfolioComponent,
  AdminPortfolioListComponent,
  AdminSidebarComponent } from '@app/modules/admin/components';



@NgModule({
  declarations: [
    AdminComponent,
    AdminCreatePortfolioComponent,
    AdminPortfolioListComponent,
    AdminPortfolioDetailComponent,
    AdminSidebarComponent,
    AdminConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialUiModule,
    FormsModule

  ]
})
export class AdminModule { }
