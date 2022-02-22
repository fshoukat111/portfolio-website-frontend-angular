import { Injectable } from '@angular/core';
import { Portfolio } from '@app/shared/models/portfolios/portfolios';
import { Observable } from 'rxjs';
import { RequestService } from '@app/core/services';

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
   createPortfolioByAdmin(portfolio: Portfolio): Observable<Portfolio> {
    return this.requestService.post(``, { portfolio });
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
