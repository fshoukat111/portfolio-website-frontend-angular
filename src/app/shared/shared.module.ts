import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionModule } from '@app/modules';


/**
 * SHARED MODULES
 */
 const SHARED_MODULES = [
  CommonModule,
  ProjectsSectionModule

]

/**
 * SHARED COMPONENT
 */
const SHARED_COMPONENTS = []

@NgModule({
  declarations: [],
  imports: [...SHARED_MODULES],
  exports:[...SHARED_MODULES,...SHARED_COMPONENTS]
})
export class SharedModule { }
