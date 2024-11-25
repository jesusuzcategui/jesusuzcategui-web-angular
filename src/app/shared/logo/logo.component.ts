import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  standalone: false
})
export class LogoComponent {
  @Input() version : string = 'large';
}
