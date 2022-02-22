import { Injectable } from '@angular/core';
import { RequestService } from '@app/core/services';
import { ApiUrl } from '@app/shared/constants/resources-refrance';
import { Users } from '@app/shared/models/users/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private requestService: RequestService) { }

  /**
   * register user
   * @param user 
   */
  registerUser(user: Users): Observable<Users> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.register}`, { user })
  }

  /**
   * login user
   * @param user 
   */
  loginUser(user: Users): Observable<Users> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.login}`, { user })
  }

  /**
   * logout user
   */
  logoutUser() {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.logout}`)
  }

  /**
   * get user list for admin
   */
  getUsers(): Observable<Users[]> {
    return this.requestService.get('');
  }

}
