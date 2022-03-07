import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from '@app/modules/projects-section/pages';

const routes: Routes = [
  {path:"",component:ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsSectionRoutingModule { }
