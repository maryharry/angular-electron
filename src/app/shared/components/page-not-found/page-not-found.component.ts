import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private commonService: CommonService) {
    this.commonService.setTitle('POS | Page not found');
  }

  ngOnInit(): void {
    console.log('PageNotFoundComponent')
  }
}
