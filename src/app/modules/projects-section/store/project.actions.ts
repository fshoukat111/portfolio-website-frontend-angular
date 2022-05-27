import { createAction, props } from "@ngrx/store";
import { AllProject,Project } from "@app/shared/models";


// Load  Project list Action
export const LoadProjectLists = createAction(
  '[LoadProjectLists] LoadProjectLists',
  props<{ pageNumber: number }>()
  
);

// Load  Project list Action Successful
export const LoadProjectListsSuccess = createAction(
  '[LoadProjectListsSuccess] LoadProjectListsSuccess',
  props<{ projectList: AllProject }>()
);

// Load Create Project Action Failure
export const LoadProjectListsFail = createAction(
  '[LoadProjectListsFail] LoadProjectListsFail',
  props<{ error: any }>()
);

export const LoadProjectDetail = createAction(
  '[LoadProjectDetail] LoadProjectDetail',
  props<{ _id:string }>()

);

// Load  Project list Action Successful
export const LoadProjectDetailSuccess = createAction(
  '[LoadProjectDetailSuccess] LoadProjectDetailSuccess',
  props<{ projectDetail: Project }>()
);

// Load Create Project Action Failure
export const LoadProjectDetailFail = createAction(
  '[LoadProjectDetailFail] LoadProjectDetailFail',
  props<{ error: any }>()
);