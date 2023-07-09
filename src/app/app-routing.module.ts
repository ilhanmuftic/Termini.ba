import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TerminiComponent } from './termini/termini.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: TerminiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }