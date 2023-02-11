import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class LocaleService {

  constructor(private translateService: TranslateService) {
  }

  init() {
    this.translateService.addLangs(['ar', 'en']);
    this.translateService.setDefaultLang('ar');
    let browserLang = this.translateService.getBrowserLang();
    browserLang = browserLang.match(/ar|en/) ? browserLang : 'ar';
    this.translateService.use('ar');
  }


  useLanguage(lang: string): any {
    this.translateService.use(lang);
  }

}
