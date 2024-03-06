import { TestBed } from '@angular/core/testing';

import { MandamentosService } from './mandamentos.service';

describe('MandamentosService', () => {
  let service: MandamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
