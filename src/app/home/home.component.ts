import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {
 // bodyTag:HTMLBodyElement=document.getElementsByTagName('body')[0];


  constructor(
    private router: Router,
    private commonService: CommonService
    ) { 
      this.commonService.setTitle('POS | DashBoard');
    }
  
    
  ngOnInit(): void { 
   // this.bodyTag.classList.add('custom_bg_color');
    document.body.style.backgroundColor = "#7f3131 !important";

    console.log('parent->HomeComponent')
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "unset";
  //  this.bodyTag.classList.remove('custom_bg_color');
  }

  logout(){ 
    localStorage.removeItem('SeesionUser');
    this.router.navigate(['login']);
  }

}
