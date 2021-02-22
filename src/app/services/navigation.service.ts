import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
  
  
@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit  {
    private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  
    getShowNav(){
        return this.showNav$.asObservable();
      }
    
      setShowNav(showHide: boolean) {
          alert('service')
        this.showNav$.next(showHide);
      }
    
      toggleNavState() {
        this.showNav$.next(!this.showNav$.value);
      }
    
      isNavOpen() {
        return this.showNav$.value;
      }
  
}