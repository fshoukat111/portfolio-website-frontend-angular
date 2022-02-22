import { Categories } from "@app/shared/models/categories/categories.model";

export class Portfolio {
    _id: string;
    portfolioTitle: string;
    portfolioDescription: string;
    portfolioUrl: string;
    categories: Categories[];
    
}