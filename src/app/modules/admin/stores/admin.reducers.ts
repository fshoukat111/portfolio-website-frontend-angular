import { createReducer, on, Action } from '@ngrx/store';
import * as adminAction from '@app/modules/admin/stores/admin.actions';
import { IAdminState, initialAdminState } from './admin.state';

const creatAdminSectionReducer = createReducer(initialAdminState,

  //Create Category By Admin Reducers
  on(adminAction.LoadCategoryList, (state) => ({
    ...state,
  })),

  on(adminAction.LoadCategoryListSuccess, (state, { categoryList }) => ({
    ...state,
    categoryList
  })),

  on(adminAction.LoadCategoryListFail, (state, { error }) => ({
    ...state,
    error,
  })),
 
  //Create Category By Admin Reducers
  on(adminAction.LoadCreateCategory, (state, { adminCategory }) => ({
    ...state,
    adminCategory
  })),

  on(adminAction.LoadCreateCategorySuccess, (state, { adminCategory }) => ({
    ...state,
    adminCategory
  })),

  on(adminAction.LoadCreateCategoryFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Create Portfolio By Admin Reducers
  on(adminAction.LoadCreatePortfolio, (state, { adminPortfolio }) => ({
    ...state,
    adminPortfolio
  })),

  on(adminAction.LoadCreatePortfolioSuccess, (state, { adminPortfolio }) => ({
    ...state,
    adminPortfolio
  })),

  on(adminAction.LoadCreatePortfolioFail, (state, { error }) => ({
    ...state,
    error,
  })),

);

export function adminSectionReducer(state: IAdminState = initialAdminState, action: Action) {
  return creatAdminSectionReducer(state, action);
}
