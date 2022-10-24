import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoggerLevel, AppProviders } from 'src/const';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppLogger } from './shared/services/main-logger.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, CoreModule],
  providers: [
    AppLogger,
    { provide: AppProviders.LoggerLevel, useValue: AppLoggerLevel.DEVELOPMENT },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
