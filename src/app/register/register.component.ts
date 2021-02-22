import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private commonService: CommonService) { 
    this.commonService.setTitle('Register');
  }

  ngOnInit(): void {
    console.log('RegisterComponent')
   }

}
