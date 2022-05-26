import { Injectable } from '@angular/core';
import { AllProject, Project } from '@app/shared/models/projects/project.model';
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
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminCategoryList}`);
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.categories}`);

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
  getPortfoliosByAdmin(pageNumber: number): Observable<AllProject> {
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}?page=${pageNumber}`);
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}?page=${pageNumber}`);
  }

  /**
   * get portfolio by id
   * @param id 
   * @returns 
   */

  getSinglePortfoliosByAdmin(_id: string): Observable<Project> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`);
  }

  /**
   *
   * @returns
   * @param portfolio
   */
  createPortfolioByAdmin(adminProject: Project): Observable<Project> {
    return this.requestService.post(`http://localhost:5000/api/v1//${ApiUrl.adminPortfolioCreate}`, adminProject);

    // return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioCreate}`, adminPortfolio);
  }

  /**
   *
   * @returns
   * @param portfolio
   * @param _id
   */
  updatePortfolioByAdmin(_id: string, adminProject: Project): Observable<Project> {
    return this.requestService.put(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`, adminProject);
    // return this.requestService.put(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`, adminPortfolio);
  }

  /**
   * delete portfolio by admin
   * @returns
   * @param _id
   */
  deletePortfolioAdmin(_id: string): Observable<Project> {
    return this.requestService.delete(`http://localhost:5000/api/v1/${ApiUrl.admin}/${ApiUrl.portfolio}/${_id}`);
    // return this.requestService.delete(`${ApiUrl.backendUrl}/${ApiUrl.adminPortfolioList}/${_id}`);
  }
}
