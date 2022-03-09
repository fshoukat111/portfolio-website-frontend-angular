import { Category } from "@app/shared/models";
import { Portfolio } from "@app/shared/models/portfolios/portfolios.model";

/** State for Tab store. */
export interface IAdminState {
    adminPortfolio:Portfolio,
    categoryList: Category[],

}

/** Initial state for Tab store. */
export const initialAdminState: IAdminState = {
    adminPortfolio:new Portfolio(),
    categoryList:[],
};
