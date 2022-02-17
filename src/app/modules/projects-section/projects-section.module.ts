import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsSectionRoutingModule } from '@app/modules/projects-section/projects-section-routing.module';
import { ProjectListComponent } from '@app/modules/projects-section/pages';


@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectsSectionRoutingModule
  ]
})
export class ProjectsSectionModule { }
