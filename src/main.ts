import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { register } from 'swiper/element';


register();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


