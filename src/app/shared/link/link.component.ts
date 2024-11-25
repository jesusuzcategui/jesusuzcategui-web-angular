import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  standalone: false
})
export class LinkComponent {
  @Input() href   : string = '#';
  @Input() target : string = '_self';
  @Input() rel    : string = '';
  @Input() class  : string = '';

  get linkClass() : string {
    return `${this.class} text-[14px] md:text-[18px] text-primarytext hover:text-primary no-underline`;
  }
}
