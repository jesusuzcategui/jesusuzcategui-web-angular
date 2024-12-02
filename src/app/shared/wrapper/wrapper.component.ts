import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
  standalone: false
})
export class WrapperComponent {
  @Input() class : string = '';

  get classWrapper() : string {
    return `${this.class} w-full px-[30px] mx-auto`;
  }
}
