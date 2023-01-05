import { TestBed } from '@angular/core/testing';

import { GestioneOrdineService } from './gestioneordine.service';

describe('GestioneOrdineService', () => {
  let service: GestioneOrdineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneOrdineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
