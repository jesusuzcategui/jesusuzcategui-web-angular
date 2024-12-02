import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ContentfulService } from './contentful.service';
import { SectionComponent } from './section/section.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SkillCarouselComponent } from './skill-carousel/skill-carousel.component';
import { LogoComponent } from './logo/logo.component';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { LinkComponent } from './link/link.component';
import { LangSwitchComponent } from './lang-switch/lang-switch.component';
import { LangService } from './lang.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ButtonComponent,
    SectionComponent,
    WrapperComponent,
    TitleSectionComponent,
    DesktopMenuComponent,
    LinkComponent,
    LogoComponent,
    LangSwitchComponent
  ],
  imports: [
    CommonModule,
    SwiperComponent,
    SkillCarouselComponent,
    TranslateModule
  ],
  providers: [ContentfulService, LangService],
  exports: [
    ButtonComponent,
    SectionComponent,
    WrapperComponent,
    TitleSectionComponent,
    SwiperComponent,
    SkillCarouselComponent,
    DesktopMenuComponent,
    LinkComponent,
    LogoComponent,
    LangSwitchComponent
  ]
})
export class SharedModule { }
