import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrl: './desktop-menu.component.scss',
  standalone: false,
})
export class DesktopMenuComponent implements OnInit, OnDestroy {
  
  private suscription!: Subscription;

  currentLang : string = '';

  constructor(private langService: LangService){}

  ngOnInit(): void {
    this.suscription = this.langService.lang$.subscribe((lang) => {
      this.currentLang = lang;
      console.log('Language changed', lang);
    });
  }

  ngOnDestroy(): void {
    if(this.suscription) this.suscription.unsubscribe();
  }

  buildUrl(path: string) : string {
    return '/' + this.currentLang + path;
  }
}
