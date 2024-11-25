import { AfterViewInit, Component, ContentChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input } from '@angular/core';
import { SwiperContainer } from 'swiper/element-bundle';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements AfterViewInit {

  @Input() swiperId : string = '';

  @Input() items_desktop : number = 1;

  @Input() items_mobile  : number = 1;
  
  @ContentChild('swiper') swiperRef!: ElementRef<SwiperContainer>;

  index: number = 0;

  initialized : boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const shadowRoot = document
      .getElementById(this.swiperId)
      ?.getElementsByClassName('swiper')[0]?.shadowRoot
      ?.firstChild as HTMLElement;

      shadowRoot.style.paddingBottom = '35px';
    }, 500);
  }

  nextSlide() : void {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  prevSlide() : void {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

}
