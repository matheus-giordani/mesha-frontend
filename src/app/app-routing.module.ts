import { ViewRegisterComponent } from './components/view-register/view-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { ListRegisterComponent } from './components/list-register/list-register.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

const routes: Routes = [
  {path:'registros', component: ListRegisterComponent },
  {path:':id/registrar', component: FormRegisterComponent },
  {path:':id/validar', component: FormRegisterComponent },
  {path:'**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
