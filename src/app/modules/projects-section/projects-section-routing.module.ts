import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes';
import { ProjectDetailComponent } from './pages';
import { ProjectSectionComponent } from './project-section.component';

const routes: Routes = [
  {path:"",component:ProjectSectionComponent},
  {path:`${AppRotues.portfolioDetail}/:id`,component:ProjectDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsSectionRoutingModule { }
