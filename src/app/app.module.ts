import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Configuración del loader para ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Necesario para aplicaciones en navegadores
    RouterModule.forRoot([]), 
    LayoutsModule,
    SharedModule,
    CoreModule, // Inicializamos un sistema de rutas vacío
    PagesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es'
    })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent], // Componente inicial al arrancar la aplicación
})
export class AppModule { }
