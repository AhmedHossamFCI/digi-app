import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private localeService: LocaleService) {
  }
  title = 'digi-app';



  ngOnInit(): void {
    this.localeService.init();
  }
}
