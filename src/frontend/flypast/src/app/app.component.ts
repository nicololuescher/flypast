import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    activeLanguage = 'de';

    constructor(private translate: TranslateService, private router: Router) {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        // Navigate back to start in case of refresh
        this.router.events.pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd)).subscribe((event) => {
            if (event.id === 1 && event.url === event.urlAfterRedirects) {
                if (router.url !== '/user/login') {
                    router.navigate(['']);
                }
            }
        });
    }

    public changeLanguage(language: 'de' | 'fr' | 'it' | 'en'): void {
        this.translate.use(language);
        this.activeLanguage = language;
    }
}
