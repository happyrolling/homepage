import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoggerLevel, AppProviders } from 'src/const';
import { AppLogger } from 'src/utilities';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/utilities/modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [
    AppLogger,
    { provide: AppProviders.LoggerLevel, useValue: AppLoggerLevel.DEVELOPMENT },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
