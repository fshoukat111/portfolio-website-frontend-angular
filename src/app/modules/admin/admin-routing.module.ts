import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/modules/admin/admin.component';
import { AppRotues } from '@app/shared/constants/app.routes';
import { AdminProjectDetailComponent } from '@app/modules/admin/pages';


const routes: Routes = [
  {path:"",component:AdminComponent},
  {path:`${AppRotues.portfolioDetail}/:id`,component:AdminProjectDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
