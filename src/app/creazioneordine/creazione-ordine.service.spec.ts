import { TestBed } from '@angular/core/testing';

import { CreazioneOrdineService } from './creazione-ordine.service';

describe('CreazioneOrdineService', () => {
  let service: CreazioneOrdineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreazioneOrdineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
