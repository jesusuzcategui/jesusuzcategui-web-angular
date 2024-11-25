import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
  standalone: false
})
export class TitleSectionComponent {

  @Input() title_bg : string = '';
  @Input() title    : string = '';
  @Input() variant  : string = 'primary';

  get titleClassesBg() : string {
    const baseClass = 'text-[40px] md:text-[78px] tracking-[-1px] text-center uppercase font-anton';
    
    const variants: { [key: string]: string } = {
      primary:   'text-backgroundsecondary tracking-[-1px]',
      secondary: 'text-primary opacity-50 tracking-[-1px]',
      terciary:  'text-terciary tracking-[10px]',
    };

    return `${baseClass} ${variants[this.variant] || variants['primary']}`;
  }
  
  get titleClasses() : string {
    const baseClass = 'text-[31px] md:text-[45px] absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] uppercase font-anton';
    const variants: { [key: string]: string } = {
      primary:   'text-white',
      secondary: 'text-primary',
      terciary:  'hidden',
    };

    return `${baseClass} ${variants[this.variant] || variants['primary']}`;
  }

}
