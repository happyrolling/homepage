import { TestBed } from '@angular/core/testing';

import { AppLogger } from './main-logger.service';

describe('MainLoggerService', () => {
  let service: AppLogger;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLogger);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
