import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectsSectionRoutingModule } from '@app/modules/projects-section/projects-section-routing.module';
import { MaterialUiModule } from '@app/shared/modules';
import { ProjectDetailComponent } from '@app/modules/projects-section/pages';
import { ProjectSectionComponent } from './project-section.component';
import { ProjectListComponent } from '@app/modules/projects-section/components';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectSectionComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    ProjectsSectionRoutingModule,
    NgxPaginationModule
  ]
})
export class ProjectsSectionModule { }
