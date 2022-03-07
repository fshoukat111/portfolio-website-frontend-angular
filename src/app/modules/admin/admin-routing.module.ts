import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { AppRotues } from '@app/shared/constants/app.routes';
import { CreatePortfolioComponent } from './components';

const routes: Routes = [
  {path:"",component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
