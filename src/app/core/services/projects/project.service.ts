import { Injectable } from '@angular/core';
import { RequestService } from '@app/core/services';
import { Observable } from 'rxjs';
import { AllProject, Project } from '@app/shared/models/projects/project.model';
import { ApiUrl } from '@app/shared/constants/resources-refrance';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private requestService: RequestService) { }

  /**
   * get list of project list for user
   * @returns 
   */
  getProjectList(): Observable<AllProject> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.portfolio}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.portfolio}`);
  }

  /**
   * get Detail of project by Id for user
   * @returns 
   */
  getProjectDetail(_id:string): Observable<Project> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.portfolio}/${_id}`);
    // return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.portfolio}`);
  }


}
