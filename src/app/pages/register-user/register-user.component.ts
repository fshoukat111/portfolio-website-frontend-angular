import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Users } from '@app/shared/models/users/users.model';
import { LoadPostRegisterUser } from '@app/shared/stores';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass']
})
export class RegisterUserComponent implements OnInit {
  public user:Users = new Users();

  constructor(private userStore:Store,private router:Router) { }

  ngOnInit(): void {}

  public registerUser():void{
    this.userStore.dispatch(LoadPostRegisterUser({user:this.user}));
  }
}
