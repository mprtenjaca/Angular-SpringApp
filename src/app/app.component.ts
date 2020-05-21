import { Component, OnInit } from '@angular/core';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('hr');
    translate.use('hr');
  }

  ngOnInit(): void {
  }

}
