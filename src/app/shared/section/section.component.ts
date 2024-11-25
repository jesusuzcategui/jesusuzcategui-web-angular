import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  standalone: false
})
export class SectionComponent {
  @Input() variant : string = 'normal';
  @Input() class   : string = '';

  get sectionClass() : string {
    const baseClass = 'w-full px-[20px] md:px-[31px] py-[35px] md:py-[45px]';
    
    const variants: { [key: string]: string } = {
      primary:   'bg-transparent',
      secondary: 'bg-secondary',
      terciary:  'bg-textprimary',
    };

    return `${baseClass} ${this.class} ${variants[this.variant] || variants['primary']}`;
  };
}
