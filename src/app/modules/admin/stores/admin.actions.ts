import { createAction, props } from '@ngrx/store';
import { Category, Portfolio } from '@app/shared/models';


// Load Create Category Action
export const LoadCreateCategory = createAction(
  '[LoadCreateCategory] LoadCreateCategory',
  props<{ adminCategory: Category }>()

);

// Load Create Category Action Successful
export const LoadCreateCategorySuccess = createAction(
  '[LoadCreateCategorySuccess] LoadCreateCategorySuccess',
  props<{ adminCategory: Category }>()
);

// Load Create Category Action Failure
export const LoadCreateCategoryFail = createAction(
  '[LoadCreateCategoryFail] LoadCreateCategoryFail',
  props<{ error: any }>()
);

// Load  Category list Action
export const LoadCategoryList = createAction(
  '[LoadCategoryList] LoadCategoryList'

);

// Load  Category list Action Successful
export const LoadCategoryListSuccess = createAction(
  '[LoadCategoryListSuccess] LoadCategoryListSuccess',
  props<{ categoryList: Category[] }>()
);

// Load Create Category Action Failure
export const LoadCategoryListFail = createAction(
  '[LoadCategoryListFail] LoadCategoryListFail',
  props<{ error: any }>()
);

// Load Create Portfolio Action
export const LoadCreatePortfolio = createAction(
  '[LoadCreatePortfolio] LoadCreatePortfolio',
  props<{ adminPortfolio: Portfolio }>()

);

// Load Create Portfolio Action Successful
export const LoadCreatePortfolioSuccess = createAction(
  '[LoadCreatePortfolioSuccess] LoadCreatePortfolioSuccess',
  props<{ adminPortfolio: Portfolio }>()
);

// Load Create Portfolio Action Failure
export const LoadCreatePortfolioFail = createAction(
  '[LoadCreatePortfolioFail] LoadCreatePortfolioFail',
  props<{ error: any }>()
);
