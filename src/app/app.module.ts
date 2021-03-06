import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserComponent, RegisterUserComponent } from '@app/pages';
import { AuthGuard, JwtInterceptor, RoleGuard } from '@app/core/helpers';
import { MaterialUiModule } from '@app/shared/modules';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ToastrModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    AuthGuard,
    RoleGuard,
    ToastrService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
