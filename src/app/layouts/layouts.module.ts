import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, MainLayoutComponent, SharedModule]
})
export class LayoutsModule { }
