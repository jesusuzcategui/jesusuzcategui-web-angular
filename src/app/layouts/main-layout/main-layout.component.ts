import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangService } from '../../shared/lang.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: false
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private langService : LangService
  ){
    this.langService.setLanguage('es');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const lang = params['lang'];
      const validLanguages = ['es', 'en'];

      if (validLanguages.includes(lang)) {
        this.langService.setLanguage(lang, true);
      } else {
        this.langService.setLanguage('es', true); // Redirige al idioma predeterminado
      }
    });
  }
}
