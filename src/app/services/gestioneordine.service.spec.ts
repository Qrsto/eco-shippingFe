import { TestBed } from '@angular/core/testing';

import { GestioneordineService } from './gestioneordine.service';

describe('GestioneordineService', () => {
  let service: GestioneordineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneordineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
