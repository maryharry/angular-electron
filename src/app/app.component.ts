import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from './services/common.service';
import { Router, NavigationEnd, Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened:Boolean;
  routename:string;
  activeNavRoutes: string[];
  urlName:string;
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    public router: Router,
    public commonService: CommonService
    ) {
      this.commonService.setTitle('Dynamic Title : POS SYSTEM');

      this.translate.setDefaultLang('en');
      this.opened = false;
      this.routename = router.url; 
      this.activeNavRoutes = this.commonService.activeNavRoutes;
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }

  goToPage(url){
    console.log(url)
    this.commonService.is_open = false;
    // localStorage.removeItem('SeesionUser');
    // this.router.navigate(['users']);
    this.router.navigate([url]);
  }
  title = 'angular-electron';
}
