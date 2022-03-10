import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userSectionReducer } from '@app/shared/stores/users/user.reducers';
import { UserSectionEffects } from '@app/shared/stores/users/user.effects';
import { AdminSectionEffects } from '@app/modules/admin/stores/admin.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { adminSectionReducer } from '@app/modules/admin/stores/admin.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: userSectionReducer,
      admin: adminSectionReducer
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
      UserSectionEffects,
      AdminSectionEffects 
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
  ],
})
export class CoreModule { }
