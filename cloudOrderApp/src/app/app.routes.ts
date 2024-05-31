import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Verifica il percorso
import { AuthenticationFlowComponent } from './authentication-flow/authentication-flow.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'authentication', component: AuthenticationFlowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
