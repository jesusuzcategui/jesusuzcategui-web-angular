import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.scss',
  standalone: false
})
export class LangSwitchComponent implements OnInit {

  currentLang : string = '';

  optionsLang : Array<string> = ['en', 'es'];

  open        : boolean = false;

  constructor(private langService: LangService){}
  
  ngOnInit(): void {
    this.getCurrentLang();
  }

  switchLang(lang: string) : void {
    this.langService.setLanguage(lang, true);
    this.toggleDrop();
    this.getCurrentLang();
  }

  toggleDrop(){
    this.open = !this.open;
  }

  getCurrentLang(){
    this.currentLang = this.langService.getLanguage();
  }
}
