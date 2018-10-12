import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NotesComponent } from '../notes/notes.component';
import { AuthorizationGuardService } from '../guards/authorization-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NotesComponent, canActivate:[AuthorizationGuardService]}

];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {


}
