import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAdminState } from "./admin.state";

export const adminSelector = createFeatureSelector<IAdminState>('admin');
export const getCategoryListSelector = createSelector(adminSelector, (state) => state.categoryList);

