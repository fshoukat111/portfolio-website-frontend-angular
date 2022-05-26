import { createReducer, on, Action } from '@ngrx/store';
import * as adminAction from '@app/modules/admin/store/admin.actions';
import { IAdminState, initialAdminState } from './admin.state';

const creatAdminSectionReducer = createReducer(initialAdminState,

  //get Category List By Admin Reducers
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

  //get Update Category Single By Admin Reducers
  on(adminAction.LoadCategoryUpdateById, (state, _id) => ({
    ...state,
  })),

  on(adminAction.LoadCategoryUpdateByIdSuccess, (state, { category }) => ({
    ...state,
    category
  })),

  on(adminAction.LoadCategoryUpdateByIdFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //get Portfolio List By Admin Reducers
  on(adminAction.LoadPortfolioList, (state,{pageNumber}) => ({
    ...state,
    pageNumber
  })),

  on(adminAction.LoadPortfolioListSuccess, (state, { portfolioList }) => ({
    ...state,
    portfolioList
  })),

  on(adminAction.LoadPortfolioListFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //get Portfolio Single By Admin Reducers
  on(adminAction.LoadPortfolioById, (state) => ({
    ...state,
  })),

  on(adminAction.LoadPortfolioByIdSuccess, (state, { adminProjectDetail }) => ({
    ...state,
    adminProjectDetail
  })),

  on(adminAction.LoadPortfolioByIdFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //get Update Portfolio Single By Admin Reducers
  on(adminAction.LoadPortfolioUpdateById, (state, _id) => ({
    ...state,
  })),

  on(adminAction.LoadPortfolioUpdateByIdSuccess, (state, { adminProject }) => ({
    ...state,
    adminProject
  })),

  on(adminAction.LoadPortfolioUpdateByIdFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //get Delete Portfolio Single By Admin Reducers
  on(adminAction.LoadPortfolioDeleteById, (state, _id) => ({
    ...state,
  })),

  on(adminAction.LoadPortfolioDeleteByIdSuccess, (state, { adminProject }) => ({
    ...state,
    adminProject
  })),

  on(adminAction.LoadPortfolioDeleteByIdFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Create Portfolio By Admin Reducers
  on(adminAction.LoadCreatePortfolio, (state, { adminProject }) => ({
    ...state,
    adminProject
  })),

  on(adminAction.LoadCreatePortfolioSuccess, (state, { adminProject }) => ({
    ...state,
    adminProject
  })),

  on(adminAction.LoadCreatePortfolioFail, (state, { error }) => ({
    ...state,
    error,
  })),

);

export function adminSectionReducer(state: IAdminState = initialAdminState, action: Action) {
  return creatAdminSectionReducer(state, action);
}
