import { TestBed } from '@angular/core/testing';

import { SinsCommittedService } from './sins-committed.service';

describe('SinsCommittedService', () => {
  let service: SinsCommittedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinsCommittedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
