import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as adminAction from '@app/modules/admin/stores/admin.actions';
import { of } from 'rxjs';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { AdminService } from '@app/core/services/admin/admin.service';
import { Category, Portfolio } from '@app/shared/models';


@Injectable()
export class AdminSectionEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private localStorage: LocalStorageService,
  ) { }

  /**
   *Create Category
   * Triggers when LoadCreateCategory action is dispatched
   * On success, dispatches LoadCreateCategorySuccess action
  */
  getCreateCategory$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadCreateCategory),
      switchMap((action) => {
        return this.adminService.createCategoryByAdmin(action.adminCategory).pipe(map((adminCategory: Category) => {
          return adminAction.LoadCreateCategorySuccess({ adminCategory });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadCreatePortfolioFail({ error }));
          })
        );
      })
    )
  );
  
  /**
   *Create Category
   * Triggers when LoadCreateCategory action is dispatched
   * On success, dispatches LoadCreateCategorySuccess action
  */
  getCategoryList$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadCategoryList),
      switchMap((action) => {
        return this.adminService.getCategoryList().pipe(map((categoryList: Category[]) => {
          return adminAction.LoadCategoryListSuccess({ categoryList });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadCategoryListFail({ error }));
          })
        );
      })
    )
  );

  /**
   *Create Portfolio
   * Triggers when LoadCreatePortfolio action is dispatched
   * On success, dispatches LoadCreatePortfolioSuccess action
  */
  getCreatePortfolio$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadCreatePortfolio),
      switchMap((action) => {
        return this.adminService.createPortfolioByAdmin(action.adminPortfolio).pipe(map((adminPortfolio: Portfolio) => {
          return adminAction.LoadCreatePortfolioSuccess({ adminPortfolio });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadCreatePortfolioFail({ error }));
          })
        );
      })
    )
  );

 
}
