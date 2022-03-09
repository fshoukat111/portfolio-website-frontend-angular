import { Category } from "@app/shared/models";

export class Portfolio {
    _id?: string;
    portfolioTitle?: string;
    portfolioDescription?: string;
    portfolioUrl?: string;
    categories?: Category[];
    portfolioImages?: [];
}
