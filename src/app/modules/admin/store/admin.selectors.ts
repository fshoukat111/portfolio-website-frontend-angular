import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdminState } from "./admin.state";

export const adminSelector = createFeatureSelector<IAdminState>('admin');
export const getCategoryListSelector = createSelector(adminSelector, (state) => state.categoryList);
export const getPortfolioListSelector = createSelector(adminSelector, (state) => state.portfolioList);
export const getPortfolioByIdSelector = createSelector(adminSelector, (state) => state.adminPortfolioDetail);

