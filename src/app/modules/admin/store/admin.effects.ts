import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as adminAction from '@app/modules/admin/store/admin.actions';
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
   *Get Category list
   * Triggers when LoadCreateCategory action is dispatched
   * On success, dispatches LoadCreateCategorySuccess action
  */
  getCategoryList$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadCategoryList),
      switchMap((action) => {
        return this.adminService.getCategoryListByAdmin().pipe(map((categoryList: Category[]) => {
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
 *get update Portfolio by id
 * Triggers when LoadCategoryUpdateById action is dispatched
 * On success, dispatches LoadCategoryUpdateByIdSuccess action
*/
  getCategoryUpdate$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadCategoryUpdateById),
      switchMap((action) => {
        return this.adminService.updateCategoryByAdmin(action._id, action.category).pipe(map((category: Category) => {
          return adminAction.LoadCategoryUpdateByIdSuccess({ category });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadCategoryUpdateByIdFail({ error }));
          })
        );
      })
    )
  );

  /**
   *get Portfolio List
   * Triggers when LoadPortfolioList action is dispatched
   * On success, dispatches LoadPortfolioListSuccess action
  */
  getPortfolioList$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadPortfolioList),
      switchMap((action) => {
        return this.adminService.getPortfoliosByAdmin(action.pageNumber).pipe(map((portfolioList: Portfolio[]) => {
          return adminAction.LoadPortfolioListSuccess({ portfolioList });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadPortfolioListFail({ error }));
          })
        );
      })
    )
  );

  /**
   *get Portfolio by id
   * Triggers when LoadPortfolioList action is dispatched
   * On success, dispatches LoadPortfolioListSuccess action
  */
  getPortfolioById$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadPortfolioById),
      switchMap((action) => {
        return this.adminService.getSinglePortfoliosByAdmin(action._id).pipe(map((adminPortfolioDetail: Portfolio) => {
          return adminAction.LoadPortfolioByIdSuccess({ adminPortfolioDetail });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadPortfolioByIdFail({ error }));
          })
        );
      })
    )
  );

  /**
   *get update Portfolio by id
   * Triggers when LoadPortfolioUpdateById action is dispatched
   * On success, dispatches LoadPortfolioUpdateByIdSuccess action
  */
  getPortfolioUpdate$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadPortfolioUpdateById),
      switchMap((action) => {
        return this.adminService.updatePortfolioByAdmin(action._id, action.adminPortfolio).pipe(map((adminPortfolio: Portfolio) => {
          return adminAction.LoadPortfolioUpdateByIdSuccess({ adminPortfolio });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadPortfolioUpdateByIdFail({ error }));
          })
        );
      })
    )
  );

  /**
   *get Delete Portfolio by id
   * Triggers when LoadPortfolioDeleteById action is dispatched
   * On success, dispatches LoadPortfolioDeleteByIdSuccess action
  */
  getPortfolioDelete$ = createEffect(() =>
    this.actions$.pipe(ofType(adminAction.LoadPortfolioDeleteById),
      switchMap((action) => {
        return this.adminService.deletePortfolioAdmin(action._id).pipe(map((adminPortfolio: Portfolio) => {
          return adminAction.LoadPortfolioDeleteByIdSuccess({ adminPortfolio });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(adminAction.LoadPortfolioDeleteByIdFail({ error }));
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
