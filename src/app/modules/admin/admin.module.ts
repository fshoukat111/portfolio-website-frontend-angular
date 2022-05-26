import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { MaterialUiModule } from '@app/shared/modules';
import { 
  AdminCreateProjectComponent,
  AdminProjectListComponent,
  AdminSidebarComponent } from '@app/modules/admin/components';
import { AdminProjectDetailComponent } from '@app/modules/admin/pages';
import { AdminConfirmDialogComponent } from './components/admin-confirm-dialog/admin-confirm-dialog.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminCreateProjectComponent,
    AdminProjectListComponent,
    AdminProjectDetailComponent,
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
