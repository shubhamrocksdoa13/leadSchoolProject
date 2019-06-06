import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logIn = true;
  public userMobileNumber: string;
  public userPassword = '';
  public loginMobile:string;  
  public loginPass:string;  
  public err:string;
  public successMsg= false;
  user:any;
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getRegisterdData();
  }
  toggleLogIn(x){
    if(x === 'logIn'){
      this.logIn = true;
    }
    if(x === 'signIn'){
      this.logIn = false;
    }
  }
  signInButton(){
    console.log(this.userMobileNumber);
    console.log(this.userPassword);
    this._loginService.signIn(this.userMobileNumber, this.userPassword);
    this.getRegisterdData();
    this.successMsg = true;
    console.log(this.successMsg);
    
  }

  getRegisterdData(){
    let data = this._loginService.getTotalUsers();
    console.log(data);  
    this.user = data;
    // console.log(data.registers.length);
  } 

  logInFun(){
    if(this.user){
      for(let i=0; i<= this.user.registers.length; i++){
      
        if(i <= this.user.registers.length){
          if(this.user.registers[i].username === this.loginMobile){
            if(this.user.registers[i].password === this.loginPass && this.user.registers[i].username === this.loginMobile){
              console.log("User Matched");
              return this._router.navigate(['/students']);
            }
          }
          else{
            this.err = "Mobile Number or Password is not matching";
          }
        }
      }
    }
    else{
      this.err = "Mobile Number or Password is not matching";
    }
  }

}
