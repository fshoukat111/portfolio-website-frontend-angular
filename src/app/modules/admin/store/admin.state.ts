import { Category } from "@app/shared/models";
import { AllProject, Project } from "@app/shared/models/projects/project.model";

/** State for Tab store. */
export interface IAdminState {
    adminProject:Project,
    adminProjectDetail:Project,
    categoryList: Category[],
    category: Category,
    portfolioList: AllProject,
    _id:string,
    pageNumber:number

}

/** Initial state for Tab store. */
export const initialAdminState: IAdminState = {
    adminProject:{},
    categoryList:[],
    portfolioList:{},
    category:{},
    adminProjectDetail:{},
    _id:'',
    pageNumber:1
};
