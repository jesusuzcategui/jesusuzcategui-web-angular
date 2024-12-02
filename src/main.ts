/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { register } from 'swiper/element';

Swiper.use([Autoplay, Pagination, Navigation]);


register();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


