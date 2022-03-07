import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { CreatePortfolioComponent } from '@app/modules/admin/components';
import { MaterialUiModule } from '@app/shared/modules';



@NgModule({
  declarations: [
    AdminComponent,
    CreatePortfolioComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialUiModule,
    FormsModule

  ]
})
export class AdminModule { }
