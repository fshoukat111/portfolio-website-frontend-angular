import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes'
import { AuthGuard,RoleGuard } from '@app/core/helpers';
import { LoginUserComponent, RegisterUserComponent } from './pages';
const routes: Routes = [
  {path:AppRotues.login,component:LoginUserComponent},
  {path:AppRotues.register,component:RegisterUserComponent},
  {
    path: AppRotues.admin,
    canActivate:[AuthGuard,RoleGuard],
    loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: `${AppRotues.portfolios}`,
    loadChildren: () => import('@app/modules/projects-section/projects-section.module').then(m => m.ProjectsSectionModule)
  },
  { path: '',   redirectTo: `${AppRotues.portfolios}`, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
