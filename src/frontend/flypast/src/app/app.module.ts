import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AppStoreModule} from "./store/app-store.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AppStoreModule, HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'de',
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 100,
            logOnly: true
        }),
        EffectsModule.forRoot([])],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
