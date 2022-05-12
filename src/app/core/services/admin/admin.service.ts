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
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryList}`);
  }

  /**
 *
 * @returns
 * @param category
 * @param _id
 */
  updateCategoryByAdmin(_id: string, category: Category): Observable<Category> {
    return this.requestService.put(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryList}/${_id}`, category);
  }

  /**
 * delete portfolio by admin
 * @returns
 * @param _id
 */
  deleteCategoryAdmin(_id: string): Observable<Category> {
    return this.requestService.delete(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryList}/${_id}`);
  }

  /**
 * get portfolio list
 * @returns 
 */
  getPortfoliosByAdmin(pageNumber: number): Observable<AllPortfolio> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}?page=${pageNumber}`);
  }

  /**
   * get portfolio by id
   * @param id 
   * @returns 
   */

  getSinglePortfoliosByAdmin(_id: string): Observable<Portfolio> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`);
  }

  /**
   *
   * @returns
   * @param portfolio
   */
  createPortfolioByAdmin(adminPortfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioCreate}`, adminPortfolio);
  }

  /**
   *
   * @returns
   * @param portfolio
   * @param _id
   */
  updatePortfolioByAdmin(_id: string, adminPortfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.put(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`, adminPortfolio);
  }

  /**
   * delete portfolio by admin
   * @returns
   * @param _id
   */
  deletePortfolioAdmin(_id: string): Observable<Portfolio> {
    return this.requestService.delete(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`);
  }
}
