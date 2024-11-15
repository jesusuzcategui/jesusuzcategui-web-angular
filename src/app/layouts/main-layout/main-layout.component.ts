import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [RouterModule]  // Importa RouterModule aquí si es un standalone component
})
export class MainLayoutComponent {}
