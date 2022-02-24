import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes';
import { selectedUser } from '@app/shared/enums/selected.user';
import { Users } from '@app/shared/models/users/users.model';
import { LoadPostLoginUser } from '@app/shared/stores/users/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.sass']
})
export class LoginUserComponent implements OnInit {
  public user:Users = new Users();

  constructor(private userStore:Store,private router:Router) { }



  ngOnInit(): void {
  }

  public loginUser(){
    this.userStore.dispatch(LoadPostLoginUser({email:this.user.email,password:this.user.password}))
    if(this.user.role === selectedUser.admin){
      this.router.navigate([AppRotues.admin]);
    }
    else{

    }
  }

}
