import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoggerLevel, AppProviders } from 'src/const';
import { MainLoggerService } from 'src/utilities';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [
    MainLoggerService,
    { provide: AppProviders.LoggerLevel, useValue: AppLoggerLevel.DEVELOPMENT },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
