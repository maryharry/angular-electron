import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class CommonService {
    activeNavRoutes: string[];
    is_open:Boolean;
    constructor(
        public router: Router,
        private titleService: Title
    ) {
        console.log("titleService"+this.titleService)
        this.activeNavRoutes = ['/users','/products']
        this.is_open = false;
    }

    // Get Parent Route if any
    parentUrl() {
        return this.router.url.split('/')[1];
    }

    // Get Child Route if any
    childUrl() {
        return this.router.url.split('/')[2];
    }

    // Set Title
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    // Uppercase First
    Ucase(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}