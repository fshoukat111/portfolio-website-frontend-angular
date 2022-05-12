import { environment } from "src/environments/environment.prod";

export class ApiUrl {
    static backendUrl = `${environment.backend_url}`;
    static admin = 'admin';
    static users = 'users';
    static register = 'register';
    static login = 'login';
    static logout = 'logout';
    static categories = 'categories';
    static category = 'category';
    static create = 'create'
    static adminCategoryCreate = `${this.admin}/category/${this.create}`;
    static adminCategoryList = `${this.admin}/${this.categories}`;
    static portfolio = 'portfolio';
    static adminPortfolioCreate = `${this.admin}/${this.portfolio}/${this.create}`;
    static adminPortfolioList = `${this.admin}/${this.portfolio}`;

}
