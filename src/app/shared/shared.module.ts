import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogger } from './services/main-logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AppLogger],
})
export class SharedModule {}
