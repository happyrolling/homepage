import { TestBed } from '@angular/core/testing';

import { MainLoggerService } from './main-logger.service';

describe('MainLoggerService', () => {
  let service: MainLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
