import { Injectable } from '@angular/core';
import { RequestService } from '@app/core/services';
import { Observable } from 'rxjs';
import { Portfolio } from '@app/shared/models/portfolios/portfolios';
import { ApiUrl } from '@app/shared/constants/resources-refrance';
@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor(private requestService: RequestService) { }

  /**
   * 
   * @returns 
   */
  getPortfolios(): Observable<Portfolio[]> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.portfolio}`);
  }

}
