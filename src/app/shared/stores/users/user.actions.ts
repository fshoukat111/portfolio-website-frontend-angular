import { createAction, props } from '@ngrx/store';
import { Auth, Users } from '@app/shared/models/users/users.model';


// Load Register User Action
export const LoadPostRegisterUser = createAction(
  '[LoadPostRegisterUser] LoadPostRegisterUser',
  props<{ user: Users }>()

);

// Load Register User Action Successful
export const LoadPostRegisterUserSuccess = createAction(
  '[LoadPostRegisterUserSuccess] LoadPostRegisterUserSuccess',
  props<{ auth: Auth }>()
);

// Load Register User Action Failure
export const LoadPostRegisterUserFail = createAction(
  '[LoadPostRegisterUserFail] LoadPostRegisterUserFail',
  props<{ error: any }>()
);

// Load Login User Action
export const LoadPostLoginUser = createAction(
  '[LoadPostLoginUser] LoadPostLoginUser',
  props<{ email:string,password:string }>()

);

// Load Login User Action Successful
export const LoadPostLoginUserSuccess = createAction(
  '[LoadPostLoginUserSuccess] LoadPostLoginUserSuccess',
  props<{ auth: Auth }>()
);

// Load Login User Action Failure
export const LoadPostLoginUserFail = createAction(
  '[LoadPostLoginUserFail] LoadPostLoginUserFail',
  props<{ error: any }>()
);

// Load Logout User Action
export const LoadPostLogoutUser = createAction(
  '[LoadPostLogoutUser] LoadPostLogoutUser',
);

// Load Logout User Action Successful
export const LoadPostLogoutUserSuccess = createAction(
  '[LoadPostLogoutUserSuccess] LoadPostLogoutUserSuccess',
  props<{ user: Users }>()
);

// Load Logout User Action Failure
export const LoadPostLogoutUserFail = createAction(
  '[LoadPostLogoutUserFail] LoadPostLogoutUserFail',
  props<{ error: any }>()
);
