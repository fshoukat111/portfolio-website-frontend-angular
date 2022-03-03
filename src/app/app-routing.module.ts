import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes'
import { AuthGuard } from './core/helpers';
import { LoginUserComponent, RegisterUserComponent } from './pages';
import { selectedUser } from './shared/enums/selected.user';
const routes: Routes = [
  {path:AppRotues.login,component:LoginUserComponent},
  {path:AppRotues.register,component:RegisterUserComponent},
  {
    path: AppRotues.admin,
    canActivate:[AuthGuard],
    loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: AppRotues.portfolios,
    loadChildren: () => import('@app/modules/projects-section/projects-section.module').then(m => m.ProjectsSectionModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
