import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IProjectState } from '@app/modules/projects-section/store';

export const projectSelector = createFeatureSelector<IProjectState>('portfolio');
export const getPortfolioListsSelector = createSelector(projectSelector, (state) => state.projectList);
export const getPortfolioByIdSelector = createSelector(projectSelector, (state) => state.projectDetail);

