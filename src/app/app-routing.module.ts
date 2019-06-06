import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'logIn', pathMatch: 'full' },
  { path: 'logIn', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'students', loadChildren: './components/students/students/students.module#StudentsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
