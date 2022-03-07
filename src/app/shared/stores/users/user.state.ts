import { Auth, Users } from "@app/shared/models/users/users.model";

/** State for Tab store. */
export interface IUserState {
  auth:Auth
  user:Users,
}

/** Initial state for Tab store. */
export const initialUserState: IUserState = {
  auth:{},
  user:{},
};
