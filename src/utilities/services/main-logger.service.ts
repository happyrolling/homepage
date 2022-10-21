import { Injectable } from '@angular/core';
import { Logger } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MainLoggerService implements Logger {
  private _prefix = 'Logger';

  constructor() {}

  log(): void {
    throw new Error('Method not implemented.');
  }
  error(): void {
    throw new Error('Method not implemented.');
  }
  debug(): void {
    throw new Error('Method not implemented.');
  }
  secure(): void {
    throw new Error('Method not implemented.');
  }
}
