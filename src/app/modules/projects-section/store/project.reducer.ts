import { createReducer, on, Action } from '@ngrx/store';
import * as projectAction from '@app/modules/projects-section/store/project.actions';
import { initialProjectState, IProjectState } from '@app/modules/projects-section/store';

const creatprojectSectionReducer = createReducer(initialProjectState,


  //get Portfolio List By Users Reducers
  on(projectAction.LoadProjectLists, (state) => ({
    ...state,
  })),

  on(projectAction.LoadProjectListsSuccess, (state, { projectList }) => ({
    ...state,
    projectList
  })),

  on(projectAction.LoadProjectListsFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //get Portfolio Single By User Reducers
  on(projectAction.LoadProjectDetail, (state) => ({
    ...state,
  })),

  on(projectAction.LoadProjectDetailSuccess, (state, { projectDetail }) => ({
    ...state,
    projectDetail
  })),

  on(projectAction.LoadProjectDetailFail, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function projectSectionReducer(state: IProjectState = initialProjectState, action: Action) {
  return creatprojectSectionReducer(state, action);
}
