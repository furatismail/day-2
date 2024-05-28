import { TestBed } from '@angular/core/testing';

import { ParkingCalculatorService } from './parking-calculator.service';

describe('ParkingCalculatorService', () => {
  let service: ParkingCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
