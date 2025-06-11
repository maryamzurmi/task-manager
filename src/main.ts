import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import bootstrap from './main.server';
import { FormsModule } from '@angular/forms';
platformBrowserDynamic().bootstrapModule(AppModule);

