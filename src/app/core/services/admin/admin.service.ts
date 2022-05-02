import { Injectable } from '@angular/core';
import { AllPortfolio, Portfolio } from '@app/shared/models/portfolios/portfolios.model';
import { Observable } from 'rxjs';
import { RequestService } from '@app/core/services';
import { ApiUrl } from '@app/shared/constants/resources-refrance';
import { Category } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private requestService: RequestService) { }

   /**
 *
 * @returns
 * @param portfolio
 */
  createCategoryByAdmin(category: Category): Observable<Category> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryCreate}`, category);
  }

  getCategoryListByAdmin(): Observable<Category[]> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.categories}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.categories}`);
  }

   /**
  *
  * @returns
  * @param category
  * @param _id
  */
  updateCategoryByAdmin(_id: string, category: Category): Observable<Category> {
     return this.requestService.put(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.category}/${_id}`, category);
  }

   /**
  * delete portfolio by admin
  * @returns
  * @param _id
  */
  deleteCategoryAdmin(_id: string): Observable<Category> {
     return this.requestService.delete(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.category}/${_id}`);
  }

  /**
 * get portfolio list
 * @returns 
 */
  getPortfoliosByAdmin(pageNumber:number): Observable<AllPortfolio> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}?page=${pageNumber}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.portfolio}`);
  }

  /**
   * get portfolio by id
   * @param id 
   * @returns 
   */

  getSinglePortfoliosByAdmin(_id: string): Observable<Portfolio> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.portfolio}`);
  }

  /**
   *
   * @returns
   * @param portfolio
   */
  createPortfolioByAdmin(adminPortfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.post(`http://localhost:5000/api/v1/${ApiUrl.adminPortfolioCreate}`, adminPortfolio);
    // return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.admin}/${ApiUrl.adminPortfolioCreate}`, { portfolio });
  }

  /**
   *
   * @returns
   * @param portfolio
   * @param _id
   */
  updatePortfolioByAdmin(_id: string, adminPortfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.put(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`, adminPortfolio);
  }

  /**
   * delete portfolio by admin
   * @returns
   * @param _id
   */
  deletePortfolioAdmin(_id: string): Observable<Portfolio> {
    return this.requestService.delete(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`);
  }
}
