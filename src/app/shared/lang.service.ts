import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private langSubject = new BehaviorSubject<string>('es');

  lang$ = this.langSubject.asObservable();

  currentLanguage = 'es';

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  setLanguage(lang: string, redirect: boolean = false) {
    this.langSubject.next(lang);
    this.translate.use(lang);

    if(redirect) this.navigate(lang);
  }

  getLanguage(): string {
    return this.langSubject.value;
  }

  navigate(lang: string) {
    // Obtiene la URL actual
    const currentUrl = this.router.url;

    // Divide la URL en segmentos
    const segments = currentUrl.split('/');

    // Reemplaza el prefijo del idioma
    if (segments.length > 1) {
      segments[1] = lang; // Cambia el idioma en el primer segmento
    }

    // Reconstruye la URL y navega
    const newUrl = segments.join('/');
    this.router.navigateByUrl(newUrl);
  }
}
