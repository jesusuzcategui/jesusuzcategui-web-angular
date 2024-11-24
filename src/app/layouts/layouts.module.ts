import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, MainLayoutComponent]
})
export class LayoutsModule { }
