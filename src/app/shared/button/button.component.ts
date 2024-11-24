import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: false
})
export class ButtonComponent {
  @Input() action!: (event: Event) => void;
  @Input() label  : string         = '';
  @Input() type   : string         = 'button';
  @Input() variant: string         = 'primary';

  get buttonClasses(): string {
    const baseClass =
      'h-[35px] md:h-[45px] transition ease-in-out delay-100 inline-flex items-center justify-center px-[30px] pt-[8.5px] pb-[8.5px] border-[2px] rounded-[50px] font-dm_sans tracking-[1px]';

    const variants: { [key: string]: string } = {
      primary:
        'bg-transparent border-primary hover:border-secondary hover:text-secondary text-primary',
      secondary:
        'bg-transparent border-textprimary hover:border-primary hover:text-primary text-textprimary',
      terciary:
        'bg-transparent border-backgroundsecondary hover:border-secondary hover:text-secondary text-backgroundsecondary',
      filled:
        'bg-primary border-primary hover:bg-secondary hover:border-secondary hover:text-textprimary text-backgroundsecondary',
    };

    return `${baseClass} ${variants[this.variant] || variants['primary']}`;
  }

  handleClick(event: Event){
    if(this.action) this.action(event);
  }

  
}
