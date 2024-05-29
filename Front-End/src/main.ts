import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ConfigService } from './app/services/config.service';
import { APP_INITIALIZER } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

export function initializeApp(configService: ConfigService) {
  return (): Promise<void> => configService.loadConfig();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }
  ]
}).catch(err => console.error(err));
