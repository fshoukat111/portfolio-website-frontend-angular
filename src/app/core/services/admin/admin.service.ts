import { Injectable } from '@angular/core';
import { Portfolio } from '@app/shared/models/portfolios/portfolios.model';
import { Observable } from 'rxjs';
import { RequestService } from '@app/core/services';
import { ApiUrl } from '@app/shared/constants/resources-refrance';
import { Category } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private requestService: RequestService) { }


  getCategoryList(): Observable<Category[]> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.categories}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.categories}`);
  }

  /**
 *
 * @returns
 * @param portfolio
 */
  createCategoryByAdmin(category: Category): Observable<Category> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryCreate}`, category);
  }

  /**
   *
   * @returns
   * @param portfolio
   */
  createPortfolioByAdmin(adminPortfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.post(`http://localhost:5000/api/v1/${ApiUrl.adminPortfolioCreate}`, { adminPortfolio });
    // return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioCreate}`, { portfolio });
  }

  /**
   *
   * @returns
   * @param portfolio
   * @param _id
   */
  updatePortfolioByAdmin(_id: string, portfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.put(``, { portfolio });
  }

  /**
   * delete portfolio by admin
   * @returns
   * @param _id
   */
  deletePortfolio(_id: string): Observable<Portfolio[]> {
    return this.requestService.delete(``);
  }
}
