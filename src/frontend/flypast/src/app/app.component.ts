import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    activeLanguage = 'de';

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }

    public changeLanguage(language: 'de' | 'fr' | 'it' | 'en'): void {
        this.translate.use(language);
        this.activeLanguage = language;
    }
}
