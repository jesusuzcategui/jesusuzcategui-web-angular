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
    return `${this.class} w-full max-w-[1200px] mx-auto`;
  }
}
