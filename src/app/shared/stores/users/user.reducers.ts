import { createReducer, on, Action } from '@ngrx/store';
import * as userAction from '@app/shared/stores/users/user.actions';
import { initialUserState, IUserState } from '@app/shared/stores/users/user.state';

const createUserSectionReducer = createReducer(initialUserState,

  //Register User Reducers
  on(userAction.LoadPostRegisterUser, (state, { user }) => ({
    ...state,
    user
  })),

  on(userAction.LoadPostRegisterUserSuccess, (state, { auth }) => ({
    ...state,
    auth
  })),

  on(userAction.LoadPostRegisterUserFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Login User Reducers
  on(userAction.LoadPostLoginUser, (state, { email,password }) => ({
    ...state,
    email,password
  })),

  on(userAction.LoadPostLoginUserSuccess, (state, { auth }) => ({
    ...state,
    auth
  })),

  on(userAction.LoadPostLoginUserFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Logout User Reducers
  on(userAction.LoadPostLogoutUser, (state) => ({
    ...state,
  })),

  on(userAction.LoadPostLogoutUserSuccess, (state, { user }) => ({
    ...state,
    user
  })),

  on(userAction.LoadPostLogoutUserFail, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function userSectionReducer(state: IUserState = initialUserState, action: Action) {
  return createUserSectionReducer(state, action);
}
