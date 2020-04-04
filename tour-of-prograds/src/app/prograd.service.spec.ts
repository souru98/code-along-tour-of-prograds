import { TestBed } from '@angular/core/testing';

import { ProgradService } from './prograd.service';

describe('ProgradService', () => {
  let service: ProgradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
