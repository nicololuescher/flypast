import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    activeLanguage = 'en';

    constructor(private translate: TranslateService, private router: Router) {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        // Navigate back to start in case of refresh
        this.router.events.pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd)).subscribe((event) => {
            if (event.id === 1 && event.url === event.urlAfterRedirects) {
                if (router.url.includes('admin')) {
                    router.navigate(['admin']);
                } else if (router.url.includes('dashboard')) {
                    router.navigate(['dashboard']);
                } else if (router.url.includes('map')) {
                    return;
                }
                else if (router.url !== '/user/login') {
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
