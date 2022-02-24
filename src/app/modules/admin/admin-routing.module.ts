import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { AppRotues } from '@app/shared/constants/app.routes';
import { CreatePortfolioComponent } from './pages';

const routes: Routes = [
  {path:"",component:AdminComponent},
  {path:AppRotues.create,component:CreatePortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
