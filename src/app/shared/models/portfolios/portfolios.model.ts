import { Category } from "@app/shared/models";

export class AllPortfolio {
    resultPerPage?:number;
    portfolioCount?:number;
    portfolios?:Portfolio[];
};

export class Portfolio {
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
