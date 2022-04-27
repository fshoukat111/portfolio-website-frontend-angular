import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { MaterialUiModule } from '@app/shared/modules';
import { 
  AdminCreatePortfolioComponent,
  AdminPortfolioListComponent,
  AdminSidebarComponent } from '@app/modules/admin/components';
import { AdminPortfolioDetailComponent } from '@app/modules/admin/pages';
import { AdminConfirmDialogComponent } from './components/admin-confirm-dialog/admin-confirm-dialog.component';



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
