import { TestBed } from '@angular/core/testing';

import { WeekserviceService } from './weekservice.service';

describe('WeekserviceService', () => {
  let service: WeekserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
