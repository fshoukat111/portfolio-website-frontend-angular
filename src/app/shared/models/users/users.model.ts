import { selectedUser } from "@app/shared/enums/selected.user";

export class Users {
  _id?: string;
  userName?: string;
  email?: string;
  password?: string;
  role?: string=selectedUser.admin;
  token?:string;
  createdAt?: Date = new Date(Date.now());

}
