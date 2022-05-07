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
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.register}`, user);
  }

  /**
   * login user
   * @param user
   */
  loginUser(email: string, password: string): Observable<Users> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.login}`, { email, password });
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
  getAllUsers(): Observable<Users[]> {
    return this.requestService.get(`http://localhost:5000/api/v1/${ApiUrl.users}`);
  }

}
