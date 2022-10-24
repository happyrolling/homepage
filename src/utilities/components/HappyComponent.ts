import { Component } from '@angular/core';
import { AppLogger } from '../services/main-logger.service';

@Component({ template: '' })
export abstract class HappyComponent {
  constructor(public logger: AppLogger) {}
}
