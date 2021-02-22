import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  gettoken(){  
    console.log(localStorage.getItem("SeesionUser"));
    return !!localStorage.getItem("SeesionUser");  
    } 
}
