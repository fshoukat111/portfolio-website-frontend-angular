import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from '@app/core/services';
import { AppRotues } from '@app/shared/constants/app.routes';
import { selectedUser } from '@app/shared/enums/selected.user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.localStorageService.get("role");
    if (role !== selectedUser.admin) {
      this.router.navigate([`${AppRotues.portfolios}`]);
      return false;
    }
    return true;
  }
}