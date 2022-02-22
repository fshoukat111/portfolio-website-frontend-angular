import { environment } from "src/environments/environment.prod";

export class ApiUrl {
    static backendUrl = `${environment.backend_url}`;
    static admin = 'admin';
    static register = 'register';
    static login = 'login';
    static logout = 'logout';
    static categories = 'categories';
    static adminCategoryCreate = `${this.admin}/category/create`;
    static portfolio = 'portfolio';
    static adminPortfolioCreate = `${this.admin}/${this.portfolio}/create`;

}