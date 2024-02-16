import { TestBed } from '@angular/core/testing';

import { ViewOrderInfoServiceService } from './view-order-info-service.service';

describe('ViewOrderInfoServiceService', () => {
  let service: ViewOrderInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewOrderInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
