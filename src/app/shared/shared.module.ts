import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionModule } from '@app/modules';
import { MaterialUiModule } from './modules';

/**
 * SHARED MODULES
 */
 const SHARED_MODULES = [
  CommonModule,
  ProjectsSectionModule,
  MaterialUiModule,

]

/**
 * SHARED COMPONENT
 */
const SHARED_COMPONENTS = []

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports:[...SHARED_MODULES,...SHARED_COMPONENTS]
})
export class SharedModule { }
