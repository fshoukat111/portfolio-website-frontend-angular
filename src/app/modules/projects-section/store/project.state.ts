import { AllProject, Project } from "@app/shared/models/projects/project.model";

/** State for Tab store. */
export interface IProjectState {
    project:Project,
    projectDetail:Project,
    projectList: AllProject,
    pageNumber:number

}

/** Initial state for Tab store. */
export const initialProjectState: IProjectState = {
    project:{},
    projectList:{},
    projectDetail:{},
    pageNumber:1
};
