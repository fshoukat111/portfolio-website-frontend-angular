import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as userAction from '@app/shared/stores/users/user.actions';
import { of } from 'rxjs';
import { UsersService } from '@app/core/services/users/users.service';
import { Users } from '@app/shared/models/users/users.model';
import { selectedUser } from '@app/shared/enums/selected.user';
import { LocalStorageService } from '@app/core/services/local-storage.service';


@Injectable()
export class UserSectionEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private localStorage: LocalStorageService,
  ) { }

  /**
   *Register User
   * Triggers when LoadPostRegisterUser action is dispatched
   * On success, dispatches LoadPostRegisterUserSuccess action
  */
  getRegisterUser$ = createEffect(() =>
    this.actions$.pipe(ofType(userAction.LoadPostRegisterUser),
      switchMap((action) => {
        return this.userService.registerUser(action.user).pipe(map((user: Users) => {
          return userAction.LoadPostRegisterUserSuccess({ user });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(userAction.LoadPostRegisterUserFail({ error }));
          })
        );
      })
    )
  );

  /**
   *Login User
   * Triggers when LoadPostLoginUser action is dispatched
   * On success, dispatches LoadPostLoginUser action
  */
  getLoginUser$ = createEffect(() =>
    this.actions$.pipe(ofType(userAction.LoadPostLoginUser),
      switchMap((action) => {
        return this.userService.loginUser(action.email, action.password).pipe(map((user: Users) => {
          return userAction.LoadPostLoginUserSuccess({ user });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(userAction.LoadPostLoginUserFail({ error }));
          })
        );
      })
    )
  );

  /**
   *  Logout User
   * Triggers when LoadPostLoginUser action is dispatched
   * On success, dispatches LoadPostLoginUser action
  */
  getLogoutUser$ = createEffect(() =>
    this.actions$.pipe(ofType(userAction.LoadPostLogoutUser),
      switchMap((action) => {
        return this.userService.logoutUser().pipe(map((user: Users) => {
          return userAction.LoadPostLogoutUserSuccess({ user });
        }),
          catchError((error) => {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(userAction.LoadPostLogoutUserFail({ error }));
          })
        );
      })
    )
  );
}
