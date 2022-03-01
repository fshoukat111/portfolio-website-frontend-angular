import { selectedUser } from "@app/shared/enums/selected.user";

export class Auth {
  success?: boolean;
  token?: string;
  user?: Users;
}

export class Users {
  _id?: string;
  userName?: string;
  email?: string;
  password?: string;
  role?: string = selectedUser.user;
  createdAt?: Date = new Date(Date.now());

}
