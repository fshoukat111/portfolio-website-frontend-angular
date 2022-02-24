import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userSectionReducer } from '@app/shared/stores/users/user.reducers';
import { UserSectionEffects } from '@app/shared/stores/users/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: userSectionReducer
    },
    {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictActionTypeUniqueness: true,
      },
    }
    ),

    EffectsModule.forRoot([
      UserSectionEffects    ]),
  ]
})
export class CoreModule { }
