import { Users } from "@app/shared/models/users/users.model";

/** State for Tab store. */
export interface IUserState {
  user:Users,
}

/** Initial state for Tab store. */
export const initialUserState: IUserState = {
  user:{},
};
