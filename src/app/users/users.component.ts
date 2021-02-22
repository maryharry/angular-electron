import { Component, OnInit,AfterViewInit,ElementRef,ViewChild   } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../services/data.service';
import { CommonService } from '../services/common.service';
import * as jQuery from 'jquery';
import '@angular/compiler'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit  {
  users:any;
  searchText:string;
  logged_user_email:string;
  // show_menu:Boolean;
  SidebarWidth :number;
  

  constructor(
    private router: Router,
    private dataService:DataService,
    public commonService: CommonService
    ) { 
    this.users = this.dataService.getUsers();
    this.commonService.setTitle('POS | Users');
    this.logged_user_email = localStorage.getItem('SeesionUser');
    // this.show_menu=this.commonService.is_open;
    console.log(this.commonService.is_open)
  }

  ngAfterViewInit() {
    
   
  }
  
  // @ViewChild('mySidebar')
  // mySidebar: ElementRef;
  ngOnInit(): void {
    
    // (function ($) {
    //   $(document).ready(function(){
    //     console.log("Hello from jQuery!");
    //   });
    //   $(".openbtn").click(function(){
    //     var width_side = document.getElementById("mySidebar");
    //     var side_value = width_side.offsetWidth;
    //     if (side_value < 200) {
    //         document.getElementById("mySidebar").style.width = "200px";
    //         document.getElementById("menus").style.display = "block";
    //         document.getElementById("menus1").style.display = "block";
    //         document.getElementById("menus2").style.display = "block";
    //         document.getElementById("menus3").style.display = "block";
    //         document.getElementById("menus4").style.display = "block";
    //         document.getElementById("menus5").style.display = "block";
    //         document.getElementById("menus6").style.display = "block";
    //         $(document).ready(function() {
    //             $(".left-icons").hover(function() {
    //                 $(this).css("padding", "15px 55px 15px 60px");
    //             }, function() {
    //                 $(this).css("padding", "15px 55px 15px 60px");
    //             });
    //         });
    //     } else {
    //         if (screen.width > 800) {
    //             document.getElementById("mySidebar").style.width = "100px";
    //             $(document).ready(function() {
    //                 $(".left-icons").hover(function() {
    //                     $(this).css("padding", "17px 5px 15px 30px");
    //                 }, function() {
    //                     $(this).css("padding", "17px 5px 15px 0px");
    //                 });
    //             });
    //         } else {
    //             document.getElementById("mySidebar").style.width = "75px";
    //             $(document).ready(function() {
    //                 $(".left-icons").hover(function() {
    //                     $(this).css("padding", "17px 5px 15px 17px");
    //                 }, function() {});
    //             });
    //         }
    //         document.getElementById("main").style.marginLeft = "0px";
    //         document.getElementById("menus").style.display = "none";
    //         document.getElementById("menus1").style.display = "none";
    //         document.getElementById("menus2").style.display = "none";
    //         document.getElementById("menus3").style.display = "none";
    //         document.getElementById("menus4").style.display = "none";
    //         document.getElementById("menus5").style.display = "none";
    //         document.getElementById("menus6").style.display = "none";
    //     }
    //   })
    //   $(".closebtn").click(function(){
       
    //   })
      
    // })(jQuery);
   }

   search(): void {
    let term = this.searchText;
    console.log(term)
    if(term.length == 0) {
      this.users = this.dataService.getUsers(); 
      console.log(this.users)
    }
    this.users = this.users.filter(function(tag) {
        return tag.first_name.indexOf(term) >= 0 || tag.last_name.indexOf(term) >= 0 || tag.email.indexOf(term) >= 0 || tag.status.indexOf(term) >= 0;
    }); 
}
ngOnDestroy(){
 
}

toggleSideBar($event){
  // console.log(document.getElementById("mySidebar").offsetWidth);
  // this.SidebarWidth = this.mySidebar.nativeElement.offsetWidth;
  //   console.log('Width:' + this.SidebarWidth);
  // console.log($event)
  // if(this.SidebarWidth < 200) {
  //   console.log(this.SidebarWidth)
  // } else {
  //   if (this.SidebarWidth > 800) {
  //       console.log(this.SidebarWidth)
  //   }
  // }
 
  this.commonService.is_open = !this.commonService.is_open;
  console.log(this.commonService.is_open)

}

goToProducts(users) {
  this.dataService.user_name = users.first_name+' '+users.last_name;
  // localStorage.setItem('user_name',users.first_name+' '+users.last_name);
  this.router.navigate(['products']);
 
}

logout(){
  localStorage.removeItem('SeesionUser');
  this.router.navigate(['login']);
}

}


