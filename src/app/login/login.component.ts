import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {AuthGuardService} from '../services/auth-guard.service';
import { CommonService } from '../services/common.service';
import * as jQuery from 'jquery';
import { remote } from 'electron';

import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;
  
  constructor(
    private router: Router,
    private formbuilder:FormBuilder,
    private authService:AuthGuardService,
    private commonService:CommonService,
    private notifyService : NotificationService
    ) { 
    
      this.commonService.setTitle("POS | Login");
     

    }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password:['',Validators.required]
   });
    if(this.authService.gettoken) {
      this.router.navigateByUrl("/home");
    }
    console.log('LoginComponent');
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
        $('body').css("background-color",'red');
      });
    });

   
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }

  createForm() {
    
  //  console.log(this.loginForm)
  }



  SubmitLoginForm() {
    this.submitted = true;
    console.log(this.loginForm.controls)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.notifyService.showError("Please enter username and password", "POS")
        return;
    }
     localStorage.setItem("SeesionUser",this.loginForm.value.email);
    this.router.navigateByUrl("/home");
  }

}
