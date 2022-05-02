import { createAction, props } from '@ngrx/store';
import { AllPortfolio, Category, Portfolio } from '@app/shared/models';


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

// Load  Category by id Action
export const LoadCategoryUpdateById = createAction(
  '[LoadCategoryUpdateById] LoadCategoryUpdateById',
  props<{ _id:string,category:Category }>()

);

// Load  Category by id Action Successful
export const LoadCategoryUpdateByIdSuccess = createAction(
  '[LoadCategoryUpdateByIdSuccess] LoadCategoryUpdateByIdSuccess',
  props<{ category:Category }>()
);

// Load  Category by id Action Failure
export const LoadCategoryUpdateByIdFail = createAction(
  '[LoadCategoryUpdateByIdFail] LoadCategoryUpdateByIdFail',
  props<{ error: any }>()
);


// Load  Portfolio list Action
export const LoadPortfolioList = createAction(
  '[LoadPortfolioList] LoadPortfolioList',
  props<{ pageNumber:number }>()

);

// Load  Portfolio list Action Successful
export const LoadPortfolioListSuccess = createAction(
  '[LoadPortfolioListSuccess] LoadPortfolioListSuccess',
  props<{ portfolioList: AllPortfolio }>()
);

// Load Create Portfolio Action Failure
export const LoadPortfolioListFail = createAction(
  '[LoadPortfolioListFail] LoadPortfolioListFail',
  props<{ error: any }>()
);

// Load  Portfolio by id Action
export const LoadPortfolioById = createAction(
  '[LoadPortfolioById] LoadPortfolioById',
  props<{ _id:string }>()

);

// Load  Portfolio by id Action Successful
export const LoadPortfolioByIdSuccess = createAction(
  '[LoadPortfolioByIdSuccess] LoadPortfolioByIdSuccess',
  props<{ adminPortfolioDetail: Portfolio }>()
);

// Load  Portfolio by id Action Failure
export const LoadPortfolioByIdFail = createAction(
  '[LoadPortfolioByIdFail] LoadPortfolioByIdFail',
  props<{ error: any }>()
);

// Load  Portfolio by id Action
export const LoadPortfolioUpdateById = createAction(
  '[LoadPortfolioUpdateById] LoadPortfolioUpdateById',
  props<{ _id:string,adminPortfolio:Portfolio }>()

);

// Load  Portfolio by id Action Successful
export const LoadPortfolioUpdateByIdSuccess = createAction(
  '[LoadPortfolioUpdateByIdSuccess] LoadPortfolioUpdateByIdSuccess',
  props<{ adminPortfolio: Portfolio }>()
);

// Load  Portfolio by id Action Failure
export const LoadPortfolioUpdateByIdFail = createAction(
  '[LoadPortfolioUpdateByIdFail] LoadPortfolioUpdateByIdFail',
  props<{ error: any }>()
);


// Load delete Portfolio by id Action
export const LoadPortfolioDeleteById = createAction(
  '[LoadPortfolioDeleteById] LoadPortfolioDeleteById',
  props<{ _id:string }>()

);

// Load delete Portfolio by id Action Successful
export const LoadPortfolioDeleteByIdSuccess = createAction(
  '[LoadPortfolioDeleteByIdSuccess] LoadPortfolioDeleteByIdSuccess',
  props<{ adminPortfolio: Portfolio }>()
);

// Load delete Portfolio by id Action Failure
export const LoadPortfolioDeleteByIdFail = createAction(
  '[LoadPortfolioDeleteByIdFail] LoadPortfolioDeleteByIdFail',
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
