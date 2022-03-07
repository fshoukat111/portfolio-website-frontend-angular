import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from '@app/shared/modules/material-ui/material-ui.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { CreatePortfolioComponent } from '@app/modules/admin/pages';


@NgModule({
  declarations: [
    CreatePortfolioComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialUiModule

  ]
})
export class AdminModule { }
