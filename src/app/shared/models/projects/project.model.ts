import { Category } from "@app/shared/models";

export class AllProject {
    resultPerPage?:number;
    portfolioCount?:number;
    portfolios?:Project[];
};

export class Project {
    _id?: string;
    portfolioTitle?: string;
    portfolioDescription?: string;
    portfolioUrl?: string;
    categories?: Category[];
    images?: Images[];
};

export class Images {
    publicId:string;
    imageUrl:string;
};
