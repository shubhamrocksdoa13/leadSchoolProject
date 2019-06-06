import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService} from './login.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers:[LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
