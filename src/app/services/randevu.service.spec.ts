import { TestBed } from '@angular/core/testing';

import { RandevuService } from './randevu.service';

describe('RandevuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandevuService = TestBed.get(RandevuService);
    expect(service).toBeTruthy();
  });
});
