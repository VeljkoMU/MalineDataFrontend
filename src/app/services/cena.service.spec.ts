import { TestBed } from '@angular/core/testing';

import { CenaService } from './cena.service';

describe('CenaService', () => {
  let service: CenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
