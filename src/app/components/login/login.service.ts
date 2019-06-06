import { Injectable } from '@angular/core';
import { register } from './login';
import { of } from 'rxjs';

@Injectable()
export class LoginService {
  private nextId: number;

  constructor() {
    let registers = this.getSignInData();
    if (registers.length  === 0 ){
      this.nextId = 0;
    }
    else{
      let maxId = registers[registers.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public signIn(text1:string, text2:string):void{
    let user = new register(this.nextId, text1, text2);
    let registers = this.getSignInData();
    registers.push(user);
    this.setLocalStorageRegister(registers);
    this.nextId++;
  }

  // public getSignInData(): register[] {
    public getSignInData(){
    let localStorageItem = JSON.parse(localStorage.getItem('registers'));
    return localStorageItem == null ? [] : localStorageItem.registers;
  }

  public getTotalUsers(){
    let totalUsers = JSON.parse(localStorage.getItem('registers'));
    return totalUsers;
  }

  setLocalStorageRegister(registers: register[]):void{
    localStorage.setItem('registers', JSON.stringify({ registers: registers }));
  }


  
  
}
