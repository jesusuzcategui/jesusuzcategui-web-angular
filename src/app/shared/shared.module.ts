import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ContentfulService } from './contentful.service';
import { SectionComponent } from './section/section.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SkillCarouselComponent } from './skill-carousel/skill-carousel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SectionComponent,
    WrapperComponent,
    TitleSectionComponent,
  ],
  imports: [
    CommonModule,
    SwiperComponent,
    SkillCarouselComponent
  ],
  providers: [ContentfulService],
  exports: [
    ButtonComponent,
    SectionComponent,
    WrapperComponent,
    TitleSectionComponent,
    SwiperComponent,
    SkillCarouselComponent
  ]
})
export class SharedModule { }
