import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userSectionReducer,UserSectionEffects } from '@app/shared/stores';
import { adminSectionReducer,AdminSectionEffects } from '@app/modules/admin/store';
import { projectSectionReducer } from '@app/modules/projects-section/store/project.reducer';
import { ProjectSectionEffects } from '@app/modules/projects-section/store/project.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: userSectionReducer,
      admin: adminSectionReducer,
      portfolio: projectSectionReducer
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
      AdminSectionEffects,
      ProjectSectionEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
  ],
})
export class CoreModule { }
