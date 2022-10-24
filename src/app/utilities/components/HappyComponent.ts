import { Component } from '@angular/core';
import { AppLogger } from '../../shared/services/main-logger.service';

@Component({ template: '' })
export abstract class HappyComponent {
  constructor(public logger: AppLogger) {}
}
