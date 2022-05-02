import { Category } from "@app/shared/models";
import { AllPortfolio, Portfolio } from "@app/shared/models/portfolios/portfolios.model";

/** State for Tab store. */
export interface IAdminState {
    adminPortfolio:Portfolio,
    adminPortfolioDetail:Portfolio,
    categoryList: Category[],
    category: Category,
    portfolioList: AllPortfolio,
    _id:string,
    pageNumber:number

}

/** Initial state for Tab store. */
export const initialAdminState: IAdminState = {
    adminPortfolio:{},
    categoryList:[],
    portfolioList:{},
    category:{},
    adminPortfolioDetail:{},
    _id:'',
    pageNumber:1
};
