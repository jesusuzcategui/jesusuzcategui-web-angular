import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente inicial al arrancar la aplicación
})
export class AppModule { }
