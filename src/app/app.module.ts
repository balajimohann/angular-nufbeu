import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';

@NgModule({
  imports:      [ BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://electronics.local:9002',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.5',
        anonymousConsents: true
      },
      view:{
        infiniteScroll:{
          active:true,
          productLimit:8
        }
      }
    }),],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
